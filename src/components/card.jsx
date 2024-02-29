import React, { useEffect, useState } from "react";
import { getElements, deleteElement } from "../API/index.js";
// import { Link } from "react-router-dom";
// import TimeAgo from "timeago-react";

import '../styles/Card.css'

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
      <section className="seccion">
        {bandas.map((banda, index)=>(
          <div style={{border: "1px solid black"}} className="tarjeta" key={index}>
            <h3>{banda.artistaBanda}</h3>
            <img src={banda.image_url} alt="" />
          </div>
        ))}
      </section>
    </>
  );
};
