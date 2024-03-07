import React, { useEffect, useState } from "react";
import { getElements, deleteElement } from "../API/index.js";
// import { Link } from "react-router-dom";
import TimeAgo from "timeago-react";

import "../styles/Card.css";

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
      console.error("Error al cargar los elementos:", error);
    }
  };

  // const handleDelete = async (id) => {
  //   const confirmDelete = window.confirm(
  //     "¿Estás seguro de que deseas eliminar este elemento?"
  //   );

  //   if (confirmDelete) {
  //     try {
  //       await deleteElement(id);
  //       await loadElements();
  //     } catch (error) {
  //       console.error("Error al eliminar el elemento:", error);
  //     }
  //   }
  // };

  return (
    <>
       
        <div className="gallery animated fadeInDown">
          {bandas.map((banda, index) => (
            <div className="card" key={index}>
              <img src={banda.image_url} alt="image recuperated from bandas" />
              <footer>
                <h4>{banda.artistaBanda}</h4>
                <p>{banda.Cancion}</p>
                <p>
                  <TimeAgo datetime={banda.fechaPost} locale="en" />
                </p>
                <button className="btnOptions btn-blue">View Profile</button>
                <hr />
                <button className="btnOptions btn-red">Delete element</button>
              </footer>
            </div>
          ))}
        </div>
    </>
  );
};


