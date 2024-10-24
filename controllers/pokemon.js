const Pokemon = require("../models/pokemon");

exports.helloTrainer = async (req, res) => {
  try {
    res.send("Hola entrenador desde el controlador");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPokemon = async (req, res) => {
  try {
    const pokemon = new Pokemon(req.body);
    await pokemon.save();
    res.status(201).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPokemons = async (req, res) => {
  try {
    const pokemones = await Pokemon.find();
    res.status(200).json(pokemones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPokemonByIdPokemon = async (req, res) => {
  try {
    const pokemon_id = req.params.pokemon_id;
    const pokemon = await Pokemon.findOne({ pokemon_id });
    if (!pokemon) {
      return res.status(404).json({ message: "Pokemon no encontrado" });
    }
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.viewPokemonById = async (req, res) => {
  try {
    const pokemon_id = req.params.pokemon_id;
    const pokemonNew = {
      pokemon_id: pokemon_id,
      view: true,
      catch: false,
      in_team: false,
    };
    const filter = { pokemon_id: pokemon_id };
    const pokemon = await Pokemon.findOneAndReplace(filter, pokemonNew, {
      new: true,
    });
    if (!pokemon) {
      return res.status(404).json({ message: "Pokemon no encontrado" });
    }
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
