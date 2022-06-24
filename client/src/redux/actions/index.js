import axios from "axios";

export const ALL_POKEMONS = "POKEMONS";
export const BUSCAR_NOMBRE = "BUSCAR_NOMBRE";
export const POKEMON_DB_API = " POKEMON_DB_API";
export const ORDEN_NAME = "ORDEN_NAME";
export const ORDEN_FUERZA = "ORDEN_FUERZA";

export const POKE_TYPE = "POKE_TYPE";
export const FILTER_POKE_TYPE = " FILTER_POKE_TYPE";

export const POKE_DETAIL = "POKE_DETAIL";
export const POKE_CREATE = "POKE_CREATE";

export const DELETE_POKE = "DELETE_POKE";

export function todosPokemons() {
  return async (dispatch) => {
    try {
      let obtener = await axios(`https://appokemons.herokuapp.com/pokemons`);

      return dispatch({
        type: ALL_POKEMONS,
        payload: obtener.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function buscarNombrePokemon(name) {
  return async (dispatch) => {
    try {
      let obtener = await axios(
        `https://appokemons.herokuapp.com/pokemons?name=${name}`
      );

      return dispatch({
        type: BUSCAR_NOMBRE,
        payload: obtener.data,
      });
    } catch (err) {
      alert("No encontramos un pokemon con ese nombre");
      console.log(err);
    }
  };
}

export function ordenName(payload) {
  return {
    type: ORDEN_NAME,
    payload,
  };
}

export function ordenFuerza(payload) {
  return {
    type: ORDEN_FUERZA,
    payload,
  };
}

export function filterPokeTypes(payload) {
  return {
    type: FILTER_POKE_TYPE,
    payload,
  };
}
export function pokemonsDbOrPokeapi(payload) {
  return {
    type: POKEMON_DB_API,
    payload,
  };
}

export function pokeDetail(id) {
  return async (dispatch) => {
    try {
      let obtener = await axios(
        "https://appokemons.herokuapp.com/pokemons/" + id
      );

      return dispatch({
        type: POKE_DETAIL,
        payload: obtener.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
export function pokeTypes() {
  return async (dispatch) => {
    try {
      let obtener = await axios(`https://appokemons.herokuapp.com/types`);

      return dispatch({
        type: POKE_TYPE,
        payload: obtener.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function pokeCreate(payload) {
  return async (dispatch) => {
    try {
      let obtener = await axios.post(
        "https://appokemons.herokuapp.com/pokemons",
        payload
      );

      return dispatch({
        type: POKE_CREATE,
        payload: obtener.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function deletePoke() {
  return {
    type: DELETE_POKE,
  };
}
