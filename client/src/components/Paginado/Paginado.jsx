//[ ] Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina.

import Style from "./Paginado.module.css";

const Paginado = ({ pokemonsPagina, allPokemon, paginado }) => {
  const numeroPagina = []; //arreglo de numero que va a tener q ver con el resultado de : Math.ceil(pokemonsPagina / allPokemon)

  //math.ceil redondea todos mis personajes por la cantidad de personajes que tengo por pagina
  for (let i = 0; i < Math.ceil(allPokemon / pokemonsPagina); i++) {
    numeroPagina.push(i + 1);
  }

  //este ocmponente va a renderizar mis numeros en si.
  return (
    <div className={Style.pagination}>
      {numeroPagina && //agarra cada uno y lo renderiza por separado.
        numeroPagina.map(
          (n) => (
            <span key={n}>
              <a className={Style.active} onClick={() => paginado(n)}>
                {n}
              </a>
            </span>
          )

          //cuando haga click le paso mi paginado, con cada numero
        )}
    </div>
  );
};

export default Paginado;
