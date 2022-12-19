<template>
    <div class="nav" >
        <v-app >
            <v-app-bar :elevation="2">
                <v-btn variant="text">Logo</v-btn>
                <v-btn variant="text">Atividades</v-btn>
                <v-btn variant="text">Ocorrências</v-btn>
                <v-btn variant="text">Ranking</v-btn>
                <template v-slot:append>
                    <v-btn variant="text">Sign In</v-btn>
                </template>
            </v-app-bar>
               
               
        </v-app>
    </div>
</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>
    .nav{
        position: absolute;
        top: 0px;
        z-index: 2;
        

    }
</style>