<template>
    <v-app>
        <NavBar/>
        
        <v-sheet class="background">
            <v-row>

                
                <h1 class="center title">{{ocorrencia.nomeOcorrencia}}</h1>
            </v-row>
            <div>

                <img :src="`data:image/webp;jpg;png;jpeg;base64,${ocorrencia.fotoOcorrencia}`" class="imgOcc d-flex justify-center"   >
            </div>

            <v-divider class="top"></v-divider>

            <v-row>
                
                
                <v-col cols="2" class="top">
                    <h1  class=" leftTitles title bottom">Nome</h1>
                </v-col>
                <v-col cols="4" class="top">
                    <h1  class="bottom2">{{ocorrencia.nomeOcorrencia}}</h1>
                </v-col>
                
                
                <v-divider class="top" vertical></v-divider>
                <v-col cols="2" class=" top">
                    <h1  class="title">Data</h1>
                    <h1  class="title">Local</h1>
                    <v-divider class="top" vertical></v-divider>
                </v-col>

                <v-col cols="4" class="top">
                    <h1 class="bottom">{{ ocorrencia.dataOcorrencia }}</h1>
                    <h1>{{ ocorrencia.localOcorrencia }}</h1>
                </v-col>
                <v-divider  vertical></v-divider>
                
            </v-row>
            
            
            <v-row class="top">
                <v-col cols="3">
                    <h1 class="title leftTitles top">Descrição</h1>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="8">
                    
                    <h1 class="descText">{{ ocorrencia.descricaoOcorrencia }}</h1>
                </v-col>
                
                
                
                
                
            </v-row>
            <v-row class="d-flex justify-center  top">
                    <v-btn @click="OcorrenciaStore.ChangeOcorrenciaStatus(this.ocorrencia._id) " v-if="ocorrencia.statusOcorrencia == false" tonal color="green">Aprovar</v-btn>
                    <v-btn @click="this.$router.push('/ocurrences')">Voltar</v-btn>
                
            </v-row>
                <!-- <v-btn to="/ocurrences">Voltar</v-btn> -->
                
                
            </v-sheet>
    </v-app>
</template>

<script>
import { ref } from 'vue'
import {useRouter,useRoute} from 'vue-router'
import { Ocorrencia } from '../../stores/ocorrenciasStore'
import NavBar from '../../components/NavBar.vue'
import axios from 'axios'


export default {
    /* setup () {
        const Route = useRoute()
        const OcorrenciaStore = Ocorrencia()
        const ocorrencia = ref(OcorrenciaStore.getOcorrenciaById(Route.params.id))

        
        

        return {ocorrencia,OcorrenciaStore  }
    },
 */
    components: {
        NavBar,
    },
    data:()=> ({
      OcorrenciaStore : Ocorrencia(),
      ocorrencia : Object,

    }),
    async created () {
        try{
            
            let id = this.$route.params.id
            let res = await axios.get('https://elegant-slug-woolens.cyclic.app/occurrences?occurrences=' + id);
                
            this.ocorrencia = res.data[0]
            this.ocorrencia.dataOcorrencia = this.ocorrencia.dataOcorrencia.substr(0,4) + '/' + this.ocorrencia.dataOcorrencia.substr(5,2) + '/' + this.ocorrencia.dataOcorrencia.substr(8,2) + ' ' + this.ocorrencia.dataOcorrencia.substr(11,5)   
            console.log(this.ocorrencia.dataOcorrencia) 
            
        }catch(error){

        }
    },
}
</script>

<style lang="scss" scoped>


@font-face{
    font-family: Norquay;
    src: url(../../assets/NorquayRegular.otf);
}
@font-face{
    font-family: Rubik;
    src: url(../assets/Rubik-Regular.ttf);
}
.background{
    background-color:rgba(0, 115, 98, 0.8);
    border-radius: 30px;
    min-height:155vh;
    width:80vw;
    margin: auto;
    margin-top:10vh;
}

*{
    font-family: Rubik;
    text-decoration: none;
    color:#f2f2f2;
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

.imgOcc{
    max-width: 30vw;
    margin: auto;
    border-radius: 20px;
}
.descText{
   // inline-size: 50vw;
    overflow-wrap: break-word;
    font-size:1.5vw    
}

</style>