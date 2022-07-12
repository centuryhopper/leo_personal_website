<template>
    <footer id="footer" class="bg-light text-center text-lg-start">
      <div class="container mt-5">
        <div class="row align-items-center">
          <div class="col-6">
            <div class="btn-group" role="group">
              <button class="btn btn-outline-primary" onclick="window.open('https://github.com/leozhang1','_blank')">Github</button>
            <button class="btn btn-outline-primary" onclick="window.open('https://www.linkedin.com/in/leo-zhang2020/','_blank')">LinkedIn</button>
            <button class="btn btn-outline-primary" onclick="window.open('https://www.facebook.com/leo.zhang.31105/','_blank')">Facebook</button>
          </div>
          </div>

          <div class="col-6">
            <div class="text-end p-3" >
              &copy; {{new Date().getFullYear()}} Copyright: Leo Zhang
            </div>
          </div>

        </div>
      </div>
    </footer>

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
