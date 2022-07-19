<template>
    <div class="text-center">
        <h2>All Blogs</h2>
    </div>
    <hr/>
    <div class="text-center">
        <button type="button" class="btn btn-dark" @click="flipOrdering">Sorted by {{isNewest ? "Newest" : "Oldest"}}</button>
    </div>
    <div class="card mx-auto mt-3 w-75" v-for="(b, idx) in bc" :key="idx">
        <div class="card-body">
            <router-link
            class="card-link"
            :to="{ name: b.routeName, params: {title: b.title,} }"
            >
                {{b.title}}
            </router-link>
            <h5 class="card-title">{{b.date}}</h5>
            <p class="card-text">{{b.previewDesc}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import { blogCards } from '@/constants/constants'

export default defineComponent({
    name:'blog-component',
    setup() {
        // make sure the list is sorted by oldest by default
        blogCards.sort((a,b) => a.dateComparator > b.dateComparator ? 1 : -1)
        const bc = ref(blogCards)
        const isNewest = ref(false)
        return { bc, isNewest, }
    },
    methods: {
        flipOrdering()
        {
            // always reverses the order of your list
            this.bc.reverse()
            this.isNewest = !this.isNewest
        },
    },
})
</script>


