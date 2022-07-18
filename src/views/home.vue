<template>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-7 text-center">
          <!-- Leo_Magic_Kingdom.jpg -->
          <!-- shutterstock-1099751423.jpg -->
          <img id="profilechild" class="img-fluid w-50 h-25 ms-5 rounded-circle" src="https://raw.githubusercontent.com/leozhang1/leo_personal_website/master/public/images/Leo_Magic_Kingdom.jpg" alt="Avatar">
          <p>A picture of me at Disney's Magic Kingdom.</p>
        </div>
        <div class="col-5 text-center">
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
import { defineComponent, ref } from 'vue'
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
