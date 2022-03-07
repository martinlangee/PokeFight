const controller = require('../controller');
const assert = require('assert');

describe('Controller', () => {
    describe('getPokemons', () => {
        it('should return 809 array items from the pokedex.json file', () => {
            assert.equal(controller.getPokemons().length, 809);
        });
    });
    describe('getPokemonById', () => {
        it('should return ', () => {
            assert.equal(controller.getPokemonById(24).name.english, 'Arbok');
            assert.equal(controller.getPokemonById(95).name.english, 'Onix');
            assert.equal(controller.getPokemonById(124).name.english, 'Jynx');
            assert.equal(controller.getPokemonById(234).name.english, 'Stantler');
            assert.equal(controller.getPokemonById(794).name.english, 'Buzzwole');
        });
    });
    describe('getPokemonByInfo', () => {
        it('should return ', () => {
            assert.equal(controller.getPokemonById(24).name.english, 'Arbok');
            assert.equal(controller.getPokemonById(95).type[0], 'Rock');
            assert.equal(controller.getPokemonById(124).base.Attack, '50');
            assert.equal(controller.getPokemonById(234).name.french, 'Cerfrousse');
            assert.equal(controller.getPokemonById(454).type[1], 'Fighting');
            assert.equal(controller.getPokemonById(794).base["Sp. Defense"], 53);
        });
    });
});