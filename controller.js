const fs = require('fs');
const axios = require('axios');
const res = require('express/lib/response');

const getPokemons = () => {
    return JSON.parse(fs.readFileSync('./pokedex.json', 'utf-8'))
};

const getPokemonById = (id) => {
    id = Number(id);
    let pokemon = getPokemons().find(el => el.id === id);
    pokemon['imageUrl'] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    return pokemon;
}

module.exports = { getPokemons, getPokemonById };