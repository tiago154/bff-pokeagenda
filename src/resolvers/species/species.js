const category = ({ body: { genera } }) => {
  const pokemonCategory = genera.find(generaItem => generaItem.language.name === 'en')
  const categoryResult = pokemonCategory.genus.replace(' Pokémon', '')
  return categoryResult
}

const genreRate = ({ body: { gender_rate: genderRate } }) => {
  const genrePossibilities = {
    '-1': 'UNKNOWN',
    0: 'ONLY_MALE',
    8: 'ONLY_FEMALE'
  }
  return genrePossibilities[genderRate] || 'BOTH'
}

module.exports = { category, genreRate }
