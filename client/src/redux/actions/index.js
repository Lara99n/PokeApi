import axios from "axios";

export const ALL_POKEMONS = "POKEMONS";
export const BUSCAR_NOMBRE = "BUSCAR_NOMBRE";
export const ORDEN_POKETYPE = "ORDEN_POKETYPE";
export const POKETYPE = "POKETYPE";
export const POKEMON_DB_API = " POKEMON_DB_API";
export const ORDEN_NAME = "ORDEN_NAME";
export const ORDEN_FUERZA = "ORDEN_FUERZA";

export const POKE_DETAIL = "POKE_DETAIL";
export const POKE_CREATE = "POKE_CREATE";

//1ER PASO DE UN CICLO DE REDUX
//Las acction son cargas de informacion(payload=carga util) se encargan de enviar informacion de
// mi front o mis components a mi store de redux.
//Son la unica fuente de informacion para la store.
//El comando para enviar una action a la store es store.dispatch().
// Tiene que contener una KEY = TYPE.

export function todosPokemons() {
  return async (dispatch) => {
    try {
      let obtener = await axios(`http://localhost:3001/pokemons`);

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
      let obtener = await axios(`http://localhost:3001/pokemons?name=${name}`);

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
  try {
    return {
      type: ORDEN_NAME,
      payload,
    };
  } catch (error) {
    console.log(error);
  }
}

export function ordenFuerza(payload) {
  try {
    return {
      type: ORDEN_FUERZA,
      payload,
    };
  } catch (error) {
    console.log(error);
  }
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
      let obtener = await axios("http://localhost:3001/pokemons/" + id);

      return dispatch({
        type: POKE_DETAIL,
        payload: obtener.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
export function pokeCreate(payload) {
  return async (dispatch) => {
    try {
      let obtener = await axios.post("http://localhost:3001/pokemons", payload);

      return dispatch({
        type: POKE_CREATE,
        payload: obtener.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
