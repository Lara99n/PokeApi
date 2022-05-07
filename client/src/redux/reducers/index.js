import * as ACCIONES from "../actions";

//2DO PASO DE UN CICLO DE REDUX
// SON FUNCIONES PURAS. NO ACEPTAN LLAMADAS A LA API, NI CONSOLE.LOG
//Son funciones comunes que toman como parametro el state anterior y la action y regresan un nuevo state.
//state = initialState --> estado anterior y estado inicial, action --> la accion que acaba de ser disparada.
// switch --> es la condicion el switch --> (action.type) --> las acciones siempre tienen un type.
//devolvemos en anterior ...state en caso  de undefined.

const initialState = {
  pokemon: [],
  allPokemons: [],
  types: [],
  detalle: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCIONES.ALL_POKEMONS:
      return {
        ...state,
        pokemon: action.payload,
        allPokemons: action.payload,
      };

    case ACCIONES.BUSCAR_NOMBRE:
      return {
        ...state,
        pokemon: action.payload,
      };

    case ACCIONES.POKETYPE:
      return {
        ...state,
        types: action.payload,
      };

    case ACCIONES.ORDEN_POKETYPE:
      const infoTypes = state.types;
      const typeFilter =
        action.payload === "All"
          ? infoTypes
          : infoTypes.filter((e) =>
              e.types.find((e) => e.name.includes(action.payload))
            );

      return {
        ...state,
        pokemon: typeFilter,
      };

    case ACCIONES.POKEMON_DB_API:
      const info = state.allPokemons;

      const infoCreated =
        action.payload === "created"
          ? info.filter((e) => e.baseDatos)
          : info.filter((e) => !e.baseDatos);

      return {
        ...state,
        pokemon: action.payload === "All" ? info : infoCreated,
      };

    case ACCIONES.ORDEN_NAME:
      const ordenAlf =
        action.payload === "All"
          ? state.pokemon
          : action.payload === "asc"
          ? state.pokemon.sort((a, b) => a.name.localeCompare(b.name))
          : state.pokemon.sort((a, b) => b.name.localeCompare(a.name));
      //retorna un número indicando si una cadena de
      //carateres de referencia va antes, después o si es la misma que la cadena dada en orden alfabético.
      return {
        ...state,
        pokemon: [...ordenAlf],
      };

    case ACCIONES.ORDEN_FUERZA:
      const ordenFuerza =
        action.payload === "All"
          ? state.pokemon
          : action.payload === "max"
          ? state.pokemon.sort((a, b) => a.strength - b.strength)
          : state.pokemon.sort((a, b) => b.strength - a.strength);

      return {
        ...state,
        pokemon: [...ordenFuerza],
      };
    case ACCIONES.POKE_DETAIL:
      return {
        ...state,
        detalle: action.payload,
      };

    case ACCIONES.POKE_CREATE:
      return {
        ...state,
        create: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
