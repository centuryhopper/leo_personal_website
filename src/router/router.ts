import AboutMe from '../views/AboutMe.vue'
import ContactMe from '../views/ContactMe.vue'
import Home from '../views/home.vue'
import Blog from '../views/MyBlog.vue'
import Games from '../views/MyGames.vue'
import Skills from '../views/MySkills.vue'
import Welcome from '../components/Welcome.vue'
import Fireworks from '../components/Fireworks.vue'
import LinuxDistro from '../components/LinuxDistro.vue'
import LastSemester from '../components/LastSemester.vue'


import { createRouter, createWebHashHistory } from "vue-router"
import PageNotFound from '../views/PageNotFound.vue'


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', name: 'home', component: Home, },
    { path: '/aboutMe', name: 'aboutMe', component: AboutMe, },
    { path: '/skills', name: 'skills', component: Skills, },
    { path: '/games', name: 'games', component: Games, },
    { path: '/contactMe', name: 'contactMe', component: ContactMe, },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blog,
    },
    {
      path: '/welcomeBlog',
      name: 'welcomeBlog',
      components: {
        default: Welcome,
      },
      // allow props for blog details
      props: true,
    },
    {
      path: '/linuxDistroTalk',
      name: 'linuxDistroTalk',
      components: {
        default: LinuxDistro,
      },
      // allow props
      props: true,
    },
    {
      path: '/fireworksBlog',
      name: 'fireworksBlog',
      components: {
        default: Fireworks,
      },
      // allow props
      props: true,
    },
    {
      path: '/finalSemester',
      name: 'finalSemester',
      components: {
        default: LastSemester,
      },
      // allow props
      props: true,
    },
    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: PageNotFound,
    },
  ]

  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
    linkActiveClass: 'nav-bar-active-link'
  })

export default router
