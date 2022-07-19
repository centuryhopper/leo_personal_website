<template>
    <div class="min-vh-100 d-flex flex-column justify-content-between">
      <div id="main">
        <NavBar v-if="showNavigation" />
        <!-- component will render here in the router view -->
        <router-view/>
      </div>
    </div>
    <FooterComp/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteRecordName } from 'vue-router';
import FooterComp from './components/FooterComp.vue';
import NavBar from './components/NavBar.vue';

let navBarNames : Set<RouteRecordName|null> = new Set(["home","aboutMe","skills","games","contactMe","blogs",])

export default defineComponent({
  name: 'App',
  components:
  {
    NavBar,
    FooterComp,
  },
  computed: {
    showNavigation() {
      let checkName : RouteRecordName | null = this.$route.name === undefined ? "" : this.$route.name
      if (navBarNames.has(checkName)) {
        return true;
      } else {
        return false;
      }
    },
  },


});
</script>
