<template>
    <v-app>
        <NavBar/>
        
        <v-sheet class="background">
            <v-col>
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
            <v-row v-if="Coordinator">

                
                    <v-btn v-if="atividade.statusAtividade" color="red" @click="toggleAtt" class="top btnInscrever">Em Andamento</v-btn>
                    <v-btn v-if="!atividade.statusAtividade" color="success" @click="toggleAtt" class="top btnInscrever">Encerrar</v-btn>
             
            </v-row>
            <v-row>
                <v-table >
                    <thead>
                        <tr>
                            <th>
                                Lista de alunos que não executaram a atividade
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in atividade.participantesAtividadeNaoExecutado"><td>{{user.primeiroNome + ' ' + user.ultimoNome}} <v-btn v-if="Coordinator"  @click="changeUserState(user,false)" rounded flat>✔️</v-btn></td></tr>
                    </tbody>
                </v-table>

                <v-table >
                    <thead>
                        <tr>
                            <th>
                                Lista de alunos que executaram a atividade
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in atividade.participantesAtividadeExecutado"><td>{{user.primeiroNome + ' ' + user.ultimoNome}} <v-btn v-if="Coordinator" @click="changeUserState(user,true)" rounded flat>❌</v-btn></td></tr>
                    </tbody>
                </v-table>
                
                
                
            </v-row>
            <v-row>
                <v-btn v-if="!enrolledState" @click="Enroll">Enroll</v-btn>
                <v-btn v-if="enrolledState" @click="unEnroll">UnEnroll</v-btn>
            </v-row>
        </v-col>

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
            Coordinator:false,
            AtividadeState:false,
            enrolledState:false
                
        }),
        
        
        async created () {
            try {

                let id = this.$route.params.id
           
                let res = await axios.get('https://elegant-slug-woolens.cyclic.app/activities?activities=' + id);
                
                this.atividade = res.data[0]

                res = await axios.get('https://elegant-slug-woolens.cyclic.app/users?users=' +  this.atividade.coordenadorAtividade)
                
                let CoordinatorId = this.atividade.coordenadorAtividade

                this.atividade.coordenadorAtividade = res.data[0].primeiroNome + ' ' + res.data[0].ultimoNome

               
                if(this.atividade.participantesAtividadeNaoExecutado[0]){

                    res = await axios.get('https://elegant-slug-woolens.cyclic.app/users?users=' +  this.atividade.participantesAtividadeNaoExecutado.join())
                    
                    for (const i in this.atividade.participantesAtividadeNaoExecutado) {
                        this.atividade.participantesAtividadeNaoExecutado[i] = res.data[i]
                    }                
                
                }
                
                console.log(this.atividade.participantesAtividadeExecutado[0] ? true : false)
                
                if(this.atividade.participantesAtividadeExecutado[0]){

                    res = await axios.get('https://elegant-slug-woolens.cyclic.app/users?users=' +  this.atividade.participantesAtividadeExecutado.join())
    
                    for (const i in this.atividade.participantesAtividadeExecutado) {
                        this.atividade.participantesAtividadeExecutado[i] = res.data[i]
                    }                

                }

                
                res = await axios.get('https://elegant-slug-woolens.cyclic.app/users/user-profile',{
                    headers:{
                        Authorization:'Bearer '+ localStorage.getItem('Token')
                    }
                })
                
                if(this.atividade.participantesAtividadeExecutado.some(user => user._id == res.data._id) || this.atividade.participantesAtividadeNaoExecutado.some(user => user._id == res.data._id)){
                    this.enrolledState = true
                }

                if(CoordinatorId == res.data._id){
                    this.Coordinator = true
                }
                
                

            } catch (error) {
                
            }
            
        },

        methods: {

            async toggleAtt(){

                console.log(this.$route.params.id)

                try {

                    let res = await axios.patch('https://elegant-slug-woolens.cyclic.app/activities/'+ this.$route.params.id +'/change-activity-state',null,{
                    headers:{
                        Authorization:'Bearer ' + localStorage.getItem('Token')
                    }
                    })


                    this.atividade.statusAtividade = !this.atividade.statusAtividade 


                } catch (error) {
                    
                }
            },
            async changeUserState(user,change){
                try {
                    
                    const activityid = this.$route.params.id
                    
                    const userid = user._id
                    
                    let res = await axios.patch(`https://elegant-slug-woolens.cyclic.app/activities/${activityid}/users/${userid}/change-user-state`,null,{headers:{Authorization:'Bearer '+localStorage.getItem('Token')}})

                    if(change){
                        this.atividade.participantesAtividadeExecutado = this.atividade.participantesAtividadeExecutado.filter(u => u._id != userid)
                        
                        this.atividade.participantesAtividadeNaoExecutado.push(user)
                        
                    }else{
                        this.atividade.participantesAtividadeNaoExecutado = this.atividade.participantesAtividadeNaoExecutado.filter(u => u._id != userid)
                        
                        this.atividade.participantesAtividadeExecutado.push(user)
                        
                    }
                } catch (error) {
                    
                }
                
                
            },
            async Enroll(){
                try {

                    const activityid = this.$route.params.id
                    
                    let res = await axios.post(`https://elegant-slug-woolens.cyclic.app/activities/${activityid}/enroll`,null,{headers:{Authorization:'Bearer '+localStorage.getItem('Token')}})
                    
                    location.reload()

                } catch (error) {
                    
                }
            },
            async unEnroll(){
                
                try {
                    const activityid = this.$route.params.id
                    
                    let res = await axios.delete(`https://elegant-slug-woolens.cyclic.app/activities/${activityid}/enroll`,{headers:{Authorization:'Bearer '+localStorage.getItem('Token')}})
                    
                    location.reload()

                } catch (error) {
                    
                }
            }
            
            
          
        
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