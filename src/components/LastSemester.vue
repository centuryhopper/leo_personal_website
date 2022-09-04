<template>
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <h2>Last Semester of Grad School</h2>
        <hr/>
        <div class="texts">
            This is it. It's time to apply everything I have learned from college and finish strong! I am taking my final three classes:
        </div>
        <ul>
            <li>Incident Response Technologies</li>
            <li>Mixed Reality</li>
            <li>Algorithms in Computational Biology</li>
        </ul>
        <div class="texts">
            Incident Response technologies is a cybersecurity course that will involve practicing pentesting, which I always wanted to get a feel for what it's like being an ethical hacker. Mixed Reality is a project based course that will induce you to apply everything you learned from the two prereq courses, AR and VR, and work with other classmates in a fast paced environment with weekly deadlines. Initially each student will need to come up with a project idea for getting our foot in the door. So far my idea is to build a VR cooking simulation similar to the official VR cooking game, except my project will include rewinding time to undo mistakes made such as spilling food or liquid on the counter. Lastly Algorithms in Computational Biology, students will learn about various different algorithms that are applicable in the field of bioinformatics such as DNA string processing, finding patterns in strings using KMP algorithm, and so much more. I was pre-med for my first semester of undergrad, so it is nice to have a class where I can still apply what I learned in the past despite not being in that field anymore.
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        title: {type: String, required: true, default: "Greetings!"},
    },
    name:'last-semester-details',
})
</script>


<style>
.texts {
  /* border: 1px solid black; */
  padding: 10px;
  width: 75%;
  text-align: justify;
}
</style>

