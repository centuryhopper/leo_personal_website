<template>
  <div id="profileparent">
    <img id="profilechild" src="https://raw.githubusercontent.com/leozhang1/leo_personal_website/master/public/images/Leo_Magic_Kingdom.jpg" alt="Avatar">
    <p>A picture of me at Disney's Magic Kingdom.</p>
  </div>

  <div id="introparent">
    <h2 id="introchild">
      Hello there! <br/>  My name is Leo Zhang. I am currently seeking a job/internship for anything related to computer programming and problem solving.
    </h2>
    <button id="resumeButton" @click="resumeAction">resume</button>
    <button id="greetButton" @click="sayHiAction">Say Hi!</button>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import '../assets/intro.css'
import '../assets/footer.css'

export default defineComponent({
  name: 'home-component',
  // props: {

  // },
  components:
  {
  },
  // composition api
  setup()
  {
    return {  }
  },
  methods:
  {
    resumeAction() {
      console.log('clicked on resume button')
    },
    sayHiAction() {
      console.log('clicked on sayhi button')
    },

  },

});
</script>
