<template>
<!-- source: https://codepen.io/Kerrys7777/pen/QWgwEeG -->
<!-- https://codepen.io/heliocrat/pen/OgrydN -->
<!-- https://www.youtube.com/watch?v=MoDIpTuRWfM -->
<!-- https://getbootstrap.com/docs/5.0/layout/gutters/ -->
    <div class="container">
        <div class="row pt-5">
            <div class="text-center col-12">
                <h3 class="text-uppercase border-bottom mb-4">List of projects</h3>
            </div>
        </div>
        <div class="input-group mb-3">
            <input type="text" placeholder="Search project by title" aria-label="SearchProject" v-model="search">
            <div class="input-group-append">
                <span class="input-group-text">
                    <fa icon="fa-solid fa-magnifying-glass" />
                </span>
            </div>
        </div>
        <div class="row g-3">
            <div class="col-12 col-md-6 col-lg-6 col-sm-6" v-for="(info, idx) in filteredProjects" :key="idx">
                <div class="card">
                    <img :src="info.imgUrl" class="card-img-top" alt="Card Image">
                    <div class="card-body">
                        <h5 class="card-title text-center">{{info.title}}</h5>
                        <p class="card-text mb-4">{{info.description}}</p>
                        <div class="text-center">
                            <a class="card-link btn btn-primary" target="_blank" rel="noopener noreferrer" :href="info.gameLink" >Link to game</a>
                            <a class="card-link btn btn-primary" target="_blank" rel="noopener noreferrer" :href="info.sourceCodeLink" >Source code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

class ProjectCard
{
    private imgUrl: string;
    public title: string;
    private description: string;
    private gameLink: string;
    private sourceCodeLink: string;

    constructor(imgUrl: string, title: string, description: string, gameLink: string, sourceCodeLink: string)
    {
        this.imgUrl = imgUrl;
        this.title = title;
        this.description = description;
        this.gameLink = gameLink;
        this.sourceCodeLink = sourceCodeLink;
    }
}

export default defineComponent({
    name:'games-component',
    setup() {
        const search = ref<string>('')
        const projectInfoLst = ref<ProjectCard[]>([
            new ProjectCard(
                'https://raw.githubusercontent.com/leozhang1/leo_personal_website/main_laptop/src/photos/tic_tac_toe.png',
                'Tic Tac Toe',
                'Tic Tac Toe with apples and oranges!',
                'https://gamerboi2022.itch.io/tic-tac-toe',
                'about:blank',
            ),
            new ProjectCard(
                'https://raw.githubusercontent.com/leozhang1/leo_personal_website/main_laptop/src/photos/pong.png',
                'Pong',
                'This is Classic game of pong. The ball will move faster with each bounce to make things more interesting. Player 1 controls: W and S. Player 2 controls: up and down arrows. I hope you enjoy.',
                'https://gamerboi2022.itch.io/pong',
                'about:blank',
            ),
        ])

        const filteredProjects = computed(
            () =>  {
                return projectInfoLst
                .value
                .filter((projectInfo:any) => {
                    // case insensitve search
                    return projectInfo.title.toLowerCase().includes(search.value.toLowerCase())
                })
            }
        )
        return {projectInfoLst,search,filteredProjects}
    },
})
</script>

<!-- <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url("https://use.fontawesome.com/releases/v5.13.0/css/all.css");
:root {
    --font3: 'Roboto', sans-serif;
}

.h1,
h1 {
    font-size: 1.5rem;
}

.container-fluid {
    max-width: 1400px;
}

.card {
    background: #fff;
    box-shadow: 0 6px 10px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .05);
    border: 1;
    border-radius: 1rem;
}

.img-hover-zoom--colorize img {
    border-radius: 50%;
    width: 150px;
    height: auto;
    margin-top: 20px;
    padding: 1px;
    transition: transform .5s;
    filter: grayscale(100%);
}

.img-hover-zoom--colorize:hover img {
    filter: grayscale(0);
    transform: scale(1.05);
}

.card h5 {
    overflow: hidden;
    height: 80px;
    font-weight: 300;
    font-size: 1rem;
}

.card h5 a {
    color: black;
    text-decoration: none;
}

.role {
    color: #7a7a7a;
}

.box {
    display: flex;
    align-items: center;
    justify-content: center;
}

.fab {
    font-size: 1.5rem;
    color: darkgray;
    transition: transform .5s;
}

.fab:hover {
    color: black;
    transform: scale(1.1);
}

.card h2 {
    font-size: 1rem;
}


/* MEDIA */

@media only screen and (min-width: 1200px) {
    .img-hover-zoom--colorize img {
        width: 200px;
    }
}

@media only screen and (min-width: 1200px) {
    .h1,
    h1 {
        font-size: 2rem;
    }
}
</style>
 -->
