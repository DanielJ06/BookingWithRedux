import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { addReserveSuccess, updateAmountSuccess } from './actions';
import api from '../../../services/api';

function* addToReserve({ id }) {
    const exists = yield select(
        state => state.booking.find(trip => trip.id === id)
    );

    const stock = yield call(api.get, `stock/${id}`);
    const stockAmount = stock.data.amount;
    const currentStock = exists ? exists.amount : 0;

    const amount = currentStock + 1;
    if(amount > stockAmount) {
        alert('O produto solicitado esgotou');
        return;
    }

    if(exists) {
        const amount = exists.amount + 1;
        yield put(updateAmountSuccess(id, amount));
    } else {
        const res = yield call(api.get, `trips/${id}`);
        const data = {
            ...res.data,
            amount: 1
        }
        yield put(addReserveSuccess(data));
    }
}

function* updateAmount({ id, amount }) {
    if(amount <= 0) return;

    const stock = yield call(api.get, `stock/${id}`);
    const stockAmount = stock.data.amount;
    if(amount > stockAmount) {
        alert("O produto solicitado esgotou");
        return;
    }

    yield put(updateAmountSuccess(id, amount))
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve),
    takeLatest('UPDATE_AMOUNT_RESERVE_REQUEST', updateAmount)
]);