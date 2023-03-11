<template>
    <v-app >
        
            
            <NavBar/>
            
            <v-main>
                <v-container>

                    <v-sheet class="background" color="rgba(0, 115, 98, 0.8)">
                        <v-row>

                            <v-avatar id="pfp" image="..\src\assets\img\Elise.svg" size="300"></v-avatar>
                        </v-row>
                        <v-row>
                            <h1 class="userName">{{currentUser.primeiroNome}} {{currentUser.ultimoNome}}</h1>
                        </v-row>
                        <v-row>
                            <v-divider class="dividersHor"></v-divider>
                            <v-tabs class="tabs"
                            v-model="tab"
                            color="white"
                            align-tabs="center"
                            >
                            <v-tab :value="1">Atividades</v-tab>
                            <v-tab :value="2">Ocorrências</v-tab>
                            <v-tab :value="3">Info</v-tab>
                            <v-tab :value="4">Conquistas</v-tab>
                            </v-tabs>
                            <v-divider class="dividersHor"></v-divider>
                        </v-row>
                        <v-row>
                            
                                <v-window v-model="tab">
                                    <v-window-item
                                    :key="1"
                                    :value="1">

                                       <!--  <div class="scroll">
                                            <v-row class="listAtivity" v-for="atividade in this.atividadesStore.getAtividade">
                                                
                                                <div v-if="atividade.statusAtividade == false && this.idUser in atividade.idUser">

                                                    <v-divider></v-divider>
                                                    <v-col class="leftTitles" col="2">
                                                        <h3>Atividade Participada</h3>
                                                        <v-img width="200" :src="atividade.imagemAtividade"></v-img>
                                                    </v-col>
                                                    <v-col class="verBtn" col="8">
                                                        
                                                        <h3>{{atividade.nomeAtividade}}</h3>
                                                        <h3>{{atividade.dataHoraAtividade}}</h3>
                                                        <h3>{{atividade.coordenadorAtividade}}</h3>
                                                        <h3>{{atividade.localAtividade}}</h3>
                                                        
                                                    </v-col>
                                                    <v-col> 
                                                        <RouterLink :to="{name: 'activity', params: {id:atividade.idAtividade}}">
                                                            
                                                            <v-btn size="x-large" color="warning" class="verBtn">
                                                                VER
                                                            </v-btn>
                                                        </RouterLink>
                                                    </v-col>
                                                </div>
                                            </v-row>
                                        </div> -->

                                    </v-window-item>
                                
                                <v-window-item
                                :key="2"
                                :value="2">
                                <p>2</p>
                                </v-window-item>
                    
                                <v-window-item
                                :key="3"
                                :value="3">
                                <v-row class="tabWindow">
                                    <h1 class="tabsTitles">Questionário</h1>
                                    
                                    <v-divider class="dividersVer" vertical></v-divider>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScWbU2S4SZAoyH25BrU0SXLisDfWPFnr-IDyP7dH5FB3_KBBA/viewform?usp=sf_link"><v-btn size="x-large"  id="registerButton">Fazer</v-btn></a>
                                </v-row>
                                <v-row class="tabWindow">
                                    <h1 class="tabsTitles">Crachás</h1>
                                    
                                    <v-divider class="dividersVer" vertical></v-divider>
                                </v-row>
                                <v-row class="tabWindow">
                                    
                                    

                                        <h1 id="infoAtt" class="tabsTitles">Info</h1>
                                    
                                    <v-divider class="dividersVer" vertical></v-divider>
                                    
                                    
                                    <div class="changeInfo">
                                        
                                        <v-row>
                                            <v-text-field label="Estabelecimento de Ensino" variant="solo"></v-text-field>
                                            <v-btn color="warning" class="attBtn" size="x-large">Atualizar</v-btn>
                                        </v-row>
                                        
                                        <v-row>
                                            <v-text-field label="Email" variant="solo"></v-text-field>
                                            <v-btn class="attBtn" color="warning" size="x-large">Atualizar</v-btn>
                                        </v-row>
                                        
                                        <v-row>
                                            <v-text-field label="Palavra-Passe" variant="solo"></v-text-field>
                                            <v-btn class="attBtn" color="warning" size="x-large">Atualizar</v-btn>
                                        </v-row>
                                    </div>
                                </v-row>
                                </v-window-item>
                                
                                <v-window-item
                                :key="4"
                                :value="4">
                                <p>4</p>
                                </v-window-item>
                            </v-window>
                        </v-row>
                    </v-sheet>
                </v-container>
            </v-main>
    </v-app>
            
</template>

<script>
    import {User} from '../stores/userStore.js'
    import NavBar from '../components/NavBar.vue'
    export default {
        
        components: {
            NavBar,
        },
        data() {
            return {
                User: User(),
                currentUser: JSON.parse(localStorage.getItem('currentUser')),
                tab:null,

            }   
        },
        created () {
            
            console.log(this.currentUser)
        },
    }
</script>

<style lang="scss" scoped>

.scroll{
    overflow: hidden;
    overflow-y: scroll;
    max-height: 80vh;
    max-width: 200vh;
    margin-top: 10vh;
    margin-bottom: 10vh;
}


@font-face{
        font-family: Norquay;
        src: url(../assets/NorquayRegular.otf);
}
@font-face{
        font-family: Rubik;
        src: url(../assets/Rubik-Regular.ttf);
}

#pfp{
    margin:auto;
    top: -10vh
}
#infoAtt{
    margin-top:5vh;
}

*{
        text-decoration: none;
}

#registerButton{
    font-family:Norquay;
    margin-left: 5vw;
    background-color:#FF6500;
    color:white;
    font-size: 1.5rem;
}
.attBtn{
    border-radius: 15px;
    margin-left:3vw;
}
.changeInfo{
    margin-left:5vw;
    min-width:30vw;
}
.tabWindow{
    margin:5vw;
    margin-left:10vw
}
.tabsTitles{
    font-family:Norquay;
    padding-top: 2vh;
    color:white;
    text-shadow: 3px 1px 1px #8D5836;
    font-size: 3rem;
}
.title{
    margin:auto;
    color: rgba(255,255,255,0.8);
    font-size:2rem;

}

.tabs{
    margin: auto;
}

.userName{
    margin:auto;
    font-family: Norquay;
    font-size:5rem;
    color:white;
    text-shadow: 5px 1px 1px #8D5836 ;

}

.background{
    margin: auto;
    margin-top:10vh;
    width:80vw;
    height:150vh;
    border-radius: 30px;
}

.dividersHor{
    max-width: 80vw;
    margin: auto;
}

.dividersVer{
    margin-left: 2vw;
}


</style>