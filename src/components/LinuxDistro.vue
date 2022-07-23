<template>
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <h2>My Linux-distro Hopping Journey And My Choice of Linux Distro</h2>
        <hr/>
        <div class="texts">
            Distro hopping was a time-consuming but rewarding experience! The first linux distro I have ever used was linux mint during my Fall 2018 computer science I course because we needed a unix command line interface to run our coding assignments and I refuse to use a virtual machine on my windows laptop. Later on I switched to Ubuntu since linux was based off of it and I wanted to give it a try. Later on I felt overwhelmed with simultaneously learning Linux and being in school full time, so I took a break from it and bought a Macbook to keep using a Unix command line.
        </div>
        <div class="texts">
            Now it is Summer of 2022, I am taking one online course and have plenty of spare time to learn about linux and find the one that suits me best to settle on. Out of the three different distros I tried out i.e. PopOS, Arch Linux, and Fedora. I found Arch linux to be my favorite because this type of Linux gives me more fine-grained control over what is installed on my system and I know exactly what packages I need to remove to save storage space. There is also less bloatware than that of other distros and also than that of Windows and Mac. I also find the pacman package manager very convenient to use and I have access to every package in the arch linux user repository. However there were some disadvantages of using Arch Linux as well. There's a saying that with great power comes great responsibility and Arch Linux is no exception to that. It's taking me a while to get a lot done because there's so much work to be done with installing fonts, themes, and other packages. It is also very easy to break something in the system if you install an out of date package and uninstalling packages can be difficult too when there are other packages that depend of the current package to be deleted. The most difficult part of Arch Linux was installing it on my system. Luckily there is a built-in script called "archinstall" that eased the process of installation but I still found partitioning my disk to be a challenge as I chose auto-partition and accidentally wiped windows from my system. The good news is that I already backed up everything from my windows partition and didn't really need to keep windows anyway.
        </div>
        <div class="texts">
            Eventually I had to back out of Arch Linux and find another distro that I like and can stay productive in. It turns out that an Arch Linux based distro was just what I needed and after watching some youtube videos on some popular Arch-based distro suggestions, I ended up choosing EndeavourOS for several reasons:
        </div>
        <ul>
            <li>Ease of installation process</li>
            <li>Pacman package manager</li>
            <li>Access to all packages in the Arch user repository</li>
            <li>Great community support</li>
            <li>More out of the box functionality than pure Arch Linux. Although this also means more bloatware, I can live with this difference</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        title: {type: String, required: true, default: "Greetings!"},
    },
    name:'welcome-to-my-website-card-details',
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

