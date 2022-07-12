
<template>
    <!-- <h1>Skills</h1> -->
    <h2>Programming Languages</h2>
    <hr/>
    <ul>
        <li v-for="(programmingLanguage, idx) in programmingLanguages" :key="idx"> {{programmingLanguage}}</li>
    </ul>
    <h2 class="skillsSubHeader">Technology & Frameworks I use</h2>
    <!-- TODO: build a list of stuff that I use -->
    <hr/>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import '../assets/skills.css'
import {languages} from '../constants/constants'

export default defineComponent({
    name:'skills-component',
    setup() {
        const programmingLanguages = ref(languages)
        return {programmingLanguages}
    },
})
</script>
