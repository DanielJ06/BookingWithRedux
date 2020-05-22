import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { MdRemoveCircle, MdAddCircle, MdDelete } from 'react-icons/md';

import { 
  removeReserve,
  updateAmount,
} from '../../store/modules/Booking/actions';

import { 
  Container, 
  Title, 
  FinishButton, 
  CardContainer,
  QtdArea
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
      <Title>
        Você solicitou 
        {itemsQtd.length === 1 ?
          ` ${itemsQtd.length} reserva` :
          ` ${itemsQtd.length} reservas`
        }</Title>
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
    </Container>
  );
}

export default Booking;