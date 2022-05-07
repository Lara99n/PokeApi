const fetch = require("node-fetch");
const { Types } = require("../db");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const typeInfo = await fetch("https://pokeapi.co/api/v2/type")
      .then((p) => p.json())
      .then((o) => o.results)
      .then((k) => k.map((e) => ({ name: e.name })))
      .catch((err) => err);

    typeInfo.map(async (m) => {
      const [instance, created] = await Types.findOrCreate({
        //instance me devuelve el modelo, y el creted me devuelve un booleano.
        where: {
          name: m.name,
        },
        defaults: {
          name: m.name,
        },
      });
    });
    const mapeo = await Types.findAll({
      attributes: ["name"],
    });
    res.json(mapeo);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
