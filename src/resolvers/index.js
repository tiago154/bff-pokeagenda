const GMR = require('graphql-merge-resolvers')
const pokemons = require('./pokemons')
const pokemon = require('./pokemon')
const weakness = require('./weakness')
const species = require('./species')
const ability = require('./ability')

const mainResolver = GMR.merge([
  pokemons,
  pokemon,
  weakness,
  species,
  ability
])

module.exports = mainResolver
