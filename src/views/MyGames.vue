<template>
    <!-- <div class="text-center">
        <p>Content coming soon!</p>
    </div> -->
    <div class="row">
        <!-- <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card text-center">
                <div class="card-body">
                    <img class="card-img-top" src="../photos/pong.jpg">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div> -->
        <div class="col-sm-6">
            <div class="card">
                <img class="card-img-top" src="https://raw.githubusercontent.com/leozhang1/leo_personal_website/main_laptop/src/photos/pong.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Pong Game</h5>
                    <p class="card-text">This is Classic game of pong. The ball will move faster with each bounce to make things more interesting.
                    <br/>
                    Player 1 controls: W and S
                    <br/>
                    Player 2 controls: up and down arrows
                    I hope you enjoy.</p>
                </div>
            </div>
        </div>

        <div class="col-sm-6">
            <div class="card">
                <img class="card-img-top" src="https://raw.githubusercontent.com/leozhang1/leo_personal_website/main_laptop/src/photos/tic_tac_toe.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Tic Tac Toe</h5>
                    <p class="card-text">Tic Tac Toe with apples and oranges!</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    // game links: https://gamerboi2022.itch.io/pong
    // https://gamerboi2022.itch.io/tic-tac-toe
    name:'games-component',
    setup() {
        return {}
    },
})
</script>
