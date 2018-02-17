import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BoardList from './board/BoardList.vue'
import BoardDetail from './board/BoardDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/boards',
      name: 'boards',
      component: BoardList,
    },
    {
      path: '/boards/:boardId',
      name: 'board-detail',
      component: BoardDetail,
      props: route => ({ boardId: Number(route.params.boardId) }),
    },
  ],
})
