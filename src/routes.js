import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Auth from './views/Auth.vue'
import CourseDetail from './views/CourseDetail.vue'
import ShoppingCart from './views/ShoppingCart.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/About.vue'),
  },
  {
    path: '/auth',
    component: Auth,
    component: () => import('./views/Auth.vue'),
  },
  {
    path: '/profile',
    component: Auth,
    component: () => import('./views/Profile.vue'),
  },
  {
    path: '/courses/:id/details',
    name: 'details',
    component: CourseDetail,
    props: true,
  },
  {
    path: '/buy/',
    name: 'buy',
    component: ShoppingCart,
    props: true,
  },
  { path: '/', component: Home, meta: { title: 'Home' } },

  { path: '/:path(.*)', component: NotFound },
]
