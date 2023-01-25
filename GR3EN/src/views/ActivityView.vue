<template>
    <v-app>
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
                    <h1  class="bottom">{{atividade.nomeAtividade}}</h1>
                    <h1>{{atividade.coordenadorAtividade}}</h1>
                    
                </v-col>
                
                <v-col class="align top">
                    <h1  class="title">Data</h1>
                    <h1  class="title">Local</h1>
                    <v-divider class="top" vertical></v-divider>
                </v-col>
                
                <v-divider class="top" vertical></v-divider>
                <v-col class="top">
                    <h1 class="bottom">{{ atividade.dataHoraAtividade }}</h1>
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

        </v-sheet>
    </v-app>
</template>

<script>
    import {User} from '../stores/userStore.js'
    import {Atividade} from '../stores/atividadesStore.js'
    export default {
        data:() =>({
            userStore: User(),
            atividadesStore: Atividade(),
            atividade:"",

        }),

        created () {
            console.log(this.$route.params.id); 
            this.atividade = this.atividadesStore.getAtividadeByID(this.$route.params.id);
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
    height:100vh;
    width:80vw;
    margin: auto;
    margin-top:10vh;
}
.leftTitles{
    margin-left: 2.5vw;
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
</style>