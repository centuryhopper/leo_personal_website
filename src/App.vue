<template>
  <div class="app">
	<NavBar/>
	<div class="row">


    <div id="profileparent">
      <img id="profilechild" src="Leo_Magic_Kingdom.jpg" alt="Avatar">
    </div>


    <div id="introparent">
      <h2 id="introchild">
        Hello there!  My name is Leo Zhang. I am currently seeking a job/internship for anything related to computer programming and problem solving.
      </h2>
    </div>


	</div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from './components/NavBar.vue';
import './assets/intro.css'


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
