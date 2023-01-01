<template>
    <div class="nav" >
        <v-app >
            <v-app-bar :elevation="2" color="rgba(0, 115, 98, 0.8)">
                <v-btn variant="text" color="white">Logo</v-btn>
                <v-btn variant="text" color="white">Atividades</v-btn>
                <v-btn variant="text" color="white">Ocorrências</v-btn>
                <v-btn variant="text" color="white">Ranking</v-btn>
                <template v-slot:append>
                    <RouterLink to ="/signin"><v-btn variant="text" color="white">Sign In</v-btn></RouterLink>>
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
    @font-face{
        font-family: Rubik;
        src: url(../assets/Rubik-Regular.ttf);
    }

    .nav{
        position: absolute;
        top: 0px;
        z-index: 2;
        font-family: Rubik;
        

    }
</style>