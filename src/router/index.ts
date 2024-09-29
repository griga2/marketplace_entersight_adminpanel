import {createRouter, createWebHistory} from "vue-router";
import LayoutView from '../views/LayoutVuew/LayoutVuew.vue'
  const routes = [
    {name: 'layout', path: '/', component: LayoutView},
  ]

  const router = createRouter({
    routes,
    history:createWebHistory("")
  })

  export default router