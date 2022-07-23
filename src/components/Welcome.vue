<template>
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <h2>My New Site</h2>
        <hr/>
        <div class="texts">
            Hello there! Welcome to my website! Everything you see is created by me from scratch using Vue.js 3! My previous website was made in flutter-web but I wanted to use HTML,CSS, and JavaScript since those tools were more in demand in the job market. I chose Vue.js 3 over other frameworks for a few reasons:
        </div>
        <ul>
            <li>A desire to learn a new frontend framework with a design strucuture to my liking</li>
            <li>Out of the box TypeScript support</li>
            <li>I already use Node.Js, so why not learn a frontend framework using the same programming language</li>
        </ul>
        <div class="texts">
            These are just a few of the reasons why I decided to use Vue.js 3 (hence this first post).
            I will most likely write mainly about programming and programming-adjacent topics, but I may occasionally dip into other subjects if something catches my attention.
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        title: {type: String, required: true, default: "Greetings!"},
    },
    name:'welcome-to-my-website-card-details',
})
</script>


<style>
.texts {
  /* border: 1px solid black; */
  padding: 10px;
  width: 75%;
  text-align: justify;
}
</style>

