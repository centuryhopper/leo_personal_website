<template>
    <div id="main">
        <!-- The navigation menu will get the value of the "active" variable as a class. -->

        <!-- To stops the page from jumping when a link is clicked
                we use the "prevent" modifier (short for preventDefault). -->

        <nav :class="active" v-on:click.prevent>

            <!-- When a link in the menu is clicked, we call the makeActive method,
                    defined in the JavaScript Vue instance. It will change the value of "active". -->

            <a href="#"
            class="home"
            v-on:click="makeActive('home')">Home</a>
            <a href="#" class="aboutMe" v-on:click="makeActive('aboutMe')">About Me</a>
            <a href="#" class="skills" v-on:click="makeActive('skills')">Skills</a>
            <a href="#" class="games" v-on:click="makeActive('games')">Games</a>
            <a href="#" class="contactMe" v-on:click="makeActive('contactMe')">Contact Me</a>
            <a href="#" class="blog" v-on:click="makeActive('blog')">Blog</a>

        </nav>

        <!-- The mustache expression will be replaced with the value of "active".
            It will automatically update to reflect any changes. -->
        <p>You chose <b>{{active}}</b></p>
    </div>

</template>



<script lang="ts">
import { defineComponent ,ref } from 'vue'
import '../assets/navbar.css';



export default defineComponent({
    setup() {
        const active = ref('home')

        return {active}
    },
    methods:
    {
        makeActive(item:string) {
                // When a model is changed, the view will be automatically updated.
                this.active = item;
                console.log(this.active)
            }
    }
})
</script>
