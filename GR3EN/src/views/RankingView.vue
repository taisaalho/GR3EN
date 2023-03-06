<template>
<v-app >

            <NavBar/>

            
            <v-sheet class="background" color="rgba(0, 115, 98, 0.8)">
                
                <v-row class="title">
                    <h1 class="title">Top 3</h1>
                </v-row>
                
             
                 <v-row>
                     <v-col col="4" class="center">
                         <p id="number2" class="">{{TopPresent[1].primeiroNome}} || {{TopPresent[1].ranking}} pts</p>
                         
                     </v-col>
                     
                     
                     <v-col col="4">
                         <p id="number1" class="center">{{TopPresent[0].primeiroNome}} || {{TopPresent[0].ranking}} pts</p>
                     </v-col>
                     
                     <v-col col="4">
    
                         <p id="number3" class="center">{{TopPresent[2].primeiroNome}} || {{TopPresent[2].ranking}} pts</p>
                         
                     </v-col>    
                     

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

                <v-container>
                    


                    <!-- CURRENT YEAR -->
                    <v-row >
                            <v-col col ="4">
                                <h1 class="title">Ranking  <br> {{ new Date().getFullYear()-1 }} / {{ new Date().getFullYear() }} </h1>
                            </v-col>

                            <v-col col="8">

                                <v-row v-for="user,i in TopPresent">
                                    <v-col col="12">
                                        
                                        {{ i + 1 + 'º' }} {{ user.primeiroNome }} {{ user.ranking }} pts
                                        
                                    </v-col>
                                </v-row>
                            </v-col>
                      
                        
                          
                    </v-row>
                    
                    <!-- PRIOR YEARS -->
                    <v-row v-for="Top in PriorYears">
                        <v-col col ="4">
                            <h1 class="title">Ranking  <br> {{ Top.year - 1 }} / {{ Top.year }} </h1>
                        </v-col>

                        <v-col col="8">

                            <v-row v-for="user,i in Top.users">
                                <v-col col="12">    
                                    
                                    {{ i + 1 + 'º' }} {{ userStore.getByID(user.idUser).primeiroNome }} {{ user.ranking }} pts
                                    
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    

                     <!-- QUADRO DE HONRA-->
                    <v-row>
                        <v-col col ="4">
                            <h1 class="title">Quadro de honra</h1>
                        </v-col>
                        <v-col col="8">
                            <v-row v-for="top in PriorYears">

                            <br> 
                            {{  userStore.getByID(top.users[0].idUser).primeiroNome + ' ' + userStore.getByID(top.users[0].idUser).ultimoNome }}
                            <br>
                            {{ top.users[0].ranking }} pts
                            <br>
                            {{ top.year-1 }} / {{ top.year }}
                             


                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>  

            </v-sheet>
            
    </v-app> 
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    import {User} from '../stores/userStore'
    import {Ranking} from '../stores/rankingStore'
    import { reactive, toRefs } from 'vue'
    
    export default {
        components:{
            NavBar
        },
        setup () {
            const userStore = User()
            const rankingStore = Ranking()

           


            const UsersLists = reactive({
                AllUsers: userStore.getUsers,
                TopPresent: userStore.getTop10Present,
                PriorYears: rankingStore.getTopRankedPlayersAllYears
            })

           

            const Buttons = reactive({
                SeeMore: false
            })
        
            return {
                userStore,
                ...toRefs(UsersLists),
                ...toRefs(Buttons),
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