<template>
    <div class="text-center">
        <h2>{{title}}</h2>
        <hr/>
        <div v-html="blogDetailsHTML"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';


export default defineComponent({
    props: {
        title: {type: String, required: true, default: "Greetings!"},
        blogDetailsHTML: {type: String, required: true, default: "<p>this is where the blog details go!</p>"},
    },
    name:'blog-details-component',
})
</script>

