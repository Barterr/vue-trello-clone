const mongoose = require('mongoose')
const Board = mongoose.model('Board')
mongoose.set('debug', true)

module.exports = {
	Board: {},
	Query: {
		boardById: async (root, { id }, { loader }) => {
			return loader.board.load(id)
		},
		boards: async (root, _, { loader }) => {
			const boards = await Board.find()
			boards.forEach(board => {
				loader.board.prime(board.id, board)
			})
			return boards
		},
	},
}

