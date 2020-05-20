import React from 'react';

import { useSelector } from 'react-redux';

import { 
  Container, 
  Title, 
  FinishButton, 
  CardContainer 
} from './styles';

function Booking() {
  const itemsQtd = useSelector(state => state.booking);

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
            <span>Qtd: 2</span>
            <button
              type="button"
              onClick={() => {}}
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