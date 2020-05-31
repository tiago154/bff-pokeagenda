const superagent = require('superagent')
const orderBy = require('../../util/orderBy')
const POKEMON = 'pokemon/'

const extractId = url => Number(url.split('pokemon/')[1].replace('/', ''))
const formatName = name => name.charAt(0).toUpperCase() + name.slice(1)

const id = ({ url }) => extractId(url)

const name = ({ name }) => formatName(name)

const image = ({ url }) => {
  const id = extractId(url)
  return `${process.env.BASE_URL_IMAGE}/full/${id.toString().padStart(3, '0')}.png`
}

const types = async ({ url }) => {
  const id = extractId(url)
  const { body } = await superagent
    .get(`${process.env.BASE_URL_POKEMON}${POKEMON}${id}`)
    .catch(() => ({ body: '' }))

  return body.types
    .sort(orderBy('slot'))
    .map(t => t.type.name)
}

module.exports = { id, name, image, types }
