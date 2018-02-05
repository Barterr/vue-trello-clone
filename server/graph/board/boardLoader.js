const DataLoader = require('dataloader')
const mongoose = require('mongoose')
const Board = mongoose.model('Board')

module.exports = () => {
	return new DataLoader(ids => {
		if (!ids.length) return Board.find()
		return Board.find({ _id: { $in: ids } })
	})
}

