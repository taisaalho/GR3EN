<template>
    <div class="nav pa-10 ma-6">
        <v-app >
            <v-app-bar :elevation="2" color="rgba(0, 115, 98, 0.8)">
                <v-btn variant="text"><img src="GR3EN\src\assets\Logo 2.svg"></v-btn>
                <v-btn variant="text" class="navBtn" color="white">Atividades</v-btn>
                <v-btn variant="text" class="navBtn" color="white">OcorrĂȘncias</v-btn>
                <v-btn variant="text" class="navBtn" color="white ">Ranking</v-btn>
                <template v-slot:append>
                    <RouterLink to ="/signin"><v-btn variant="text" color="white" class="navBtn">Sign In</v-btn></RouterLink>
                </template>
            </v-app-bar>
        </v-app>
    </div>
</template>

<script>
    import {RouterLink, RouterView} from 'vue-router'
    export default {};
</script>

<style lang="scss" scoped>
    
    .navBtn{
        top: 0px;
        z-index: 2;
        font-family: Rubik;
        font-weight: bold;
    }

    a{
        text-decoration: none;
    }
</style>