<template>
    <v-app>
        <NavBar/>
        
        <v-sheet class="background">
            <v-row>

                
                <h1 class="center title">{{atividade.nomeAtividade}}</h1>
            </v-row>
            <div >

                <v-img class="center" width="300" :src="atividade.imagemAtividade"></v-img>
            </div>

            <v-divider class="top"></v-divider>

            <v-row>
                <v-col class="top leftTitles">
                    <h1  class="title bottom">Nome</h1>
                    <h1  class="title top">Coordenador</h1>
                </v-col>
                <v-divider class="top" vertical></v-divider>
                
                <v-col class="top">
                    <h1  class="bottom2">{{atividade.nomeAtividade}}</h1>
                    <h1>{{atividade.coordenadorAtividade}}</h1>
                    
                </v-col>
                
                <v-col class="align top">
                    <h1  class="title">Data</h1>
                    <h1  class="title">Local</h1>
                    <v-divider class="top" vertical></v-divider>
                </v-col>
                
                <v-divider class="top" vertical></v-divider>
                <v-col class="top">
                    <h1 class="bottom">{{ new Date(atividade.dataHoraAtividade).toLocaleDateString() }}</h1>
                    <h1>{{ atividade.localAtividade }}</h1>
                </v-col>
                <v-divider class="top">{{ atividade.descAtividade }}</v-divider>
                <v-divider  vertical></v-divider>
                
            </v-row>
            
            
            <v-row class="top">
                <v-col col="4">
                    <h1 class="title leftTitles top">Descrição</h1>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col class="8">
                    
                    <h1>{{ atividade.descAtividade }}</h1>
                </v-col>
            </v-row>
            
            
                <v-btn v-if="Coordinator" @click="toggleAtt" class="top btnInscrever">Mudar o estado da ativade</v-btn>


        </v-sheet>
    </v-app>
</template>
    
<script>

    import {User} from '../stores/userStore.js'
    import {Atividade} from '../stores/atividadesStore.js'
    import NavBar from '../components/NavBar.vue'
    import axios from 'axios';    

    export default {
        components: {
            NavBar,
        },
        data:() =>({
            userStore: User(),
            atividadesStore: Atividade(),
            atividade:Object,
            Coordinator:false
            
        }),
        computed: {
            ToggleButtonText(){
                let atividade = this.atividadesStore.getAtividadeByID(this.atividade.idAtividade)
    
                if(atividade.idUser.find(user => user == this.currentUser.idUser)){
                    return 'Remover Inscrição'
                }
                else{
                    return 'Inscrever'
                    
                }
    
            },
            ToggleButtonClass(){
                let atividade = this.atividadesStore.getAtividadeByID(this.atividade.idAtividade)
    
                if(atividade.idUser.find(user => user == this.currentUser.idUser)){
                    return 'red'
                }
                else{
                    return 'success'
    
                }
    
            },

        },
        
        async created () {
            try {

                let id = this.$route.params.id
           
                let res = await axios.get('https://elegant-slug-woolens.cyclic.app/activities?activities=' + id);
                
                this.atividade = res.data[0]

                res = await axios.get('https://elegant-slug-woolens.cyclic.app/users?users=' +  this.atividade.coordenadorAtividade)
                
                let CoordinatorId = this.atividade.coordenadorAtividade

                this.atividade.coordenadorAtividade = res.data[0].primeiroNome + ' ' + res.data[0].ultimoNome
                
                res = await axios.get('https://elegant-slug-woolens.cyclic.app/users/user-profile',{
                    headers:{
                        Authorization:'Bearer '+ localStorage.getItem('Token')
                    }
                })
               
                if(CoordinatorId == res.data._id){
                    this.Coordinator = true
                }

            } catch (error) {
                
            }
            
        },

        methods: {

            async toggleAtt(){
                try {
                    let res = await axios.patch('https://elegant-slug-woolens.cyclic.app/'+ this.$route.params.id +'/change-activity-state')
                } catch (error) {
                    
                }
            },
            
          
        
        },
    };
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
.background{
    background-color:rgba(0, 115, 98, 0.8);
    border-radius: 30px;
    height:110vh;
    width:80vw;
    margin: auto;
    margin-top:10vh;
}
*{
        text-decoration: none;
}


.leftTitles{
    margin-left: 2.5vw;
}

.btnInscrever{
    margin-left: 20vw ;
    margin-right: 5vw ;
}
.title{
    font-family: Norquay;
    font-size: 3em;
    color: white;
    text-shadow: 4px 1px 1px #8D5836 ;
}

.center{
    margin: auto;
    margin-top:5vh;
}

.align{
    text-align: right;
}


.top{
    margin-top:5vh;
}
.bottom{
    margin-bottom:2vh;
}
.bottom2{
    margin-bottom:7vh;
}
</style>