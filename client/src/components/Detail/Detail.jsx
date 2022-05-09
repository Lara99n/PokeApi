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
    <div className={Style.detalle}>
      <br />
      {detail && detail ? (
        <div className={Style.detalle}>
          <div className={Style.titulo}>
            <h1>¡Un {detail.name} salvaje ha aparecido!</h1>
          </div>
          <div className={Style.carta}>
            <h3> Mi nombre es {detail.name}!!!</h3>
            <h3> Tengo {detail.life} de vida!! </h3>
            <h3>Tengo {detail.strength} de fuerza!!</h3>
            <h3> Tengo {detail.defense} de defensa!</h3>
            <h3> Tengo {detail.speed} de velocidad!!</h3>
            <h3> Mi altura es {detail.height} metros!!</h3>
            <h3> Mi peso es {detail.weight} kg!!</h3>
            <img
              src={
                detail.image
                  ? detail.image
                  : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/71.svg"
              }
              alt="cargando"
              width="200px"
              height="250px"
            />
            <h3>Mis tipos son: </h3>
            {detail.types?.map((e, index) => {
              return <h3 key={index}>{e.name ? e.name : e}</h3>;
            })}
          </div>
        </div>
      ) : (
        <p> Loading Pokemon..</p>
      )}
      <br />
      <Link to="/home">
        <button className={Style.btn}>Volver al Home</button>
      </Link>
      <br />
    </div>
  );
};

export default Detail;
