<script>
   
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
export default {
    data:() =>({
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',]
    }),
    components:{
    NavBar,
    Footer,
    }
};

</script>
<template >
    <div class="page pa-10 ma-6">

        <!-- NavBar -->
        <NavBar />

        <!-- Carousel -->
        <div class="carousel">
            <v-carousel class="carousel">
                <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
                ></v-carousel-item>
                
                <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                cover
                ></v-carousel-item>
            
                <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                cover
                ></v-carousel-item>
            </v-carousel>
        </div>
            
            
        <v-row class="background">
            
            <v-col  cols="4" >

                <img  src="https://images.theoutbound.com/uploads/1409240279880/pzozm86m91ux47vi/03460ef5b7c07b97816071b2194d0b42?w=900&fit=crop&dpr=2"
                class="homeIMG" alt="">
            </v-col>
            <v-col cols="8"  class="">

                <div class="">
                    
                    <h1 class="title">Atividades</h1>
                    <h1 class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h1>
                </div>
            </v-col>
        
        </v-row>

        <v-row class="background">
            
            <v-col cols="8"  class="">
                
                <div class="">
                    
                    <h1 class="title">Atividades</h1>
                    <h1 class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h1>
                </div>
            </v-col>
            <v-col  cols="4" >

                <img  src="https://images.theoutbound.com/uploads/1409240279880/pzozm86m91ux47vi/03460ef5b7c07b97816071b2194d0b42?w=900&fit=crop&dpr=2"
                class="homeIMG2" alt="">
            </v-col>
            
        </v-row>

        <v-row class="background">
            
            <v-col  cols="4" >

                <img  src="https://images.theoutbound.com/uploads/1409240279880/pzozm86m91ux47vi/03460ef5b7c07b97816071b2194d0b42?w=900&fit=crop&dpr=2"
                class="homeIMG" alt="">
            </v-col>
            <v-col cols="8"  class="">

                <div class="">
                    
                    <h1 class="title">Junta-te ao conselho Eco-Escolas!</h1>
                    <h1 class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h1>
                </div>
                <v-btn size="x-large"  class="buttons" id="mainPageButton">Inscrever</v-btn>
            </v-col>
        
        </v-row>
        <Footer />
            
            

    </div>

        
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
    
    .carousel{
        width: 70vw; 
        border-radius: 30px;
        margin: auto;
        margin-top: 15vh;
        margin-bottom: 10vh;
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
        height:60vh;
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
        font-size: 4em;
        color: white;
        text-shadow: 5px 1px 1px #8D5836 ;   /* text shadow?????? */
        
    }

    .description{
        margin-right:3vw;
        margin-LEFT:3vw;
        color: white;
        font-family: Rubik;
        font-size: 2rem;
    }
    .homeIMG{
        width:30vw;
        border-radius:30px;
        margin-left:3vw;
        margin-right:3vw;
    }
    
    .homeIMG2{
        width:30vw;
        border-radius:30px;
        
        margin-right:3vw;
    }
    /* .page{
        background-image:url(https://images.theoutbound.com/uploads/1409240279880/pzozm86m91ux47vi/03460ef5b7c07b97816071b2194d0b42?w=900&fit=crop&dpr=2);
        height:300vh;
    } */

    
    .flex{
        display: flex;
    }    
</style>