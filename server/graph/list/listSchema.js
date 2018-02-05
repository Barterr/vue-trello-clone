const fs = require("fs");
const path = require("path");
const {
  makeExecutableSchema,
	addMockFunctionsToSchema,
} = require("graphql-tools");

const typeDefs = fs.readFileSync(
	path.join(__dirname, "./list.graphql"),
	"utf8"
);

const schema = makeExecutableSchema({
	typeDefs,
});

addMockFunctionsToSchema({ schema });

module.exports = schema;
