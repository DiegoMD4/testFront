import React, { useEffect, useState } from 'react';
import { getElements, deleteElement } from '../API/index.js';
import '../styles/Card.css';
import { Link } from 'react-router-dom';

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
      <section className='sectionCard'>
        
        {bandas.map((banda, index) => (
          <div className='contenedor' key={index}>
            <header className='encabezado'>
              <h3>{banda.artistaBanda}</h3>
            </header>
            <div className='cuerpo'>
                Canción: {banda.cancion} <br />
                Link:  <Link className='aPic' target='_blank' to={banda.enlace}>{banda.enlace}</Link>   <br />
                Fecha de subida: {banda.fechaPost} <br />
                {<img className='pic-card' src={banda.imagen} alt="banda-pic"/>}
            </div>
            <div className='pie'>
              <button className='btn-eliminar-card' onClick={()=> handleDelete(banda.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </section>
      
    </>
  );
};
