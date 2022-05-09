const express = require("express");
const router = express.Router();

const { Pokemon, Types } = require("../db");

router.post("/", async (req, res, next) => {
  const { name, life, strength, defense, speed, height, weight, image, types } =
    req.body;

  try {
    const newPokemon = await Pokemon.create({
      name,
      life,
      strength,
      defense,
      speed,
      height,
      weight,
      image,
    });

    const type = await Types.findAll({
      where: {
        name: types,
      },
    });

    const array = [];
    array.push(newPokemon);
    array.push(types);

    if (types.length > 2) {
      res.json("Solo se aceptan 2 tipos");
    }

    await newPokemon.addType(type);
    res.send(array);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
