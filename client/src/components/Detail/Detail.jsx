import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { pokeDetail, deletePoke } from "../../redux/actions";

import Style from "./Detail.module.css";

import { Link } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(pokeDetail(id));
  }, [dispatch]);

  useEffect(() => {
    return dispatch(deletePoke());
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
            <div className={Style.letras}>
              <h3> Mi nombre es {detail.name}!!</h3>
              <h3> Tengo {detail.life} de vida!! </h3>
              <h3>Tengo {detail.strength} de fuerza!!</h3>
              <h3> Tengo {detail.defense} de defensa!!</h3>
              <h3> Tengo {detail.speed} de velocidad!!</h3>
              <h3> Mi peso es {detail.weight / 10} kg!!</h3>
              <h3> Mi altura es {detail.height * 10} centimetros!!</h3>
              <h3>Mis tipos son: </h3>
              {detail.types?.map((e, index) => {
                return <h3 key={index}>{e.name ? e.name : e}</h3>;
              })}
            </div>
            <div className={Style.imagen}>
              <img
                src={detail.image}
                alt="cargando"
                width="700px"
                height="250px"
              />
            </div>
          </div>
        </div>
      ) : (
        <p> Loading Pokemon..</p>
      )}
      <br />
      <Link to="/home">
        <button className={Style.btn}>Volver</button>
      </Link>
      <br />
    </div>
  );
};

export default Detail;
