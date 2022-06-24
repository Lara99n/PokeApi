import { useState } from "react";
import { useDispatch } from "react-redux";
import { buscarNombrePokemon } from "../../redux/actions";

import Style from "./Searchbar.module.css";

function SearchBar({ setPaginaActual }) {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(buscarNombrePokemon(name));
      setPaginaActual(1);
      console.log("enviado");
      setName("");
    }
  };

  const handlChange = (e) => {
    e.preventDefault();
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
        Buscar
      </button>
    </div>
  );
}
export default SearchBar;
