module.exports = mergeInfo => ({
  Board: {
    lists: {
      fragment: `fragment BoardFragment on Board { id }`,
      resolve(parent, args, context, info) {
        const boardId = parent.id
        return mergeInfo.delegate(
          "query",
          "listsByBoardId",
          {
            boardId,
          },
          context,
          info
        )
      },
    },
  },
  List: {
    cards: {
      fragment: `fragment ListFragment on List { id }`,
      resolve(parent, args, context, info) {
        const listId = parent.id
        return mergeInfo.delegate(
          "query",
          "cardsByListId",
          {
            listId,
          },
          context,
          info
        )
      },
    },
  },
})
