const { mergeSchemas } = require("graphql-tools")

const BoardSchema = require("./board/boardSchema")
const ListSchema = require("./list/listSchema")
const CardSchema = require("./card/cardSchema")

const LinkTypeDefs = require("./linkTypeDefs")
const LinkResolvers = require("./linkResolvers")

// Put together a schema
module.exports = mergeSchemas({
  schemas: [BoardSchema, ListSchema, CardSchema, LinkTypeDefs],
  resolvers: LinkResolvers,
})
