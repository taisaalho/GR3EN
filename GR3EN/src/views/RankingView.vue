<template>
<v-app >

            <NavBar/>

            
            <v-sheet class="background" color="rgba(0, 115, 98, 0.8)">
                
        
                <v-row class="title" >
                    <h1 class="title">Top 3 do momento</h1>
                </v-row>
                
                <v-row id="podium" >

                  
                <v-col col="4">
                    2º
                </v-col>

                <v-col col="4">
                    1º
                </v-col>


                <v-col col="4">
                    3º
                </v-col>
                </v-row>

                 <v-row>


    <v-col col="4" class="center">
        <p id="number2" class="">{{ Rankings[0].users[1].primeiroNome }} || {{ Rankings[0].users[1].pontos }} pts</p>
        
    </v-col>
    
    
    <v-col col="4">
        <p id="number1" class="center"> {{ Rankings[0].users[0].primeiroNome }} || {{ Rankings[0].users[0].pontos }}</p>
    </v-col>
    
    <v-col col="4">

        <p id="number3" class="center">{{ Rankings[0].users[2].primeiroNome }} || {{ Rankings[0].users[2].pontos }}</p>
        
    </v-col>    


                     

                 </v-row>   
                    
                    
                    
                    
               
              

                <v-container>
                    


                    <!-- CURRENT YEAR -->
                    <v-row v-for="year in Rankings">
                            <v-col col ="4">
                                <h1 class="title">Ranking  <br> {{ year.year[0] }} / {{ year.year[1] }}   </h1>
                            </v-col>
                               
                            <v-col col="8">
                                
                                <v-row v-for="user in year.users" >
                                    <v-col col="12">
                                        <h3>    </h3>
                                        {{ user.primeiroNome }} {{ user.ultimoNome }} - {{ user.pontos }} pts
                                    
                                    </v-col>
                                </v-row>
                            </v-col>
                      
                        
                          
                    </v-row>
                    
                    <!-- PRIOR YEARS -->
                  

                    
                </v-container>  

                
            </v-sheet>
            
    </v-app> 
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    import {User} from '../stores/userStore'
    import {Ranking} from '../stores/rankingStore'
    import axios from 'axios'
    
    export default {
        components:{
            NavBar
        },
         data(){
            return{
                Rankings:Array

            }
        },
        async beforeMount(){
            try {

                let res = await axios.get('https://elegant-slug-woolens.cyclic.app/rankings')
                
                this.Rankings = res.data
                
            } catch (error) {
                
            }
        }
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
   
    
}

#podium2{
    
    
}

#podium3{
   
    
}

.background{
    display: flex;
    flex-direction: column;
    width:80vw;
    
    margin:auto;
    margin-top: 100px;
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