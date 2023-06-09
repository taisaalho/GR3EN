<template>
        
        <v-app-bar color="rgba(0, 115, 98, 1)">
                <RouterLink to="/"><img class="logo" src="\src\assets\img\Logo 2.svg"></RouterLink>
                <RouterLink to="/activities"><v-btn variant="text" class="navBtn" color="white">Atividades</v-btn></RouterLink>
                <v-btn @click="checkRouter" variant="text" class="navBtn" color="white">Ocorrências</v-btn>
                <RouterLink to="/ranking"><v-btn variant="text" class="navBtn" color="white ">Ranking</v-btn></RouterLink>
                <v-btn v-if="checkAdmin()" color="white" to="/ocurrences">Conselho Eco-Escolas</v-btn>
                <template v-if="(!!currentUser)" v-slot:append>
                    <RouterLink to="/profile"><v-btn variant="text" color="white" class="navBtn">Perfil</v-btn></RouterLink>
                </template>
                <template v-else v-slot:append>
                    <RouterLink to="/users/login"><v-btn variant="text" color="white" class="navBtn">Sign In</v-btn></RouterLink>
                </template>
                
        </v-app-bar>    

</template>

<script>
    import {RouterLink, RouterView} from 'vue-router'
    export default {
        data() {
            return {
                currentUser: localStorage.getItem('Token')
            }
        },

        methods: {
            checkRouter() {
                if(!!this.currentUser){
                    this.$router.push('/occurrenceReport')
                }else{
                    alert("Login Necessário")
                }
            },
            checkAdmin() {
                if(this.currentUser?.conselhoEco == true){
                    return true
                }
            }
        },
    };
</script>

<style lang="scss" scoped>
    /* .navBtn{
        top: 0px;
        z-index: 2;
        font-family: Rubik;
        font-weight: bold;
        -webkit-text-stroke: 2px #8D5836;
    } */

    *{
        text-decoration: none;
    }

    .logo{
        width: 55%;
    }

    .buttons{
        font-family:Norquay;
        padding-top: 0.3vh;
        background-color:#FF6500;
        color:white;
        font-size: 1.5rem;
    }
    #mainPageButton{
        margin-left: 25vw;
        margin-top: 5vh;
    }

    .background{
        margin-top:5vh;
        background-color:rgba(0, 115, 98, 0.8);
        border-radius: 30px;
        height:40vh;
        display: flex;
        align-items: center;
        
    }
    
    .textBox{
        margin-left: 3vw;
        
    }
    
    .title{
        margin-top:1vh;
        margin-left:3vw;
        
        font-family: Norquay;
        font-size: 3em;
        color: white;
        text-shadow: 5px 1px 1px #8D5836 ;   /* text shadow?????? */
        
    }

    .description{
        margin-right:3vw;
        margin-left:3vw;
        color: white;
        font-family: Rubik;
        font-size: 1.5rem;
    }
    .homeIMG{
        width:25vw;
        border-radius:30px;
        margin-left:3vw;
        margin-right:3vw;
    }
    
    .homeIMG2{
        width:25vw;
        border-radius:30px;
        
        margin-right:3vw;
    }
</style>