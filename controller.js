const fs = require('fs');
const axios = require('axios');
const res = require('express/lib/response');

const getPokemons = () => {
    return JSON.parse(fs.readFileSync('./pokedex.json', 'utf-8'))
};

const getPokemonById = (id) => {
    id = Number(id);
    return getPokemons().find(el => el.id === id);
}

const getPokemonInfo = (id, info) => {
    return getPokemonById(id)[info];
}

const getPokemonImageUrl = async(id) => {
    var url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
        const resp = await axios.get(url);
        return resp.data.sprites.other.dream_world.front_default;
    } catch (error) {
        console.log(error);
    }
}

//const img = getPokemonImageUrl(123);

module.exports = { getPokemons, getPokemonById, getPokemonInfo, getPokemonImageUrl };