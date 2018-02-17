<template>
  <router-link :to="link" class="board-card">
    <div class="board-name">
      {{board.name}}
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      link: { name: 'board-detail', params: { boardId: this.board.id } },
    }
  },
  props: {
    board: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.board-card {
  display: grid;
  border-radius: 3px;
  height: 75px;
  background-color: #42b983;
  color: white;
}

.board-name {
  margin: 10px;
  font-weight: 600;
}
</style>
