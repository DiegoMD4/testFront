import React from 'react';
import { Card } from '../components/card';
import { Link } from 'react-router-dom';

function Musica() {
  return (
    <div>
      <h1>Musica</h1>
      <Link to='/Formulario' className='btn btn-primary'>Añadir musica</Link>
       <Card/>
       
    </div>
  )
}

export default Musica

