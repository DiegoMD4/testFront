import React, { useEffect, useState } from 'react';
import { getElements, deleteElement } from '../API/index.js';
import { Link } from 'react-router-dom';
import TimeAgo from 'timeago-react';


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
      <section className='container p-4' >
        <div className="row">
          <div className="card-columns">

            {bandas.map((banda, index) => (
              <div className="card animated fadeInDown" key={index}>
                <Link className='' target='_blank' to={banda.enlace}>
                  <img src={banda.image_url} alt="album" className='card-img-top' />
                </Link>
                <div className="card-body">
                  <h5 className='card-title'>{banda.artistaBanda}</h5>
                  <p className='card-text'>{banda.Cancion}</p>
                  <p className='card-text'>
                    <TimeAgo
                      datetime={banda.fechaPost}
                      locale='en'
                    />
                  </p>
                  {/* <Link className='' target='_blank' to={banda.enlace}>{banda.enlace}</Link> */}
                  <Link className='btn btn-primary btn-block' target='_blank'
                    to={`image/:id`}>View Profile
                  </Link> <hr />
                  <Link path={`image/${bandas.id}`} onClick={() => handleDelete(banda.id)} class="btn btn-danger btn-block">
                    Delete image
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>




    </>
  );
};
