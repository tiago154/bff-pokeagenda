const GMR = require('graphql-merge-resolvers')
const pokemons = require('./pokemons')
const pokemon = require('./pokemon')
const weakness = require('./weakness')

const mainResolver = GMR.merge([pokemons, pokemon, weakness])

module.exports = mainResolver
