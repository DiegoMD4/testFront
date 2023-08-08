import React from 'react';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';

function Musica() {
  return (
    <>
      <h1>Musica</h1>
      <Link to='/Formulario'>Añadir musica</Link>
       <Card/>
    </>
  )
}

export default Musica

