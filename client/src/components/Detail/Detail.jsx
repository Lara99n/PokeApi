import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { pokeDetail } from "../../redux/actions";

import Style from "./Detail.module.css";

import { Link } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(pokeDetail(id));
  }, [dispatch]);

  const detail = useSelector((state) => state.detalle);

  return (
    <div>
      {detail && detail ? (
        <div className={Style.container}>
          <h1> Mi nombre es {detail.name}</h1>
          <h2>Vida: {detail.life}</h2>
          <h2>Fuerza: {detail.strength}</h2>
          <h2>Defensa: {detail.defense}</h2>
          <h2>Velocidad: {detail.speed}</h2>
          <h2> Altura: {detail.height}</h2>
          <h2>Peso: {detail.weight}</h2>
          <img src={detail.image} alt="cargando" width="200px" height="250px" />
          <div>
            <h3>Tipos:</h3>
            {detail.types?.map((e, index) => {
              return <h3 key={index}>{e.name}</h3>;
            })}
          </div>
        </div>
      ) : (
        <p> Loading Pokemon..</p>
      )}
      <Link to="/home">
        <button>Volver al Home</button>
      </Link>
      <br />
    </div>
  );
};

export default Detail;
