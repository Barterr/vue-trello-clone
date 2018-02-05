const fs = require("fs")
const path = require("path")
const {
  makeExecutableSchema,
	// addMockFunctionsToSchema,
} = require("graphql-tools")

const resolvers = require("./boardResolvers")

// The GraphQL schema in string form
const typeDefs = fs.readFileSync(
	path.join(__dirname, "./board.graphql"),
	"utf8"
)

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
})

// addMockFunctionsToSchema({ schema })

module.exports = schema
