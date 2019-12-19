import VueRouter from 'vue-router'
import { routes } from './routes'

export const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [...routes]
});