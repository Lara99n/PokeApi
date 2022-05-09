import { useState } from "react";
import { useDispatch } from "react-redux";
import { buscarNombrePokemon } from "../../redux/actions";

import Style from "./Searchbar.module.css";

//useDispatch --> hace referencia a dispatch usado para disparar las acciones de la store
//useSelector --> ayuda a extrar info del state de la store de redux. es llamado cada q el hook sea actualizado

function SearchBar() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(buscarNombrePokemon(name));
      console.log("enviado");
      setName("");
    }
  };

  const handlChange = (e) => {
    e.preventDefault(e);
    setName(e.target.value.toLowerCase());
  };

  return (
    <div>
      <br />

      <input
        type="text"
        placeholder="Buscar Pokemon :)"
        value={name}
        className={Style.contenedor}
        onChange={(e) => handlChange(e)}
      />
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        className={Style.btn}
      >
        Enviar
      </button>
    </div>
  );
}
export default SearchBar;

/* 
Ruta principal: debe contener
[ ] Input de búsqueda para encontrar pokemons por nombre (La búsqueda será exacta,
 es decir solo encontrará al pokemon si se coloca el nombre completo)
*/

//necesito un manejar de estados, para que mi onchange y onsubmit funcionen.
//un useDispatch
