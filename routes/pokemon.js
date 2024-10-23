const express = require("express");
const pokemonController = require("../controllers/pokemon");

const router = express.Router();

router.get("/", pokemonController.saludosEntrenador);
router.post("/create", pokemonController.create);

module.exports = router;
