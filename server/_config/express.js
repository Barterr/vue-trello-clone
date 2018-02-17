const express = require('express')
const glob = require('glob')
const logger = require('morgan')
const graphQLSchema = require('../graph/schema')
const loader = require('../graph/loader')

const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')

module.exports = function(app, config) {
  const env = process.env.NODE_ENV || 'development'

  app.locals.ENV = env
  app.locals.ENV_DEVELOPMENT = env === 'development'

  app.use(logger('dev'))
  app.use(
    '/api/graphql',
    bodyParser.json(),
    graphqlExpress(() => {
      return {
        schema: graphQLSchema,
        context: { loader: loader() },
      }
    }),
  )
  // GraphiQL, a visual editor for queries
  app.use('/api/graphiql', graphiqlExpress({ endpointURL: '/api/graphql' }))

  const apis = glob.sync(config.root + '/**/*Api.js')
  apis.forEach(function(api) {
    require(api)(app)
  })

  app.use('/assets', express.static(config.root + '/public/static/assets'))
  app.use('/fonts', express.static(config.root + '/public/static/fonts'))
  app.use('/scripts', express.static(config.root + '/public/static/scripts'))
  app.use('/maps', express.static(config.root + '/public/static/maps'))
  app.use('/styles', express.static(config.root + '/public/static/styles'))
  app.use(
    '/favicon',
    express.static(config.root + '/public/static/favicon.ico'),
  )

  // app.all("/*", function (req, res) {
  //   res
  //     .status(200)
  //     .set({
  //       "content-type": "text/html; charset=utf-8",
  //       "contenqt-type": "text/html; charset=utf-8"
  //     })
  //     .sendFile(config.root + "/public/static/index.html");
  // });

  app.use(express.static(config.root + '/public/static'))
}
