import { useState } from "react";
import { useDispatch } from "react-redux";
import { buscarNombrePokemon } from "../../redux/actions";

import Style from "./Searchbar.module.css";

//useDispatch --> hace referencia a dispatch usado para disparar las acciones de la store
//useSelector --> ayuda a extrar info del state de la store de redux. es llamado cada q el hook sea actualizado

function SearchBar() {
  const [enviar, setEnviar] = useState(" ");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(buscarNombrePokemon(enviar));
    console.log("enviado");
  };

  const handlChange = (e) => {
    e.preventDefault(e);
    setEnviar(e.target.value);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Buscar Pokemon :)"
          onChange={(e) => handlChange(e)}
        />
        <button className={Style.btn}>Enviar</button>
      </form>
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
