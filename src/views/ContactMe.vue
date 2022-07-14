<template>
    <div class="text-center">
        <p>
        I am excited to meet and work with you! We progress better together so please don't hesitate to contact me using the form below.
        </p>
    </div>
    <form @submit="post" method="POST">
        <div class="row mb-3 w-75 mx-auto">
            <div class="col-6">
                <label for="input1" class="form-label">Name</label>
                <input type="text" class="form-control" id="input1" v-model="postData.name" placeholder="Name" required>
            </div>
            <div class="col-6">
            <label for="input2" class="form-label">Email</label>
                <input type="email" class="form-control" id="input2" aria-describedby="emailHelp" v-model="postData.email" placeholder="Email" required>
                <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
        </div>
        <div class="mb-3 w-75 mx-auto">
            <label for="input3" class="form-label">Subject</label>
            <input type="text" class="form-control" id="input3" v-model="postData.subject" placeholder="Subject" required>
        </div>
        <div class="form-outline mb-5 w-75 mx-auto">
            <label class="form-label" for="textAreaContact">Message</label>
            <textarea class="form-control" id="textAreaContact" rows="7" v-model="postData.message" placeholder="Message" required></textarea>
        </div>
        <div class="w-75 mx-auto">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>

    </form>
</template>

<script lang="ts">
// in Vue 3
import { defineComponent,ref } from 'vue'
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
                res = await axios.post(process.env.VUE_APP_LIVE_ENDPOINT, this.postData)
            } catch (error: any) {
                console.error(error.message)
            }
            console.log(res?.data)
        },
    },
})
</script>
