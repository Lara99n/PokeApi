const axios = require("axios");
const { Pokemon, Types } = require("../db");

const express = require("express");
const router = express.Router();

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=44"
  );

  const dataUrl = await apiUrl.data.results.map((el) => el.url);

  const result = await Promise.all(dataUrl.map(axios.get));

  const resultFinal = result.map((el) => {
    return {
      id: el.data.id,
      name: el.data.name,
      life: el.data.stats[0].base_stat,
      strength: el.data.stats[1].base_stat,
      defense: el.data.stats[2].base_stat,
      speed: el.data.stats[5].base_stat,
      height: el.data.height,
      weight: el.data.weight,
      image: el.data.sprites.other.dream_world.front_default,
      types: el.data.types.map((el) => {
        return {
          name: el.type.name,
        };
      }),
    };
  });

  return resultFinal;
};

const getDbInfo = async () => {
  return await Pokemon.findAll({
    include: {
      model: Types,
      attributes: ["name"],
    },
  });
};

const getAllPokemons = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = await apiInfo.concat(dbInfo);
  return infoTotal;
};

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  const pokemonInfoTotal = await getAllPokemons();
  if (name) {
    let pokemonName = await pokemonInfoTotal.filter(
      (el) => el.name.toLowerCase() === name.toLocaleLowerCase()
    );
    pokemonName.length
      ? res.status(200).send(pokemonName)
      : res.status(404).send("No se encontró el Pokemon");
  } else {
    res.status(200).send(pokemonInfoTotal);
  }
});
module.exports = router;
