const express = require("express");
const { StatusCodes } = require("http-status-codes");
const { getPokemons, getPokemonById, getPokemonInfo } = require("./controller");

const pokemon = express.Router({ mergeParams: true });

pokemon.use(express.json()); // => req.body

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
    .get('/:id/:info', (req, res) => {
        const { id, info } = req.params;
        console.log(`GET /pokemon/${id}/${info}`);
        const infoData = getPokemonInfo(id, info);
        if (info) res.status(StatusCodes.OK).json(infoData)
        else res.status(StatusCodes.NOT_FOUND).send(`Requested resource with id = ${id} and info = ${infoData} not found`);
    })
    .use((err, req, res) => {
        res.status(StatusCodes.NOT_FOUND).send('Requested resource not found');
    });


module.exports = pokemon;