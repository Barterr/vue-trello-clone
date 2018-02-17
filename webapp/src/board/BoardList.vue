<template>
  <div class="boards">
    <board-card v-for="board in boards" :key="board.id" :board="board"></board-card>
  </div>
</template>

<script>
import BoardCard from '@/board/BoardCard.vue'

export default {
  components: {
    BoardCard,
  },
  data() {
    return {
      boards: [
        {
          id: 1,
          name: 'Board 1',
        },
        {
          id: 2,
          name: 'Board 2',
        },
        {
          id: 3,
          name: 'Board 3',
        },
        {
          id: 4,
          name: 'Board 4',
        },
        {
          id: 5,
          name: 'Board 5',
        },
        {
          id: 6,
          name: 'Board 6',
        },
        {
          id: 7,
          name: 'Board 7',
        },
      ],
    }
  },
}
</script>

<style scoped>
.boards {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
