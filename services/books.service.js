const DbService = require('moleculer-db')
const MongoDBAdapter = require('moleculer-db-adapter-mongo')

module.exports = {
  name: 'BooksDomain',
  mixins: [DbService],
  adapter: new MongoDBAdapter('mongodb://localhost/ouistity', { useUnifiedTopology: true }),
  collection: 'books'
}
