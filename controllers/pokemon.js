const Pokemon = require("../models/pokemon");

exports.saludosEntrenador = async (req, res) => {
  try {
    res.send("Hola entrenador desde el controlador");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const pokemon = new Pokemon(req.body);
    await pokemon.save();
    res.status(201).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
