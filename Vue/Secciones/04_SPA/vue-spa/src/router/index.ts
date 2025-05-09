import NotFound404 from '@/modules/common/pages/NotFound404.vue'
import HomePage from '@/modules/landing/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Landing
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPages.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          beforeEnter: [isAuthenticatedGuard],
          //props: true,
          props: (route) => {
            //console.log(route)

            const id = Number(route.params.id)
            return isNaN(id) ? { id: 1 } : { id }
          },
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        },
      ],
    },

    //Auth
    {
      path: '/auth',
      redirect: '/login',
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: '/login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: '/register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound404,
    },
  ],
})

export default router
