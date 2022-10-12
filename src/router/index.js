import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        enterClass:'animate__animated animate__fadeInLeft',
        leaveClass:'animate__animated animate__fadeOutRight',
      },
    },
    {
      path: '/about',
      name: 'about',
      meta:{
        enterClass:'animate__animated animate__fadeInRight',
        leaveClass:'animate__animated animate__fadeOutLeft',
        title:"David Malka - About"
      },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/project:/:id',
      name: 'project',
      meta:{
        enterClass:'animate__animated animate__fadeInRight',
        leaveClass:'animate__animated animate__fadeOutLeft',
        title:"Project"
      },
      props:true,
      component: () => import('../views/ProjectPage.vue')
    },
  ]
})

router.afterEach((to,from) => {
  (to.name !== "home") ? document.title = to.meta.title : document.title = "David Malka UX/UI"

})
export default router
