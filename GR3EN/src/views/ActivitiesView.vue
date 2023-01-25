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
                
        
        <div class="carousel">
        <v-carousel class="carousel">
            <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
            ></v-carousel-item>
            
            <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
            cover
            ></v-carousel-item>
            
            <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover
            ></v-carousel-item>
        </v-carousel>
        </div>
        <v-sheet class="background">
            <v-row class="search">
                <v-text-field label="Pesquisa" variant="solo"></v-text-field>

                <v-select
                id="coordSelect"
                label="Coordenador"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                variant="solo"
                ></v-select>
                <v-select
                label="Categoria"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                variant="solo"
                ></v-select>

                <v-btn id="searchBtn" size="x-large" color="warning">Procurar</v-btn>
            </v-row>

            

            <v-row class="listAtivity" v-for="atividade in atividadesStore.getAtividade">
                <v-col class="leftTitles" col="2">
                    <h1>Atividade Disponível</h1>
                    <v-img width="200" :src="atividade.imagemAtividade"></v-img>
                </v-col>
                
                
                <v-col  col="8">
                    
                    <h1>{{atividade.nomeAtividade}}</h1>
                    <h1>{{atividade.dataHoraAtividade}}</h1>
                    <h1>{{atividade.coordenadorAtividade}}</h1>
                    <h1>{{atividade.localAtividade}}</h1>

                </v-col>

                <v-col>
                    <RouterLink :to="{name: 'activity', params: {id:atividade.idAtividade}}">
                        
                        <v-btn class="verBtn">
                            VER
                        </v-btn>
                    </RouterLink>
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
        })
    };
</script>

<style lang="scss" scoped>
.background{
    background-color:rgba(0, 115, 98, 0.8);
    border-radius: 30px;
    height:100vh;
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
    margin-top: 10vh;
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