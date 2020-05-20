import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const reserveQtd = useSelector(state => state.booking);

  return (
      <header>
          <Link to="/">logo</Link>
          <h1><Link to="/booking">Minhas reservas:</Link> {reserveQtd.length}</h1>
      </header>
  );
}

export default Header;