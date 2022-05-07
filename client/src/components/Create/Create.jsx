/* import React, { useEffect, useState } from "react";
import { pokeCreate, pokemonTypes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Style from "./Create.module.css";

const Create = () => {
  const dispatch = useDispatch();
  const pokeType = useSelector((state) => state.create);

  const [state, setState] = useState({
    name: "",
    life: "",
    strength: "",
    defense: "",
    speed: "",
    height: "",
    weigth: "",
    image: "",
    types: [],
  });

  useEffect(() => {
    dispatch(pokemonTypes());
  }, []);

  return (
    <div>
      <h1>Crear tu pokemon!!!!</h1>
      <form>
        <div>
          <label>Nombre del Pokemon:</label>
          <input type="text" name="name" value={state.name} />
        </div>

        <div>
          <label>Vida del Pokemon: </label>
          <input type="number" life="life" value={state.life} />
        </div>

        <div>
          <label>Fuerza del Pokemon:</label>
          <input type="number" strength="strength" value={state.strength} />
        </div>

        <div>
          <label>Defensa del Pokemon:</label>
          <input type="number" defense="defense" value={state.defense} />
        </div>

        <div>
          <label>Velocidad del Pokemon:</label>
          <input type="number" speed="speed" value={state.speed} />
        </div>

        <div>
          <label>Altura del Pokemon:</label>
          <input type="number" height="height" value={state.height} />
        </div>

        <div>
          <label>Peso del Pokemon:</label>
          <input type="number" weigth="weigth" value={state.weigth} />
        </div>
      </form>
      <select>
        {pokeType.map((e) => (
          <option value={e.name}>{e.name}</option>
        ))}
      </select>

      <br />
      <br />
      <button> Crear Pokemon</button>

      <Link to={`/home`}>
        <button>Volver al Home</button>
      </Link>
    </div>
  );
};

export default Create;
 */
/* Ruta de creación: debe contener
[ ] Un formulario controlado con JavaScript con los campos mencionados en el detalle del Pokemon
[ ] Posibilidad de seleccionar/agregar más de un tipo de Pokemon
[ ] Botón/Opción para crear un nuevo Pokemon */
