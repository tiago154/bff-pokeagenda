const superagent = require('superagent')
const POKEMON = 'pokemon/'

const pokemon = (_, { id }) => superagent
  .get(`${process.env.BASE_URL_POKEMON}${POKEMON}${id}`)
  .catch(() => ({ body: '' }))

module.exports = {
  pokemon
}
