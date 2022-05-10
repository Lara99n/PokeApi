import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  todosPokemons,
  pokemonsDbOrPokeapi,
  ordenName,
  ordenFuerza,
  filterPokeTypes,
  pokeTypes,
} from "../../redux/actions";

import SearchBar from "../SearchBar/SearchBar";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";

import Style from "./Home.module.css";

function Home() {
  const dispatch = useDispatch();

  const allPokemon = useSelector((state) => state.pokemon);

  const allTypes = useSelector((state) => state.types);

  //---------------------------paginado------------------------------
  const [paginaActual, setPaginaActual] = useState(1); //mi pagina actual
  const [pokemonsPagina] = useState(12); //cuantos quiero por pagina
  const indiceUltimoPokemons = paginaActual * pokemonsPagina; //seteo el indice del ultimo pokemon, y le digo que sobre la pagina actual multiplique la cantidad de pokemons por pagina
  const indicePrimerPokemon = indiceUltimoPokemons - pokemonsPagina; // indicePrimerPokemon: seteo el indice del primer pokemon porque necesito tener en cada pagina el indice de mi primer pokemon, no va a ser siempre igual, va a ir sumandose de 1 en 1.  indiceUltimoPokemons - pokemonsPagina: El indice del ultimo personaje menos la cantidad de personajes que tengo por pagina me da el indice del primer pesonaje.
  const pokemonsActuales = allPokemon.slice(
    indicePrimerPokemon,
    indiceUltimoPokemons
  ); //va a ir guardando cuales son los personajes que hay que renderizar dependiendo la pagina. Entonces le digo que a todos los personajes los corte con el indice del rpimer personaje de esa pagina y el ultimo.

  //esto va a setear la paigna en el numero que yo vaya apretando.
  const paginado = (numPagina) => {
    setPaginaActual(numPagina);
  };
  //---------------------------paginado------------------------------

  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    dispatch(todosPokemons());
    dispatch(pokeTypes());
  }, [dispatch]);

  const pokemonsApiDb = (e) => {
    e.preventDefault();
    setPaginaActual(1);
    dispatch(pokemonsDbOrPokeapi(e.target.value));
    setPokemon(e.target.value);
  };

  const handleName = (e) => {
    e.preventDefault();
    dispatch(ordenName(e.target.value));
    setPaginaActual(1);
    setPokemon(e.target.value);
  };

  const handleFuerza = (e) => {
    e.preventDefault();
    dispatch(ordenFuerza(e.target.value));

    setPokemon(e.target.value);
  };

  const handleTypes = (e) => {
    e.preventDefault();
    dispatch(filterPokeTypes(e.target.value));
    setPaginaActual(1);
    setPokemon(e.target.value);
  };

  return (
    <div>
      {allPokemon.length > 0 ? <SearchBar /> : <div></div>}

      {allPokemon.length > 0 ? (
        <div className={Style.separacion}>
          <select onChange={(e) => pokemonsApiDb(e)} className={Style.btn}>
            <option> Pokemones:</option>
            <option value="All"> Todos </option>
            <option value="api"> Originales </option>
            <option value="created"> Creados por mi </option>
          </select>
          <select onChange={(e) => handleName(e)} className={Style.btn}>
            <option value="All"> Ordenar por nombre</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>

          <select onChange={(e) => handleFuerza(e)} className={Style.btn}>
            <option value="All"> Ordenar por Fuerza</option>
            <option value="max"> + Fuerza</option>
            <option value="min"> - Fuerza</option>
          </select>

          <select onChange={(e) => handleTypes(e)} className={Style.btn}>
            <option>Tipo de Pokemon</option>
            <option value="All">Todos</option>

            {allTypes?.map((e) => (
              <option key={e.name} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
          <Link to={`/home/create`}>
            <button className={Style.btn}>Crear tu Pokemon</button>
          </Link>
        </div>
      ) : (
        <div></div>
      )}

      <div>
        {allPokemon.length ? (
          <div className={Style.cardContainer}>
            {pokemonsActuales.map((e) => {
              return (
                <div key={e.id}>
                  <Link to={`/home/${e.id}`}>
                    <Card
                      key={e.id}
                      name={e.name}
                      image={e.image}
                      types={e.types}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <div className={Style.gif}>
              <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a50d005c-a1fa-4667-acc0-f9e5a6cc3ccf/d1ylrxl-46951a6b-dec6-4e8e-bda1-0e88842f4dcf.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1MGQwMDVjLWExZmEtNDY2Ny1hY2MwLWY5ZTVhNmNjM2NjZlwvZDF5bHJ4bC00Njk1MWE2Yi1kZWM2LTRlOGUtYmRhMS0wZTg4ODQyZjRkY2YuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iDYW-R35Cdft13_uDreIjtgfrRw1EveW6_S7mYpTGnc" />
              <div className={Style.loading}>
                <h1>Loading Pokemons...</h1>
              </div>
            </div>
          </div>
        )}
      </div>

      {
        <Paginado
          pokemonsPagina={pokemonsPagina}
          allPokemon={allPokemon.length}
          paginado={paginado}
        />
      }
    </div>
  );
}
export default Home;
