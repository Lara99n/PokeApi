const express = require("express");
const getPokemon = require("../controllers/getPokemon");
const getPokeId = require("../controllers/getPokeId");
const createPokemon = require("../controllers/createPokemon");
const getTypes = require("../controllers/getTypes");
const router = express.Router();

router.use("/pokemons", getPokemon);
router.use("/pokemons", getPokeId);
router.use("/pokemons", createPokemon);
router.use("/types", getTypes);

module.exports = router;
