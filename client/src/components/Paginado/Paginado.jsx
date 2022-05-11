import Style from "./Paginado.module.css";

const Paginado = ({ pokemonsPagina, allPokemon, paginado }) => {
  const numeroPagina = [];

  for (let i = 0; i < Math.ceil(allPokemon / pokemonsPagina); i++) {
    numeroPagina.push(i + 1);
  }

  return (
    <div className={Style.pagination}>
      {numeroPagina &&
        numeroPagina.map((n) => (
          <span key={n}>
            <a className={Style.active} onClick={() => paginado(n)}>
              {n}
            </a>
          </span>
        ))}
    </div>
  );
};

export default Paginado;
