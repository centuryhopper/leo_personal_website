<template>
    <p>
        I am excited to meet and work with you! We progress better together so please don't hesitate to contact me using the form below.
    </p>
    <form @submit="post" method="POST">
        <div class="mb-3">
            <label for="input1" class="form-label">Name</label>
            <input type="text" class="form-control" id="input1" v-model="postData.name" placeholder="Name" required>
        </div>
        <div class="mb-3">
            <label for="input2" class="form-label">Email</label>
            <input type="email" class="form-control" id="input2" aria-describedby="emailHelp" v-model="postData.email" placeholder="Email" required>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="input3" class="form-label">Subject</label>
            <input type="text" class="form-control" id="input3" v-model="postData.subject" placeholder="Subject" required>
        </div>
        <div class="form-outline">
            <textarea class="form-control" id="textAreaContact" rows="7" v-model="postData.message" placeholder="Message" required></textarea>
            <label class="form-label" for="textAreaContact">Message</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
// in Vue 3
import axios from 'axios'

export default defineComponent({
    name:'contact-me-component',
    setup() {
        const postData = ref({
            name: '',
            email: '',
            subject: '',
            message: '',
        })

        return { postData, }
    },
    methods:
    {
        async post(event: Event)
        {
            event.preventDefault()
            // console.log(`data: ${JSON.stringify(this.postData)}`)
            let res = null
            try {
                res = await axios.post('https://nodejs-portfolio-contacts.herokuapp.com/portfolio_contacts/', this.postData)
            } catch (error: any) {
                console.error(error.message)
            }
            console.log(res?.data)
        },
    },
})
</script>
