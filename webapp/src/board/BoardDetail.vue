<template>
  <draggable :list="taskList" class="board">
    <!-- Board Detail {{boardId}} -->
    <task-list v-for="taskList in taskListsList" :key="taskList.id"></task-list>
  </draggable>
</template>

<script>
import TaskList from './task/TaskList'
import draggable from 'vuedraggable'

export default {
  components: { TaskList, draggable },
  data() {
    return {
      taskListsList: [
        { id: 1, name: 1 },
        { id: 2, name: 2 },
        { id: 3, name: 3 },
        { id: 4, name: 4 },
        { id: 5, name: 5 },
        { id: 6, name: 6 },
        { id: 7, name: 7 },
        { id: 8, name: 8 },
        { id: 9, name: 9 },
        { id: 10, name: 10 },
        { id: 11, name: 11 },
      ],
    }
  },
  props: {
    boardId: {
      type: Number,
    },
  },
}
</script>

<style lang="css" scoped>
.board {
  display: grid;
  grid-template-columns: 200px;
  grid-auto-columns: 200px;
  grid-auto-flow: column;
  grid-gap: 20px;
}
</style>
