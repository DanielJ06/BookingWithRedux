import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';

import { Container, Cart } from './styles';

function Header() {
  const reserveQtd = useSelector(state => 
    state.booking.reduce((total, productAmount) => {
      return total + productAmount.amount;
    }, 0)
  );

  return (
      <Container>
          <Link to="/">logo</Link>

          <Cart to="/booking" >
            <MdShoppingCart color="#191919" size={35} />
            <div>
              <strong >Meu carrinho</strong>
              <span>{reserveQtd === 1 ? `${reserveQtd} reserva` : `${reserveQtd} reservas`}</span>
            </div>
            <span>{reserveQtd}</span>
          </Cart>
      </Container>
  );
}

export default Header;