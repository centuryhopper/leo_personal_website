<template>
  <div class="app">
    <NavBar/>
      <div id="profileparent">
        <img id="profilechild" src="Leo_Magic_Kingdom.jpg" alt="Avatar">
        <p>A picture of me at Disney's Magic Kingdom.</p>
      </div>

      <div id="introparent">
        <h2 id="introchild">
          Hello there! <br/>  My name is Leo Zhang. I am currently seeking a job/internship for anything related to computer programming and problem solving.
        </h2>
        <button id="resumeButton">resume</button>
        <button id="greetButton">Say Hi!</button>
      </div>



      <div class="footerButtonsParent btn-group">
        <button class="footerButtonProps">Github</button>
        <button class="footerButtonProps">LinkedIn</button>
        <button class="footerButtonProps">Facebook</button>
      </div>

      <div class="footerCopyrightParent">
        <footer>Leo Zhang &copy; {{new Date().getFullYear() }}</footer>
      </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from './components/NavBar.vue';
import './assets/intro.css'
import './assets/footer.css'



export default defineComponent({
  name: 'App',
  components:
  {
    NavBar,
  },
  // composition api
  setup()
  {
    const stuff = ref('dummy stuff')

    return { stuff }
  },
  methods:
  {

  }
});
</script>

<style>
</style>
