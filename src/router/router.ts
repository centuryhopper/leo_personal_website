import Home from '../views/home.vue'
import AboutMe from '../views/AboutMe.vue'
import Skills from '../views/MySkills.vue'
import Games from '../views/MyGames.vue'
import ContactMe from '../views/ContactMe.vue'
import Blog from '../views/MyBlog.vue'


import {createRouter, createWebHashHistory} from "vue-router"


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', name: 'home', component: Home, },
    { path: '/aboutMe', name: 'aboutMe', component: AboutMe, },
    { path: '/skills', name: 'skills', component: Skills, },
    { path: '/games', name: 'games', component: Games, },
    { path: '/contactMe', name: 'contactMe', component: ContactMe, },
    { path: '/blog', name: 'blog', component: Blog, },
  ]

  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

export default router
