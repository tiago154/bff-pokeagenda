const GMR = require('graphql-merge-resolvers')
const pokemons = require('./pokemons')
const pokemon = require('./pokemon')

const mainResolver = GMR.merge([pokemons, pokemon])

module.exports = mainResolver
