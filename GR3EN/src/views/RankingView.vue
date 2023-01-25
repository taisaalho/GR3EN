<template>
    <v-app >
            <v-app-bar color="rgba(0, 115, 98, 0.8)">
                <!-- <v-btn variant="text"><img src="GR3EN\src\assets\Logo 2.svg"></v-btn> -->
                    <v-btn variant="text" class="navBtn" color="white">Atividades</v-btn>
                        <RouterLink to ="/occurrencereport"><v-btn variant="text" class="navBtn" color="white">Ocorrências</v-btn></RouterLink>
                    <v-btn variant="text" class="navBtn" color="white ">Ranking</v-btn>
                    <template v-if="!!currentUser" v-slot:append>
                    

                        
                        <RouterLink to ="/profile"><v-btn variant="text" color="white" class="navBtn">Perfil</v-btn></RouterLink>
                    </template>
                
                    <template v-else v-slot:append>
                    

                        
                        <RouterLink to ="/signin"><v-btn variant="text" color="white" class="navBtn">Sign In</v-btn></RouterLink>
                    </template>
                
            </v-app-bar>

            
            <v-sheet class="background" color="rgba(0, 115, 98, 0.8)">
                
                <v-row class="title">
                    <h1 class="title">Top 3</h1>
                    
                </v-row>
                
                <div class="flex">
                    
                    
                    <v-col col="4">
                        <p id="number2" class="center">João Pais</p>

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
                        id="podium2"
                        src="..\src\assets\img\podium2.svg"
                        ></v-img>
                    </v-col>
                    
                    
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

            
    </v-app>
</template>

<script>

    export default {
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
    margin-top:10vh ;

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
.center{
    margin: auto;
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