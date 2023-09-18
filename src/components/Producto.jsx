import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavImg from "../img/coraz.png";
import NoFavImg from "../img/cora.png";

export const Producto = ({
  producto,
  agregarAFavoritos,
  eliminarDeFavoritos,
}) => {
  const [favorito, setFavorito] = useState(false);

  function handleClick() {
    if (favorito) {
      eliminarDeFavoritos(producto);
      setFavorito(false);
    } else agregarAFavoritos(producto);
    setFavorito(true);
  }

  return (
    <div className="producto">
      <Link to={`/producto/${producto.id}`}>
        <img src={producto.image} />
      </Link>
      <div className="info">
        <p>{producto.title}</p>
        <mark>${producto.price}</mark>
      </div>
      {favorito ? (
        <img
          className="fav-icon"
          src={NoFavImg}
          alt="Favorito"
          onClick={handleClick}
        />
      ) : (
        <img
          className="fav-icon"
          src={FavImg}
          alt="No Favorito"
          onClick={handleClick}
        />
      )}
    </div>
  );
};
