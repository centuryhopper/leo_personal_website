<template>
    <h2>All Blogs</h2>
    <hr/>
    <button type="button" class="btn btn-dark" @click="flipOrdering">Sort by {{isNewest ? "Newest" : "Oldest"}}</button>
    <div class="d-grid gap-3">
        <div class="card" style="width: 18rem;" v-for="(b, idx) in bc" :key="idx">
            <div class="card-body">
                <a href="#" class="card-link">{{b.title}}</a>
                <h5 class="card-title">{{b.date}}</h5>
                <p class="card-text">{{b.previewDesc}}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import { blogCards } from '@/constants/constants'

export default defineComponent({
    name:'blog-component',
    setup() {
        const bc = ref(blogCards)
        const isNewest = ref(false)
        return {bc, isNewest, }
    },
    methods: {
        flipOrdering()
        {
            // always reverses the order of your list
            this.bc.reverse()
            this.isNewest = !this.isNewest
        },
    },
    mounted() {
        console.log(this.bc)
    },
})
</script>


