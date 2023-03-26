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
                            <v-tab :value="1" @click="checkAtividade">Atividades</v-tab>
                            <v-tab :value="2" @click="checkOcc">Ocorrências</v-tab>
                            <v-tab :value="3">Info</v-tab>
                            <v-tab :value="4" @click="checkBadges">Conquistas</v-tab>
                            </v-tabs>
                            <v-divider class="dividersHor"></v-divider>
                        </v-row>
                        <v-row>
                            
                                <v-window v-model="tab">
                                    <v-window-item
                                    :key="1"
                                    :value="1">
                                    <div class="scroll">

                                        <v-row v-for="activity in userFeedAt" class="flex" >
                                            <v-divider></v-divider>

                                            <v-col class="leftTitles" col="4">
                                                
                                                <v-img  width="200" :src="activity.imagemAtividade"></v-img>
                                            </v-col>
                                            <v-col class="verBtn" col="2">
                                                <p>{{activity.nomeAtividade}}</p>
                                                <p>{{activity.dataHoraAtividade}}</p>
                                                
                                            </v-col>
                                            
                                                
                                            
                                        </v-row> 
                                    </div>
                                </v-window-item>
                                
                                <v-window-item
                                :key="2"
                                :value="2">
                                    <div class="scroll">

                                        <v-row v-for="occurrence in userFeed" class="flex" >
                                            <v-divider></v-divider>

                                            <v-col class="leftTitles" col="4">
                                                
                                                <v-img  width="200" :src="occurrence.fotoOcorrencia"></v-img>
                                            </v-col>
                                            <v-col class="verBtn" col="2">
                                                <p>{{occurrence.nomeOcorrencia}}</p>
                                                <p>{{occurrence.dataHoraOcorrencia}}</p>
                                                
                                            </v-col>
                                            
                                        </v-row> 
                                    </div>
                                    
                                    
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
                                            <v-text-field label="Email" variant="solo" v-model="emailChange"></v-text-field>
                                            <v-btn class="attBtn" color="warning" size="x-large" @click="User.ChangeUserEmail(this.currentUser.idUser,this.emailChange)">Atualizar</v-btn>
                                        </v-row>
                                        
                                        <v-row>
                                            <v-text-field label="Palavra-Passe" variant="solo" v-model="passwordChange"></v-text-field>
                                            <v-btn class="attBtn" color="warning" size="x-large" @click="User.ChangeUserPassword(this.currentUser.idUser,this.passwordChange)">Atualizar</v-btn>
                                        </v-row>
                                    </div>
                                </v-row>
                                </v-window-item>
                                
                                <v-window-item
                                :key="4"
                                :value="4">
                                <div class="scroll">
                                    
                                        <v-row v-for="badge in badgeList">
                                            <v-divider></v-divider>
                                            <v-col  class="leftTitles" col="4">
                                                <v-img  width="200" :src="this.Badge.getByID(badge).imagemBadge"></v-img>
                                            </v-col>
                                            <v-col>
                                                
                                                <div class="verBtn" col="2">
                                                    <p>{{this.Badge.getByID(badge).nomeBadge}}</p>
                                                    <p>{{this.Badge.getByID(badge).descBadge}}</p>
                                                </div>
                                            </v-col>
                                        </v-row> 
                                </div>
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
    import {Atividade} from '../stores/atividadesStore.js'
    import {Ocorrencia} from '../stores/ocorrenciasStore.js'
    import {Badge} from '../stores/badgesStore.js'
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
                atividadesStore : Atividade(),
                ocorrenciasStore : Ocorrencia(),
                Badge : Badge(),
                userFeed:[],
                userFeedAt:[],
                badgeList:[],
                
            }   
        },
        computed: {
            
            
        },
        created () {
            this.badgesStore = this.Badge.getBadges
        },
        methods: {
            
            checkBadges(){
                
                this.badgeList = this.User.getByID(this.currentUser.idUser).idBadge
                
                if ((this.User.getByID(this.currentUser.idUser).idAtividade).length == 1){
                    if ((this.User.getByID(this.currentUser.idUser).idBadge.find(badge => badge == 3)) == undefined){
                         this.User.attBadges(this.currentUser.idUser, 3)
                         badgeList = this.User.getByID(this.currentUser.idUser).idBadge
                         console.log(badgeList) 
                    }
                }   
                if (((this.User.getByID(this.currentUser.idUser).idAtividade).length) == 5){
                    if ((this.User.getByID(this.currentUser.idUser).idBadge.find(badge => badge == 2)) == undefined){
                         this.User.attBadges(this.currentUser.idUser, 2)
                         badgeList = this.User.getByID(this.currentUser.idUser).idBadge
                         console.log(badgeList) 
                    }
                }   
                if (((this.User.getByID(this.currentUser.idUser).idOcorrencia).length) == 5){
                    if ((this.User.getByID(this.currentUser.idUser).idBadge.find(badge => badge == 0)) == undefined){
                         this.User.attBadges(this.currentUser.idUser, 0)
                         badgeList = this.User.getByID(this.currentUser.idUser).idBadge
                         console.log(badgeList) 
                    }
                }   
                        
                        
                if(this.User.getByID(this.currentUser.idUser).ranking >=1000){
                    if ((this.User.getByID(this.currentUser.idUser).idBadge.find(badge => badge == 1)) == undefined){
                         this.User.attBadges(this.currentUser.idUser, 1)
                         badgeList = this.User.getByID(this.currentUser.idUser).idBadge
                         console.log(badgeList) 
                    }
                        
                        
                }   
            },

            badgeOcc(){
                
                if (length((this.User.getByID(this.currentUser).idOcorrencia)) == 5){
                    (this.User.getByID(this.currentUser)).idBadge.push(1)
                    this.currentUser.idBadge.push(1)
                    
                    
                }
            },
            
            badgeAtt(n){
                let x
                if (length((this.User.getByID(this.currentUser).idAtividade)) == n){
                    if (n == 1){
                        x=3
                    }else if (n == 5){
                        x=2
                    }
                    
                    (this.User.getByID(this.currentUser)).idBadge.push(x)
                    this.currentUser.idBadge.push(x)
                }
            },
            
            badgePoints(){
                if(this.User.getByID(this.currentUser).ranking ==1000){
                    (this.User.getByID(this.currentUser)).idBadge.push(1)
                    this.currentUser.idBadge.push(1)
                    
                }

            }



            ,
            checkOcc() {
                this.userFeed = []
                console.log(this.userFeed); 
                let occurrenceArray = this.ocorrenciasStore.getOcorrencias
                
                for (let occurrence of occurrenceArray) {
                    if(this.currentUser.idUser == occurrence.idUser) this.userFeed.push(occurrence)
                }
            },

            checkAtividade(){
                this.userFeedAt = []
                let activityArray = this.atividadesStore.getAtividade

                for (let activity of activityArray){
                    if(this.currentUser.idUser == activity.idUser) this.userFeedAt.push(activity)
                }
            },
            



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

.subTitle{
    margin:0;
    
}

.scroll{
    overflow: hidden;
    overflow-y: scroll;
    min-width: 80vw;
    max-height: 50vh;
    margin-top: 10vh;
    padding-left:5vw ;
    padding-right:5vw ;
}

.flex{
    display: flex;
}

.leftTitles{
    margin-left: 10vw;
    margin-right: 0vw;
    
}
.verBtn{
    margin-top: 5vh ;
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