import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { MdRemoveCircle, MdAddCircle, MdDelete, MdRemoveShoppingCart } from 'react-icons/md';

import { 
  removeReserve,
  updateAmount,
} from '../../store/modules/Booking/actions';

import { 
  Container, 
  FinishButton, 
  CardContainer,
  QtdArea,
  EmptyCart,
  StartShopping
} from './styles';

function Booking() {
  const dispatch = useDispatch();
  const itemsQtd = useSelector(state => state.booking);

  function handleDelete(id) {
    dispatch(removeReserve(id));
  }

  function decrementAmount(trip) {
    dispatch(updateAmount(trip.id, trip.amount - 1));
  }

  function incrementAmount(trip) {
    dispatch(updateAmount(trip.id, trip.amount + 1));
  }

  return (
    <Container>
        {itemsQtd.length === 0 ? (
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
            {itemsQtd.map(item => (
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

                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  >
                  <MdDelete size={25} color="#191919" />
                </button>
              </CardContainer>
            ))}

            <footer>
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