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
                            <v-divider class="dividers"></v-divider>
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
                            <v-window v-model="tab">
                            <v-window-item
                                v-for="n in 4"
                                :key="n"
                                :value="n"
                            >
                        </v-window-item>
                        </v-window>
                            <v-divider class="dividers"></v-divider>
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
    height:60vh;
    border-radius: 30px;
}

.dividers{
    max-width: 80vw;
    margin: auto;
    color:white;
}
</style>