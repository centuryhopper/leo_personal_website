<template>
    <div class="min-vh-100 d-flex flex-column justify-content-between">
      <div id="main">
        <NavBar/>
        <!-- component will render here in the router view -->
        <router-view/>
      </div>
    </div>
    <FooterComp/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue'


export default defineComponent({
  name: 'App',
  components:
  {
    NavBar,
    FooterComp,
  },
  // composition api
  // setup()
  // {

  //   return {  }
  // },
  // methods:
  // {

  // },

});
</script>

<!-- <style>

.nav-bar-active-link {
    background-color:#e35885;
}

</style> -->