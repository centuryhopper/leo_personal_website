<template>
        <!-- To stops the page from jumping when a link is clicked
                we use the "prevent" modifier (short for preventDefault). -->
        <div id="navParent">
            <nav :class="active" @click.prevent>
            <router-link class="router_link home" @click="makeActive('home')" to="/">Home</router-link>
            <router-link class="router_link aboutMe" @click="makeActive('aboutMe')" to="/aboutMe">About Me</router-link>
            <router-link class="router_link skills" @click="makeActive('skills')" to="/skills">Skills</router-link>
            <router-link class="router_link games" @click="makeActive('games')" to="/games">Games</router-link>
            <router-link class="router_link contactMe" @click="makeActive('contactMe')" to="/contactMe">Contact Me</router-link>
            <router-link class="router_link blog" @click="makeActive('blog')" to="/blog">Blog</router-link>
        </nav>

        </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import '../assets/navbar.css';



export default defineComponent({
    name:'navbar-component',
    setup()
    {
        const active = ref('home')

        return {active}
    },
    methods:
    {
        makeActive(item:string) {
            // When a model is changed, the view will be automatically updated.
            this.active = item
            console.log(this.active)
        }
    },
})
</script>
