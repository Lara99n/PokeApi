const axios = require("axios");
const { Pokemon, Types } = require("../db");
const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id.includes("-")) {
      const dataInfo = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const e = dataInfo.data;
      let pokemon = {
        id: e.id,
        name: e.name,
        life: e.stats[0].base_stat,
        strength: e.stats[1].base_stat,
        defense: e.stats[2].base_stat,
        speed: e.stats[5].base_stat,
        height: e.height,
        weight: e.weight,
        image: e.sprites.other.dream_world.front_default,
        types: e.types.map((e) => e.type.name),
      };

      return res.status(200).send(pokemon);
    }
    const db = await Pokemon.findByPk(id, {
      include: {
        model: Types,
        attributes: ["name"],
      },
    });
    res.status(200).send(db);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
