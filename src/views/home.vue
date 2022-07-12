<template>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-7">
          <img id="profilechild" class="img-fluid w-50 h-50 ms-5 rounded-circle" src="https://raw.githubusercontent.com/leozhang1/leo_personal_website/master/public/images/Leo_Magic_Kingdom.jpg" alt="Avatar">
          <p>A picture of me at Disney's Magic Kingdom.</p>
        </div>
        <div class="col-5">
          <p id="introchild" class="text-wrap">
            Hello there!
            My name is Leo Zhang.
            I am currently seeking a job/internship for
            anything related to computer programming and
            problem solving.
          </p>
          <button id="resumeButton" class="btn btn-primary rounded-pill" data-mdb-ripple-color="dark" @click="resumeAction">resume</button>
          &nbsp;
          <button id="greetButton" class="btn btn-outline-primary rounded-pill"  data-mdb-ripple-color="dark" @click="sayHiAction">Say Hi!</button>
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
  // mounted() {
  // },

});
</script>
