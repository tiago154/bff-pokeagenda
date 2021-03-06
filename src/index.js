require('dotenv').config()

const { ApolloServer } = require('apollo-server')
const { loadFiles } = require('graphql-import-files')
const resolvers = require('./resolvers')
const logging = require('./logging')

const server = new ApolloServer({
  typeDefs: loadFiles('**/schemas/**/*.graphql'),
  resolvers,
  plugins: [logging]
})

const port = process.env.PORT || 4000

server.listen(port).then(({ url }) => {
  console.log(`Running at ${url}`)
})
