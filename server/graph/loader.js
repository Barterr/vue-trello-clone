const board = require('./board/boardLoader')

module.exports = () => {
	return {
		board: board(),
	}
}