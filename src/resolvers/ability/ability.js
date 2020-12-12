const superagent = require('superagent')

const name = ({ name }) => name
  .split('-')
  .map(world => world.charAt(0).toUpperCase() + world.slice(1))
  .join(' ')

const description = async ({ url }) => {
  const { body } = await superagent.get(url).catch(() => ({ body: '' }))
  const abilityDetail = body.effect_entries.find(entries => entries.language.name === 'en')
  return abilityDetail.short_effect
}

module.exports = { name, description }
