import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from './styles';
//import Card from '../../components/Card';

import api from '../../services/api';

function Home() {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await api.get('trips');
      setTrips(res.data);
    }
    loadData()
  }, []);

  function handleBook(trip) {
    dispatch({
      type: "ADD_RESERVE",
      trip
    });
  }

  return (
    <Container>
      <ul>
        {trips.map(trip => (
          <li key={trip.id} >
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? 'Disponivel' : 'Indisponivel'}</span>
            <button type="button" onClick={() => handleBook(trip)}>
              <span>Solicitar reserva</span>
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Home;