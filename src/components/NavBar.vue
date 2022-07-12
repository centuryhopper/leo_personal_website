<template>
    <!-- To stops the page from jumping when a link is clicked
            we use the "prevent" modifier (short for preventDefault). -->
    <div id="navParent">
        <nav :class="store.activeRoute" @click.prevent>
        <router-link class="router_link home" @click="setRoute('home')" to="/">Home</router-link>
        <router-link class="router_link aboutMe" @click="setRoute('aboutMe')" to="/aboutMe">About Me</router-link>
        <router-link class="router_link skills" @click="setRoute('skills')" to="/skills">Skills</router-link>
        <router-link class="router_link games" @click="setRoute('games')" to="/games">Games</router-link>
        <router-link class="router_link contactMe" @click="setRoute('contactMe')" to="/contactMe">Contact Me</router-link>
        <router-link class="router_link blog" @click="setRoute('blog')" to="/blog">Blog</router-link>
        </nav>
    </div>
</template>


<script lang="ts">
import { defineComponent, } from 'vue';
import '../assets/navbar.css';
import {useStore} from '../pinia/stores'


export default defineComponent({
    name:'navbar-component',
    setup() {
        const store = useStore()

        return {store}
    },
    methods:
    {
        setRoute(newRoute: string) {
            this.store.setRoute(newRoute)
        }
    },
    mounted()
    {
        // console.log(this.store.activeRoute)
    },
})
</script>

