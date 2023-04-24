import HomeLayout from '@/modules/home/layouts/HomeLayout'
// import getProducts from '@/modules/products/services/getProducts'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeLayout,
    children: [
      {
        path: 'home',
        name: 'homePage',
        component: () => import('@/modules/home/pages/HomePage')
      },
      {
        path: 'about',
        name: 'aboutPage',
        component: () => import('@/modules/home/pages/AboutPage')
      },
      {
        path: 'register',
        name: 'registerPage',
        component: () => import('@/modules/home/pages/RegisterPage')
      },
      {
        path: 'login',
        name: 'loginPage',
        component: () => import('@/modules/home/pages/LoginPage')
      },
      {
        path: '',
        name: 'homeRedirect',
        redirect: { name: 'homePage' }
      }
    ]
  },
  {
    path: '/app',
    name: 'products',
    component: () => import('@/modules/products/layouts/ProductLayout'),
    children: [
      {
        path: 'home',
        name: 'productsHome',
        component: () => import('@/modules/products/pages/HomePage')
      },
      {
        path: 'home/:id',
        name: 'productById',
        component: () => import('@/modules/products/pages/ProductPage'),
        props: (route) => {
          const id = Number(route.params.id)
          return isNaN(id) ? { id: 1 } : { id }
        }
      },
      {
        path: 'crud',
        name: 'productsCrud',
        component: () => import('@/modules/products/pages/CrudPage')
      },
      {
        path: 'home',
        name: 'productsHomeRedirect',
        redirect: { name: 'productsHome' }
      },
      {
        path: '',
        name: 'productsHomeRedirectSec',
        redirect: { name: 'productsHome' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/modules/shared/PageNotFound')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
