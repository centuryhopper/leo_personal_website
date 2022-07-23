<template>
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <h2>Independence Day Fireworks By the Lake</h2>
      <hr/>
      <div class="texts">
          Fireworks look even better by the lake! I wanted to go see the fireworks at Lake Eola which is in downtown Orlando. However, little did I know until I got there they were so packed around the evenings that I ended up settling at a different lake (Lake Cherokee) and the experience was just as good!
      </div>
      <div class="video-player">
        <iframe class="embedded-video" src="https://www.youtube.com/embed/JDOvUZ3updU" title="july_4th_2022_fireworks_lake_cherokee_FL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        title: {type: String, required: true, default: "Greetings!"},
    },
    name:'fireworks-card-details',
})
</script>


<style>
.texts {
  /* border: 1px solid black; */
  padding: 10px;
  width: 50%;
  text-align: justify;
}

.embedded-video {
  min-width: 50rem;
  min-height: 25rem;
}
</style>

