import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetallesServicios from '../views/DetallesServicios.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue')
  },
  {
    path: '/equipo',
    name: 'equipo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Equipo.vue')
  },
  {
    path: '/detallesServicios',
    name: 'detallesServicios',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetallesServicios.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  },
  {
    path: '/prueba',
    name: 'prueba',
    component: () => import(/* webpackChunkName: "about" */ '../views/Prueba.vue')
  },

  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
