import {createRouter, createWebHistory} from "vue-router";
import LayoutView from '../views/LayoutVuew/LayoutVuew.vue'
  const routes = [
    {name: 'layout', path: '/', component: LayoutView,
      child: [
        {name: 'products', path: '/products', component: LayoutView},
      ]
    },
    {name: 'auth', path: '/auth', component: LayoutView}
  ]

  const router = createRouter({
    routes,
    history:createWebHistory("")
  })

  export default router