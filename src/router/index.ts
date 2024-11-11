import {createRouter, createWebHistory} from "vue-router";
import LayoutView from '../views/LayoutVuew/LayoutVuew.vue'
import ProductsView from '../views/Products/ProductsView.vue';

  const routes = [
    {name: 'layout', path: '/', component: LayoutView,
      child: [
        {
          name: 'products', path: '/products', component: ProductsView
        },
      ]
    },
    {name: 'auth', path: '/auth', component: LayoutView}
  ]

  const router = createRouter({
    routes,
    history:createWebHistory("")
  })

  export default router