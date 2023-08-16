import React, { useEffect, useState } from 'react';
import { getElements, deleteElement } from '../API/index.js';
import '../styles/card.css';

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
    <>
      <section>
        
        {bandas.map((banda, index) => (
          <div className='contenedor' key={index}>
            <header className='encabezado'>
              {banda.artistaBanda}
            </header>
            <div className='cuerpo'>
                Canción: {banda.cancion} <br />
                Link: {banda.enlace} <br />
                Fecha de subida: {banda.fechaPost} <br />
            </div>
            <div className='pie'>
              <button onClick={()=> handleDelete(banda.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </section>
      
    </>
  );
};
