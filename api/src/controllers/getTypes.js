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
        where: {
          name: m.name,
        },
        defaults: {
          name: m.name,
        },
      });
    });
    const type = await Types.findAll({
      attributes: ["name"],
    });
    res.json(type);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
