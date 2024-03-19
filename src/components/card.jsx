import { deleteElement } from "../API/index.js";
import { useBandas } from "../services/hooks/useBandas.js";
import { ViewProfile } from "../modals/viewProfile.jsx";
// import TimeAgo from "timeago-react";
import "../styles/Card.css";
import { useState } from "react";

export const Card = () => {

  const { bandas, refreshGallery } = useBandas()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBanda, setSelectedBanda] = useState(null);

  const openModal = (banda) => {
    setSelectedBanda(banda);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBanda(null);
    setIsModalOpen(false);
  };
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este elemento?"
    );

    if (confirmDelete) {
      try {
        await deleteElement(id);
        refreshGallery();
      } catch (error) {
        console.error("Error al eliminar el elemento:", error);
      }
    }
  };

  return (
    <>
      <div className="gallery animated fadeInDown">
        {bandas.map((banda) => (
          <div className="cardView" key={banda.id}>
            <img src={banda.url} alt="image recuperated from bandas" />
            <footer>
              <h4>{banda.title}</h4>
              <button className="btnOptions btn-blue" onClick={() => openModal(banda)}>View Profile</button>
              <hr />
              <button className="btnOptions btn-red" onClick={() => handleDelete(banda.id)}>Delete element</button>
            </footer>
          </div>
        ))}
      </div>
      {isModalOpen && <ViewProfile banda={selectedBanda} closeModal={closeModal} />}
      {isModalOpen && <div className="overlay"></div>} {/* Agrega el overlay aquí */}
    </>

  );
};


