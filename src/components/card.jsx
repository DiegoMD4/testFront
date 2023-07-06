import React, { useEffect, useState } from 'react';
import { getElements } from '../API/index.js';

export const Card = () => {
  const [bandas, setBanda] = useState([]);

  useEffect(() => {
    async function loadElements() {
      const response = await getElements();

      if (response.status === 200) {
        setBanda(response.data);
      }
    }
    loadElements();
  }, []);

  return (
    <div>
      <div className='row'>
        
        {bandas.map((banda, index) => (
          <div className='col' key={index}>
        <div className='card'>
          <div className='card-header'>
            <h5>{banda.Artista_Banda}</h5>
          </div>
          <div className='card-body'>
            <p>{banda.Cancion}</p>
             {banda.Enlace}
          </div>
        </div>
        </div>

      ))}
      </div>
      
    </div>
  );
};
