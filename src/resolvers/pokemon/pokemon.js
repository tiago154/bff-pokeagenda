const orderBy = require('../../util/orderBy')

const formatName = name => name.charAt(0).toUpperCase() + name.slice(1)

const id = ({ body }) => body.id

const name = ({ body }) => formatName(body.name)

const image = ({ body }) => {
  const id = body.id
  return `${process.env.BASE_URL_IMAGE}/full/${id.toString().padStart(3, '0')}.png`
}

const types = ({ body }) => body.types
  .sort(orderBy('slot'))
  .map(t => t.type.name)

module.exports = { id, name, image, types }
