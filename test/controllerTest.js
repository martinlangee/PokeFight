const controller = require('../controller');
const assert = require('assert');

describe('Controller', async() => {
    describe('getPokemons', () => {
        it('should return 809 array items from the pokedex.json file', () => {
            assert.equal(controller.getPokemons().length, 809);
        });
    });
    describe('getPokemonImage', () => {
        it('should return the SVG image URL for ..../123.svg', () => {
            controller.getPokemonImageUrl(123).then(imgUrl => {
                assert.equal(imgUrl, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/123.svg');
            });
        });
    });
    describe('getPokemonById', () => {
        it('should return correct english names', () => {
            assert.equal(controller.getPokemonById(24).name.english, 'Arbok');
            assert.equal(controller.getPokemonById(95).name.english, 'Onix');
            assert.equal(controller.getPokemonById(124).name.english, 'Jynx');
            assert.equal(controller.getPokemonById(234).name.english, 'Stantler');
            assert.equal(controller.getPokemonById(794).name.english, 'Buzzwole');
        });
    });
    describe('getPokemonByInfo', () => {
        it('should return correct data fields', () => {
            assert.equal(controller.getPokemonById(24).name.english, 'Arbok');
            assert.equal(controller.getPokemonById(95).type[0], 'Rock');
            assert.equal(controller.getPokemonById(124).base.Attack, '50');
            assert.equal(controller.getPokemonById(234).name.french, 'Cerfrousse');
            assert.equal(controller.getPokemonById(454).type[1], 'Fighting');
            assert.equal(controller.getPokemonById(794).base["Sp. Defense"], 53);
        });
    });
});