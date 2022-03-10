const express = require("express");
var cors = require('cors');
const { StatusCodes } = require("http-status-codes");
const { getPokemons, getPokemonById, getPokemonInfo, getPokemonImageUrl } = require("./controller");

const pokemon = express.Router({ mergeParams: true });

pokemon.use(cors());
pokemon.use(express.json()); // => req.body 

// handling the "/pokemon" routes
pokemon
    .get('', (req, res) => {
        console.log('GET /pokemon');
        res.status(StatusCodes.OK).json(getPokemons());
    })
    .get('/:id', (req, res, next) => {
        const { id } = req.params;
        console.log(`GET /pokemon/${id}`);
        const pokemon = getPokemonById(id);
        if (pokemon) res.status(StatusCodes.OK).json(pokemon)
        else res.status(StatusCodes.NOT_FOUND).send(`Requested resource with id = ${id} not found`);
    })
    .use((err, req, res) => {
        res.status(StatusCodes.NOT_FOUND).send('Requested resource not found');
    });


module.exports = pokemon;