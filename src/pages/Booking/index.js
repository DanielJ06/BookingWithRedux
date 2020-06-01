import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { MdRemoveCircle, MdAddCircle, MdDelete, MdRemoveShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../utils/format';

import { 
  removeReserve,
  updateAmountRequest,
} from '../../store/modules/Booking/actions';

import { 
  Container, 
  FinishButton, 
  CardContainer,
  QtdArea,
  EmptyCart,
  StartShopping,
  Total
} from './styles';

function Booking() {
  const dispatch = useDispatch();
    
  const total = useSelector(state => 
    formatPrice(
      state.booking.reduce((total, product) => {
        return total + product.price * product.amount
      }, 0)
    )
  );

  const subTotal = useSelector(state =>
    state.booking.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  )

  function handleDelete(id) {
    dispatch(removeReserve(id));
  }

  function decrementAmount(trip) {
    dispatch(updateAmountRequest(trip.id, trip.amount - 1));
  }

  function incrementAmount(trip) {
    dispatch(updateAmountRequest(trip.id, trip.amount + 1));
  }

  return (
    <Container>
        {subTotal.length === 0 ? (
          <EmptyCart>
            <MdRemoveShoppingCart />

            <div>
              <h2>Oops...</h2>
              <p>Parece que seu carrinho está vazio!</p>
              <StartShopping to="/">Ir para reservas</StartShopping>
            </div>
          </EmptyCart>
        ) : (
          <>
            {subTotal.map(item => (
              <CardContainer key={item.id} >
                <img 
                  src={item.image}
                  alt={item.title}
                />
                <strong>{item.title}</strong>

                <QtdArea>
                  <button type="button" onClick={() => decrementAmount(item)}>
                    <MdRemoveCircle size={25} color="#191919" />
                  </button>
                  <input type="text" readOnly value={item.amount} />
                  <button type="button" onClick={() => incrementAmount(item)}>
                    <MdAddCircle size={25} color="#191919" />
                  </button>
                </QtdArea>

                <strong>R$ {item.subtotal}</strong>

                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  >
                  <MdDelete size={25} color="#191919" />
                </button>
              </CardContainer>
            ))}

            <footer>
              <Total>Total: {total}</Total>
              <FinishButton onClick={() => {}} >
                Solicitar Reservas
              </FinishButton>
            </footer>
          </>
        )}
    </Container>
  );
}

export default Booking;