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
      props:true
    },
    {
      path: '/about',
      name: 'about',
      meta:{
        enterClass:'animate__animated animate__fadeInRight',
        leaveClass:'animate__animated animate__fadeOutLeft',
        title:"David Malka - About"
      },
      props:true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to,from,next) => {
  (to.name !== "home") ? document.title = to.meta.title : document.title = "David Malka UX/UI"
  next()
})
export default router
