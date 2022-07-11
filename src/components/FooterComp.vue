<template>
    <div class="footerButtonsParent btn-group">
      <button class="footerButtonProps">Github</button>
      <button class="footerButtonProps">LinkedIn</button>
      <button class="footerButtonProps">Facebook</button>
    </div>

    <div class="footerCopyrightParent">
      <footer>Leo Zhang &copy; {{new Date().getFullYear() }}</footer>
    </div>
</template>


<script lang="ts">
import { defineComponent,  } from 'vue';
import '../assets/footer.css';

export default defineComponent({
    name:'footer-component',
    setup()
    {

        return {}
    },
    methods:
    {
    },
})
</script>
