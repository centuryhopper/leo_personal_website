
<template>
    <!-- <h1>Skills</h1> -->
    <h2>Programming Languages</h2>
    <hr/>
    <ul>
        <li v-for="(programmingLanguage, idx) in programmingLanguages" :key="idx"> {{programmingLanguage}}</li>
    </ul>
    <h2 class="skillsSubHeader">Technology & Frameworks I Use</h2>
    <hr/>
    <ul>
        <li v-for="(t, idx) in ts" :key="idx"> {{t}}</li>
    </ul>
    <h2 class="skillsSubHeader">Python Libraries I Use</h2>
    <hr/>
    <ul>
        <li v-for="(pl, idx) in pls" :key="idx"> {{pl}}</li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import '../assets/skills.css'
import {languages, techs, pythonLibraries} from '../constants/constants'

export default defineComponent({
    name:'skills-component',
    setup() {
        const programmingLanguages = ref(languages)
        const ts = ref(techs)
        const pls = ref(pythonLibraries)


        return {programmingLanguages, ts, pls,}
    },
})
</script>
