import { createRouter, createWebHistory } from 'vue-router'
// components
import HomeView from '../views/HomeView.vue'

// Create and configure the router instance.
const router = createRouter({
  // Use HTML5 History mode with the base URL from environment variables.
  history: createWebHistory(import.meta.env.BASE_URL),
  // Define route configurations.
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // Pass URL query parameter 'id' as a prop.
      props: (route) => ({ id: route.query.id }),
    },
  ],
})

export default router
