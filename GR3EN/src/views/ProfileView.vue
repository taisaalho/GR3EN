<template>
    <v-app >
            <v-app-bar color="rgba(0, 115, 98, 0.8)">
                <!-- <v-btn variant="text"><img src="GR3EN\src\assets\Logo 2.svg"></v-btn> -->
                    <v-btn variant="text" class="navBtn" color="white">Atividades</v-btn>
                        <RouterLink to ="/occurrencereport"><v-btn variant="text" class="navBtn" color="white">Ocorrências</v-btn></RouterLink>
                    <v-btn variant="text" class="navBtn" color="white ">Ranking</v-btn>
                    <template v-slot:append>
                    

                        
                        <RouterLink to ="/profile"><v-btn variant="text" color="white" class="navBtn">Perfil</v-btn></RouterLink>
                    </template>

            </v-app-bar>

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
                            <p class="title">title</p>
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
                                        <p>1</p>
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
                                    <h1 class="tabsTitles">Conselho</h1>
                                    
                                    <v-divider class="dividersVer" vertical></v-divider>
                                    <v-btn size="x-large" id="registerButton">Inscrever</v-btn>
                                </v-row>
                                <v-row class="tabWindow">
                                    <h1 class="tabsTitles">Crachás</h1>
                                    
                                    <v-divider class="dividersVer" vertical></v-divider>
                                    <v-btn size="x-large" id="registerButton">Inscrever</v-btn>
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
    export default {
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