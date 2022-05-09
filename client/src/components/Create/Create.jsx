import React, { useEffect, useState } from "react";
import { pokeTypes, pokeCreate } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Style from "./Create.module.css";

const validate = (state) => {
  let errors = {};

  if (!state.name.toLowerCase()) {
    errors.name = "El nombre es requerido";
  } else if (!state.life) {
    errors.life = "La vida es requerida,  debe ser mayor a 0 y menor a 200";
  } else if (!state.strength) {
    errors.strength =
      "La fuerza es requerida debe ser mayor a 0 y menor a 1000";
  } else if (!state.defense) {
    errors.defense = "La defensa es requerida ebe ser mayor a 0 y menor a 200";
  } else if (!state.speed) {
    errors.speed = "La velocidad es requerida debe ser mayor a 0 y menor a 500";
  } else if (!state.height) {
    errors.height = "La altura es requerida debe ser mayor a 0 y menor a 100";
  } else if (!state.weight) {
    errors.weight = "El peso es requerido debe ser mayor a 0 y menor a 1000";
  } else if (!state.types.length) {
    errors.types =
      "Los tipos son requeridos solo pueden seleccionarse máximo 2 tipos";
  }
  return errors;
};

const Create = () => {
  const dispatch = useDispatch();

  const pokemonsTypes = useSelector((state) => state.types);

  const [errors, setError] = useState({});

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
      [e.target.name]: e.target.value.toLowerCase(),
    });
    setError(
      validate({
        ...state,
        [e.target.name]: e.target.value,
      })
    );
  };
  //cada vez q ejecutes esta funcion a mi estado state ademas de lo que tiene agregale el target value de lo que este modificando.
  //la idea es q a medida que va a ejecutandose se vaya agregando en mi useState.

  const handleTypes = (e) => {
    setState({
      ...state,
      types: [...state.types, e.target.value], //traeme lo que ya habia y concatenale el nuevo valor
    });
    setError(
      validate({
        ...state,
        types: [...state.types, e.target.value],
      })
    );
  };

  const nombreValido = /^[a-zA-ZñÑ]+$/i;

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).length > 0)
      return alert("Por favor completa la informacion requerida!!!");

    if (
      !state.name.toLowerCase() ||
      state.name.length > 20 ||
      !nombreValido.test(state.name)
    )
      return alert(
        "El nombre es obligatorio, solo puede llevar letras y su largo debe ser menor a 20"
      );
    else if (!state.life || state.life <= 0 || state.life > 200)
      return alert(
        "El campo vida es obligatorio y debe ser mayor a 0 y menor a 200"
      );
    else if (!state.strength || state.strength <= 0 || state.strength > 1000)
      return alert(
        "El campo fuerza es obligatorio y debe ser mayor a 0 y menor a 1000"
      );
    else if (!state.defense || state.defense <= 0 || state.defense > 200)
      return alert(
        "El campo defensa es obligatorio y debe ser mayor a 0 y menor a 200"
      );
    else if (!state.speed || state.speed <= 0 || state.speed > 500)
      return alert(
        "El campo velocidad es obligatorio y debe ser mayor a 0 y menor a 500"
      );
    else if (!state.height || state.height <= 0 || state.height > 100)
      return alert(
        "El campo altura es obligatorio y debe ser mayor a 0 y menor a 100"
      );
    else if (!state.weight || state.weight <= 0 || state.weight > 1000)
      return alert(
        "El campo peso es obligatorio y debe ser mayor a 0 y menor a 1000"
      );
    else if (state.types.length === 0 || state.types.length > 2)
      return alert(
        "El campo tipos es obligatorio y solo pueden seleccionarse máximo 2 tipos"
      );
    dispatch(pokeCreate(state));

    console.log(pokeCreate);
    alert("¡Pokemon agregado exitosamente!");
  }

  return (
    <div className={Style.container}>
      <br />
      <h1 className={Style.title}> Crear tu pokemon!!</h1>

      <Link to={`/home`}>
        <button className={Style.btn}>Volver al Home</button>
      </Link>

      <form onSubmit={(e) => handleSubmit(e)} className={Style.todo}>
        <div className={Style.cuadro}>
          <label className={Style.palabra}>Nombre Pokemon: </label>

          <input
            type="text"
            name="name"
            value={state.name}
            onChange={(e) => handleChange(e)}
            className={Style.contenedor}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <br />

        <div className={Style.cuadro}>
          <label className={Style.palabra}>Vida Pokemon: </label>

          <input
            type="number"
            name="life"
            value={state.life}
            onChange={(e) => handleChange(e)}
            className={Style.contenedor}
          />
          {errors.life && <p>{errors.life}</p>}
        </div>
        <br />

        <div className={Style.cuadro}>
          <label className={Style.palabra}>Fuerza Pokemon: </label>

          <input
            type="number"
            name="strength"
            value={state.strength}
            onChange={(e) => handleChange(e)}
            className={Style.contenedor}
          />
          {errors.strength && <p>{errors.strength}</p>}
        </div>
        <br />

        <div className={Style.cuadro}>
          <label className={Style.palabra}>Defensa Pokemon: </label>

          <input
            type="number"
            name="defense"
            value={state.defense}
            onChange={(e) => handleChange(e)}
            className={Style.contenedor}
          />
          {errors.defense && <p>{errors.defense}</p>}
        </div>

        <br />

        <div className={Style.cuadro}>
          <label className={Style.palabra}>Velocidad Pokemon: </label>
          <input
            type="number"
            name="speed"
            value={state.speed}
            onChange={(e) => handleChange(e)}
            className={Style.contenedor}
          />
          {errors.speed && <p>{errors.speed}</p>}
        </div>

        <br />

        <div className={Style.cuadro}>
          <label className={Style.palabra}>Altura Pokemon: </label>
          <input
            type="number"
            name="height"
            value={state.height}
            onChange={(e) => handleChange(e)}
            className={Style.contenedor}
          />
          {errors.height && <p>{errors.height}</p>}
        </div>

        <br />

        <div className={Style.cuadro}>
          <label className={Style.palabra}>Peso Pokemon: </label>
          <input
            type="number"
            name="weight"
            value={state.weight}
            onChange={(e) => handleChange(e)}
            className={Style.contenedor}
          />
          {errors.weight && <p>{errors.weight}</p>}
        </div>

        <br />
        {
          <div className={Style.cuadro}>
            <label className={Style.palabra}>Imagen Pokemon: </label>
            <input
              type="text"
              name="image"
              value={state.image}
              onChange={(e) => handleChange(e)}
              className={Style.contenedor}
            />
          </div>
        }
        <br />

        <select onChange={(e) => handleTypes(e)} className={Style.tipos}>
          <option className={Style.tipos}>Tipos de pokemon</option>
          {pokemonsTypes.map((e) => (
            <option key={e.name} value={e.name}>
              {e.name}
            </option>
          ))}
        </select>
        {errors.types && <p>{errors.types}</p>}

        <button type="submit" className={Style.otro}>
          Crear Pokemon!!
        </button>
      </form>

      <br />
      <br />
    </div>
  );
};

export default Create;
