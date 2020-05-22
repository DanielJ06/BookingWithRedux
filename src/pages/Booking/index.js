import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { removeReserve } from '../../store/modules/Booking/actions';

import { 
  Container, 
  Title, 
  FinishButton, 
  CardContainer 
} from './styles';

function Booking() {
  const dispatch = useDispatch();
  const itemsQtd = useSelector(state => state.booking);

  function handleDelete(id) {
    dispatch(removeReserve(id))
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
            <span>Qtd: {item.amount}</span>
            <button
              type="button"
              onClick={() => handleDelete(item.id)}
            >
              X
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