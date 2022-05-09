import React, { useEffect, useState } from "react";
import { pokeTypes, pokeCreate } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Style from "./Create.module.css";

const Create = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const pokemonsTypes = useSelector((state) => state.types);

  const [state, setState] = useState({
    name: "",
    life: "",
    strength: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: [],
  });

  useEffect(() => {
    dispatch(pokeTypes());
  }, []);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  //cada vez q ejecutes esta funcion a mi estado state ademas de lo que tiene agregale el target value de lo que este modificando.
  //la idea es q a medida que va a ejecutandose se vaya agregando en mi useState.

  const handleTypes = (e) => {
    setState({
      ...state,
      types: [...state.types, e.target.value], //traeme lo que ya habia y concatenale el nuevo valor
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(pokeCreate(state));
    alert("Pokemon creado con exito!!!");

    navigate("/home");
  };

  return (
    <div className={Style.container}>
      <h1>Crear tu pokemon!!!!</h1>

      <Link to={`/home`}>
        <button>Volver al Home</button>
      </Link>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Nombre del Pokemon:</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <br />
        <div>
          <label>Vida del Pokemon: </label>
          <input
            type="number"
            name="life"
            value={state.life}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <br />
        <div>
          <label>Fuerza del Pokemon:</label>
          <input
            type="number"
            name="strength"
            value={state.strength}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <br />
        <div>
          <label>Defensa del Pokemon:</label>
          <input
            type="number"
            name="defense"
            value={state.defense}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <br />
        <div>
          <label>Velocidad del Pokemon:</label>
          <input
            type="number"
            name="speed"
            value={state.speed}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <br />
        <div>
          <label>Altura del Pokemon:</label>
          <input
            type="number"
            name="height"
            value={state.height}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <br />
        <div>
          <label>Peso del Pokemon:</label>
          <input
            type="number"
            name="weight"
            value={state.weight}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <br />
        <div>
          <label>Imagen del Pokemon:</label>
          <input
            type="text"
            name="image"
            value={state.image}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <br />

        <select onChange={(e) => handleTypes(e)}>
          {pokemonsTypes.map((e) => (
            <option key={e.name} value={e.name}>
              {e.name}
            </option>
          ))}
        </select>
        <br />

        <button type="submit">Crear Pokemon!! </button>
      </form>
    </div>
  );
};

export default Create;
