<template>
    <v-app>
        <NavBar />
        <v-main>
            <v-container>
                
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
        <v-sheet class="background">
                <div class="scroll">
                    <v-row class="listAtivity" v-for="atividade in activities">

                        <div v-if="!atividade.statusAtividade"> 

                            <v-divider></v-divider>
                            <v-col class="leftTitles" col="2">
                                <h3>Atividade Disponível</h3>
                                <v-img width="200" :src="atividade.imagemAtividade"></v-img>
                            </v-col>
                            <v-col class="verBtn" col="8">
                                
                                <h3>Atividade: {{atividade.nomeAtividade}}</h3>
                                <h3>Data: {{new Date(atividade.dataHoraAtividade).toLocaleDateString()}}</h3>
                                <h3>Coordenador: {{atividade.coordenadorAtividade}}</h3>
                                <h3>Local: {{atividade.localAtividade}}</h3>
                                
                            </v-col>
                            <v-col> 
                                <RouterLink :to="{name: 'activity', params: {id:atividade._id}}">
                                    
                                    <v-btn size="x-large" color="warning" class="verBtn">
                                        VER
                                    </v-btn>
                                </RouterLink>
                            </v-col>
                        </div>
                    </v-row>
                </div>
        </v-sheet>
        
    </v-container>
        </v-main>
    </v-app>
</template>

<script>
import {User} from '../stores/userStore.js'
import {Atividade} from '../stores/atividadesStore.js'
import NavBar from '../components/NavBar.vue'
import axios from 'axios'

export default {
    components: { NavBar },
        data:() =>({
            userStore: User(),
            atividadesStore: Atividade(),
            zero: 0,
            activities:Array,
            coordenadores:Array
        }),
        methods:{
             GetUserName: async (id)=> {
                

            }
        },
        async created() {
            try {

                let res = await axios.get('https://elegant-slug-woolens.cyclic.app/activities')
    
                this.activities = res.data
                
                let UsersIdStr = ''

                this.activities.forEach(async activity => {

                    UsersIdStr = UsersIdStr + activity.coordenadorAtividade
                    
                    UsersIdStr = UsersIdStr + ','
                    
                } )

                UsersIdStr = UsersIdStr.slice(0, UsersIdStr.length - 1)
                
                res = await axios.get('https://elegant-slug-woolens.cyclic.app/users?users=' +  UsersIdStr)
                
                this.coordenadores = res.data

                this.activities.forEach(activity => {
                    const coordenador = this.coordenadores.find(coordenador => coordenador._id == activity.coordenadorAtividade)
                    activity.coordenadorAtividade = coordenador.primeiroNome + ' ' + coordenador.ultimoNome
                })           

            } catch (error) {
                      
            }
            
        }
    }

</script>

<style lang="scss" scoped>

.v-main{
    background-image: url('/src/assets/img/Mask group.svg') !important;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: auto 400% !important;
    height: 174vh !important;
    width: 100vw !important;
    // background-attachment: fixed !important;
}

*{
    text-decoration: none;
}


.scroll{
    overflow: hidden;
    overflow-y: scroll;
    max-height: 80vh;
    max-width: 200vh;
    margin-top: 10vh;
    margin-bottom: 10vh;
}

.scroll::-webkit-scrollbar{
    display: none;
}

.background{
    background-color:rgba(0, 115, 98, 0.8);
    border-radius: 30px;
    height:80vh;
    width:80vw;
    margin: auto;
}


.leftTitles{
    margin-left: 10vw;
}
.verBtn{
    margin-top: 5vh ;
}

.listAtivity{
    margin-bottom:10vh ;
}

#searchBtn{
    margin-left: 5vw;
}

.search{
    margin: auto;
    padding-top: 5vh;
    margin-bottom: 10vh;
    max-width: 50vw;
}

.carousel{
    width: 70vw; 
    border-radius: 30px;
    margin: auto;
    margin-top: 5vh;
    margin-bottom: 5vh;
    
}
</style>