const { getTypeWeaknesses } = require('poke-types')
const superagent = require('superagent')

const orderBy = require('../../util/orderBy')
const divideBy10 = require('../../util/divideBy10')

const formatName = name => name.charAt(0).toUpperCase() + name.slice(1)

const id = ({ body }) => body.id

const name = ({ body }) => formatName(body.name)

const image = ({ body }) => {
  const id = body.id
  return `${process.env.BASE_URL_IMAGE}/full/${id.toString().padStart(3, '0')}.png`
}

const weaknesses = ({ body }) => {
  const typeNames = body.types
    .sort(orderBy('slot'))
    .map(typePokemon => typePokemon.type.name)

  const weaknessMap = getTypeWeaknesses(...typeNames)

  const weaknesses = Object
    .entries(weaknessMap)
    .filter(([_, weight]) => weight === 2 || weight === 4)
    .map(([name, weight]) => ({ name, weight }))

  return weaknesses
}

const height = ({ body: { height } }) => divideBy10(height)

const weight = ({ body: { weight } }) => divideBy10(weight)

const types = ({ body }) => body.types
  .sort(orderBy('slot'))
  .map(typePokemon => typePokemon.type.name)

const species = ({ body: { species } }) =>
  superagent
    .get(species.url)
    .catch(() => ({ body: '' }))

const abilities = ({ body: { abilities } }) =>
  abilities
    .filter(ability => !ability.is_hidden)
    .map(({ ability }) => ability)

module.exports = {
  id,
  name,
  image,
  types,
  weaknesses,
  height,
  weight,
  species,
  abilities
}
