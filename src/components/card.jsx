import React, { useEffect, useState } from 'react';
import { getElements, deleteElement } from '../API/index.js';

export const Card = () => {
  const [bandas, setBanda] = useState([]);

  useEffect(() => {
    loadElements();
  }, []);

  const loadElements = async () => {
    try {
      const response = await getElements();

      if (response.status === 200) {
        setBanda(response.data);
      }
    } catch (error) {
      console.error('Error al cargar los elementos:', error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este elemento?');
  
    if (confirmDelete) {
      try {
        await deleteElement(id);
        await loadElements();
      } catch (error) {
        console.error('Error al eliminar el elemento:', error);
      }
    }
  };
  

  return (
    <div>
      <div className='row'>
        
        {bandas.map((banda, index) => (
          <div className='col' key={index}>
            <div className='card'>
              <div className='card-header'>
                  <h5>{banda.artistaBanda}</h5>
              </div>
              <div className='card-body'>
                  <p>{banda.cancion}</p>
                  <p>id: {banda.id}</p>
                  {banda.enlace}
                  {/* <img className='img-thumbnail' src={banda.imagen} alt="band"/> */}
              </div>
              <div className='card-footer'>
                    <button  className='btn btn-danger' onClick={() => handleDelete(banda.id)}>Eliminar</button>
              </div>
            </div>
        </div>

      ))}
      </div>
      
    </div>
  );
};
