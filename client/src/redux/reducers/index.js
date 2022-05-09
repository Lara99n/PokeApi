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
  detalle: [],
  types: [],
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
      let ordenAlf = [...state.allPokemons];

      if (action.payload === "asc") {
        ordenAlf.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (b.name > a.name) return -1;

          return 0;
        });

        return {
          ...state,
          pokemon: ordenAlf,
        };
      }
      if (action.payload === "desc") {
        ordenAlf.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (b.name > a.name) return 1;
          return 0;
        });

        return {
          ...state,
          pokemon: ordenAlf,
        };
      }

    case ACCIONES.ORDEN_FUERZA:
      const infoFuerza = [...state.pokemon];
      const ordenFuerza =
        action.payload === "All"
          ? infoFuerza
          : action.payload === "max"
          ? infoFuerza.sort((a, b) => b.strength - a.strength)
          : infoFuerza.sort((a, b) => a.strength - b.strength);

      return {
        ...state,
        pokemon: ordenFuerza,
      };

    case ACCIONES.POKE_TYPE:
      return {
        ...state,
        types: action.payload,
      };

    case ACCIONES.FILTER_POKE_TYPE:
      const typesInfo = state.allPokemons;
      const infoTypes =
        action.payload === "All"
          ? typesInfo
          : typesInfo.filter((e) => e.types?.includes(action.payload));

      return {
        ...state,
        types: infoTypes,
      };

    case ACCIONES.POKE_DETAIL:
      return {
        ...state,
        detalle: action.payload,
      };

    case ACCIONES.POKE_CREATE:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
