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
        currentUser: localStorage.getItem('Token') || 'null'
    }), 
    methods: {
        inscricaoEco(){
            
            this.User.inscricaoEcoEscolas(this.currentUser.idUser)
            this.currentUser = localStorage.getItem('Id')
            this.$router.go()
        }
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
            src="https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80"
            cover
            ></v-carousel-item>
            
            <v-carousel-item
            src="https://photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg"
            cover
            ></v-carousel-item>
            
            <v-carousel-item
            src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png"
            cover
            ></v-carousel-item>
        </v-carousel>
    </div>
</v-app>
<!-- Carousel -->
</v-row>


<v-row class="background">

<v-col  cols="4" >

    <img  src="/src/assets/img/main1.svg"
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
    <v-col  cols="4" >

        <img  src="/src/assets/img/main1.svg"
        class="homeIMG2" alt="">
    </v-col>

    </v-row>

    <v-row class="background">

    <v-col  cols="4" >

        <img  src="/src/assets/img/main1.svg"
        class="homeIMG" alt="">
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
    }
    @font-face{
        font-family: Rubik;
        src: url(../assets/Rubik-Regular.ttf);
    }

.v-application__wrap {
    height: 10vh !important;
}



::v-deep .v-application__wrap {     min-height: fit-content;   }


.v-application__wrap{
    backface-visibility: hidden;
    // display: flex;
    flex-direction: column;
    // flex: 1 1 auto;
    max-width: 100%;
    /* min-height: 100vh; */
    position: relative;

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
    .page{
        // background-image:src("GR3EN/src/assets/Mask group.svg");
        height:300vh;
    }

    
    .flex{
        display: flex;
    }    
</style>