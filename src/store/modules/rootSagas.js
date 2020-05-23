import { all } from 'redux-saga/effects';

import reserve from './Booking/sagas';

export default function* rootSaga() {
    return yield all([
        reserve,
    ])
}