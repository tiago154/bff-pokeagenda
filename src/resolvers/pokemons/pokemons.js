const superagent = require('superagent')

const pokemons = ({ results }) =>
  results.map(({ url }) =>
    superagent
      .get(url)
      .catch(() => ({ body: '' }))
  )

module.exports = {
  pokemons
}
