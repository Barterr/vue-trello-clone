<template>
	<draggable :list="tasks" :options="{group:'task-list'}" class="task-list">
		<div v-for="task in tasks" :key="task.id" class="task">{{task.name}}</div>
	</draggable>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: { draggable },
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: 'Task 1',
        },
        {
          id: 2,
          name: 'Task 2',
        },
        {
          id: 3,
          name: 'Task 3',
        },
        {
          id: 4,
          name: 'Task 4',
        },
      ],
    }
  },
}
</script>

<style scoped>
.task-list {
  display: grid;
  grid-gap: 5px;
  border-radius: 3px;
  min-height: 75px;
  background-color: #42b983;
  color: white;
  padding: 5px;
}

.task {
  height: 20px;
  padding: 5px;
  background-color: blue;
}
</style>
