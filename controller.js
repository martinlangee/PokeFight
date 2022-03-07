const fs = require('fs')

const getPokemons = () => {
    return JSON.parse(fs.readFileSync('./pokedex.json', 'utf-8'))
};

const getPokemonById = (id) => {
    console.log('getPokemonById(', id, ')');
    id = Number(id);
    return getPokemons().find(el => el.id === id);
}

const getPokemonInfo = (id, info) => {
    console.log('getPokemonInfo(', id, info, ')');
    return getPokemonById(id)[info];
}

module.exports = { getPokemons, getPokemonById, getPokemonInfo };