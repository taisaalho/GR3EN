<script>
import {User} from '../stores/userStore.js'
import NavBar from '../components/NavBar.vue'
export default {
    components: {
        NavBar,
    },
    data:() =>({
        User: User(),
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',],
        currentUser: localStorage.getItem('Id') || 'null'
        
    }), 
    methods: {
        inscricaoEco(){
            /* console.log(localStorage.getItem('Id')) */
            /* console.log(currentUser)*/
            console.log('hi')
            this.User.inscricaoEcoEscolas(localStorage.getItem('Id')) 
            
        }
    
    },
    mounted(){
        
    }
};

</script>
<template>
    <v-app >
            <NavBar/>
            <v-main>
                <v-container>
                    <v-row>
                        <v-app>
                            <div class="carousel">
                                <v-carousel class="carousel">
                                    <v-carousel-item
                                    rel="preload" loading="lazy" width="1500" height="450" src="/src/assets/img/mountains 2.webp"
                                    cover
                                    ></v-carousel-item>
                                    
                                    <v-carousel-item
                                    rel="preload" loading="lazy" width="1500" height="450" src="/src/assets/img/sand.webp"
                                    cover
                                    ></v-carousel-item>
                                    
                                    <v-carousel-item
                                    rel="preload" loading="lazy" width="1500" height="450" src="/src/assets/img/mountains.webp"
                                    cover
                                    ></v-carousel-item>
                                </v-carousel>
                            </div>
                        </v-app>
                    </v-row>

                    <v-row class="background">
                        <v-col  cols="4" >
                            <img rel="preload" loading="lazy" width="200" height="200" src="/src/assets/img/main1.svg"
                            class="homeIMG" alt="">
                        </v-col>
                        <v-col cols="8"  class="">
                            <div class="">
                                <h1 class="title">Ocorrências!</h1>
                                <p class="description">Ao reportares ocorrências ganhas:
                                    -XP , para subires nas Tabelas de Classificação,
                                    -Badges e Títulos , para mostrares a todos as tuas conquistas, e,
                                    -Ajudas o ambiente com pequenos passos.
                                </p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row class="background">
                        <v-col cols="8"  class="">
                            <div class="">
                                <h1 class="title">Atividades</h1>
                                <p class="description">Para promover a socialização e as boas práticas na boa conservação do meio Ambiente, organizamos várias atividades ao longo do ano para aprenderes e divertires enquanto ajudas o ambiente.
                                    Tal como as ocorrências, ganhas sempre algo ao participares.
                                </p>
                            </div>
                        </v-col>
                        <v-col  cols="4">
                            <img rel="preload" loading="lazy" src="/src/assets/img/main1.svg" width="200" height="200" class="homeIMG2" alt="">
                        </v-col>
                    </v-row>

                    <v-row class="background">
                        <v-col  cols="4">
                            <img rel="preload" loading="lazy" width="200" height="200" src="/src/assets/img/main1.svg" class="homeIMG" alt="">
                        </v-col>
                        <v-col cols="8"  class="">
                            <div class="">
                                <h1 class="title">Junta-te ao conselho Eco-Escolas!</h1>
                            </div>
                            <v-btn size="x-large" v-if="currentUser == 'null'" to="/signin" class="buttons" id="mainPageButton">Inscrever</v-btn>
                            <v-btn size="x-large" v-else-if="!currentUser.conselhoEco" @click="inscricaoEco()" class="buttons" id="mainPageButton">Inscrever</v-btn>
                            <v-btn size="x-large" v-else disabled class="buttons" id="mainPageButton">Inscrito</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
    </v-app>
</template>


<style lang="scss" scoped>
    @font-face{
        font-family: Norquay;
        src: url(../assets/NorquayRegular.otf);
        display:swap;
    }
    @font-face{
        font-family: Rubik;
        src: url(../assets/Rubik-Regular.ttf);
        display:swap;
    }

.v-application__wrap {
    height: 10vh !important;
}
:deep(.v-application__wrap){
    min-height: fit-content
}

.v-theme--light {
    --v-theme-background: none;
}
    .carousel{
        width: 70vw; 
        border-radius: 30px;
        margin: auto;
        margin-bottom: 0vh;
        margin-top: 5vh;
    }
    .v-main{
    background-image: url('/src/assets/img/Mask group.svg') !important;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: auto 400% !important;
    height: 220vh !important;
    width: 100vw !important;
    // background-attachment: fixed !important;
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
.title{
    margin-top:1vh;
    margin-left:3vw;
    font-family: Norquay;
    font-size: 3em;
    color: white;
    text-shadow: 5px 1px 1px #8D5836;    
}
.description{
    margin-right:3vw;
    margin-left:3vw;
    color: white;
    font-family: Rubik;
    font-size: 1.5rem;
}
.homeIMG{
    width:15vw;
    border-radius:30px;
    margin-left:3vw;
    margin-right:0vw;
}

.homeIMG2{
    width:15vw;
    border-radius:30px;
    
    margin-right:3vw;
}    
</style>