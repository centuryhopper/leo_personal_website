<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-7 col-sm-12 text-center">
        <img id="profilechild" class="w-75 rounded-circle" src="https://raw.githubusercontent.com/leozhang1/leo_personal_website/main_laptop/src/photos/IMG_9713.jpeg" alt="Avatar">
        <p>Great Falls Park in Maryland.</p>
      </div>
      <div class="col-lg-5 col-sm-12 text-center">
        <p id="introchild" class="text-wrap">
          Hello there!
          My name is Leo Zhang.
          I am currently seeking a job/internship for
          anything related to computer programming and
          problem solving.
        </p>
        <button id="resumeButton" class="btn btn-primary rounded-pill" data-mdb-ripple-color="dark" @click="resumeAction">resume</button>
        &nbsp;
        <!-- <button id="greetButton" class="btn btn-outline-primary rounded-pill"  data-mdb-ripple-color="dark" @click="sayHiAction">Say Hi!</button> -->
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, } from 'vue'
import '../assets/intro.css'
import '../assets/footer.css'


export default defineComponent({
  name: 'home-component',
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
      window.open('https://drive.google.com/file/d/1k-oVcUm6TwIEY6b8X_qwoeKipRF14SzW/view?usp=sharing','_blank')
    },
    // sayHiAction() {
    //   console.log('clicked on sayhi button')
    // },

  },

});
</script>

<style>

img {
  display: block;
  max-width: 400px;
  max-height: 400px;
  width: auto;
  height: auto;
  object-fit: cover;
  object-position: center center;
}

/* .img-cropped {
  object-fit: cover;
  object-position: center center;
  max-width: 500px;
  max-height: 500px;
  width: auto;
  height: auto;
} */



</style>
