import React from 'react';
import "../styles/viewProfile.css";

export function ViewProfile({ banda, closeModal }) {
  return (
    <div className="ProfileCard">
      <section>
        <img className='img-Modal' src={banda.url} alt={`Imagen de una banda`} />
        <p>ID recuperado: {banda.id}</p>
        <button onClick={closeModal}>Cerrar</button>
      </section>
    </div>
  );
}
