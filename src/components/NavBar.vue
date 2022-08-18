<template>
    <!-- To stops the page from jumping when a link is clicked
            we use the "prevent" modifier (short for preventDefault). -->
    <div id="navParent">
        <nav @click.prevent>
        <router-link to="/">Home</router-link>
        <router-link to="/aboutMe">About Me</router-link>
        <router-link to="/skills">Skills</router-link>
        <router-link to="/games">Projects</router-link>
        <router-link to="/contactMe">Contact Me</router-link>
        <router-link to="/blogs">Blog</router-link>
        </nav>
    </div>
</template>


<script lang="ts">
import { defineComponent, } from 'vue';
import '../assets/navbar.css';


export default defineComponent({
    name:'navbar-component',
})
</script>

<style>

.nav-bar-active-link {
    background-color:#e35885;
}

</style>