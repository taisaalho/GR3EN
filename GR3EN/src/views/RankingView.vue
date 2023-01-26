<template>
<!--     <v-app >
            <NavBar/>

            
            <v-sheet class="background" color="rgba(0, 115, 98, 0.8)">
                
                <v-row class="title">
                    <h1 class="title">Top 3</h1>
                    
                </v-row>
                
                <div class="flex">
                    
                    
                    <v-col col="4" class="center">
                        <p id="number2" class="">João Pais</p>
                        
                        <v-img
                        id="podium2"
                        src="..\src\assets\img\podium2.svg"
                        ></v-img>
                    
                    
                    </v-col>
                    
                    
                    <v-col col="4">
                        <p id="number1" class="center">João Pais</p>
                    </v-col>
                    
                    <v-col col="4">

                        <p id="number3" class="center">João Pais</p>
                        
                    </v-col>    
                    
                    
                    
                    
                </div>
              <v-row id="podium" >

                    
                    <v-col col="4">
                        <v-img
                        id="podium1"
                        src="..\src\assets\img\podium1.svg"
                        ></v-img>
                    
                    </v-col>
                    

                    <v-col col="4">
                        <v-img
                        id="podium3"
                        src="..\src\assets\img\podium3.svg"
                        ></v-img>
                    </v-col>
                </v-row>
                
                
            

            </v-sheet>

            
    </v-app> -->
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    export default {
        components: {
            NavBar,
        },
        data() {
            
        },
    }
</script>

<style lang="scss" scoped>
@font-face{
    font-family: Norquay;
    src: url(../assets/NorquayRegular.otf);
}
@font-face{
    font-family: Rubik;
    src: url(../assets/Rubik-Regular.ttf);
}

.flex{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:10vh ;

}

*{
        text-decoration: none;
}


.center{
    display: flex;
    justify-content : center;
    align-items:center;
    
}

#podium{
    margin-left: 10vw;
}

#podium1{
    max-width: 50%;
    margin-right: 20vw;
}

#podium2{
    max-width: 50%;
    
}

#podium3{
    max-width: 50%;
    
}

.background{
    width:80vw;
    height:60vh;
    margin:auto;
    border-radius: 30px;
}

.title{
        padding-top:5vh;
        margin:auto;
        
        font-family: Norquay;
        font-size: 3rem;
        color: white;
        text-shadow: 4px 1px 1px #8D5836 ;   /* text shadow?????? */
        
}    
</style>