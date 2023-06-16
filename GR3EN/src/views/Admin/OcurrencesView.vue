<template>
    <div>
        <v-container>
                <v-row gutters>
                    <v-col
                    v-for="ocorrencia in this.asll"
                    cols="12"
                    sm="4">
                    
                    <v-card v-if="!ocorrencia.statusOcorrencia"  :title="ocorrencia.nomeOcorrencia" 
                    variant="tonal">
        
                    <v-card-subtitle>
                        {{new Date(ocorrencia.dataHoraOcorrencia).toLocaleString()}}
                        <br>
                        Categoria: {{ocorrencia.categoriaOcorrencia}}
                        
                    </v-card-subtitle>
                    <v-card-text>
                        <h3>Foto</h3>
                        <!-- <v-img :src="ocorrencia.fotoOcorrencia" -->
                        <img :src="`data:image/webp;jpg;png;jpeg;base64,${ocorrencia.fotoOcorrencia}`" class="imgOcc" ><!-- </v-img> -->
                        <h3>Descricao</h3>
                        {{ocorrencia.descricaoOcorrencia}}
                    </v-card-text>
        
                    <v-card-actions>
                        <v-btn @click="OcorrenciaStore.ChangeOcorrenciaStatus(ocorrencia._id);hideCard(ocorrencia)  "  v-if="ocorrencia.statusOcorrencia == false" tonal color="green">Aprovar</v-btn>
                        <v-btn @click="OcorrenciaStore.ChangeOcorrenciaStatus(ocorrencia._id) " v-if="ocorrencia.statusOcorrencia == true" tonal color="red">Remover Aprovação</v-btn>
                        <!-- //:to="'/ocurrence/'+ocorrencia._id" -->
                        <RouterLink :to="{name: 'ocurrence' ,params: {id:ocorrencia._id}}" >
                            <v-btn >
                                Ver
                            </v-btn>
                        </RouterLink>    
                    </v-card-actions>
                    </v-card>
                    
                    </v-col>
                </v-row>

                <h1>Novo Ano letivo</h1>
                <v-btn @click="rankingStore.CreateNewTopRankedPlayers()">Mudar</v-btn>
                {{rankingStore.CurrentYear[0]}} / {{rankingStore.CurrentYear[1]}}
            </v-container>
        
    </div>
    
</template>

<script>
import {Ocorrencia} from "../../stores/ocorrenciasStore.js"
import { Ranking } from "../../stores/rankingStore"
import {Atividade} from '../../stores/atividadesStore.js'

export default {
    data() {
        return {
            showcard:true,
            asll: "",
            nomeAtv: "",
            descAtv: "",
            imgAtv: "",
            localAtv: "",
            pontosAtv: "",
            horaAtv: "",
            coordAtv: "",
            OcorrenciaStore: Ocorrencia(),
            atividadesStore: Atividade(),
            occurrences:Array,
            rankingStore: Ranking()
        }
    },

    async beforeMount () {
        const AllOcs =await this.OcorrenciaStore.getOcorrencias
            console.log(AllOcs)
            this.asll= AllOcs ;
    },

    methods: {
        hideCard(ocorrencia){
            ocorrencia.statusOcorrencia = !ocorrencia.statusOcorrencia
        },
        
        async getOcorrencias() {
            const AllOcs =await this.OcorrenciaStore.getOcorrencias
            console.log(AllOcs)
            this.asll= AllOcs ;
        },
    
        verificarAtividade(){
            if(this.atividadesStore.getAtividade.find(atividade => atividade.nomeAtividade == this.nomeAtv)){
                alert('Esta atividade já existe!')
            }else{
                this.atividadesStore.addAtividade(this.nomeAtv,this.desAtv,"/src/assets/img/" + this.imgAtv[0].name,this.localAtv,this.pontosAtv,this.horaAtv,this.coordAtv)
                this.$router.push("/activities")
            }

        },
        RemoverAtividade(){
            if(this.atividadesStore.getAtividade.find(atividade => atividade.nomeAtividade == this.removerNomeAtv)){
                this.atividadesStore.removeAtividade(this.removerNomeAtv)
                this.$router.push("/activities")
            }else{
                alert("Esta atividade não existe!")
            }
        }
    },
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

.v-text-field{
      width: 400px;
}

.v-file-input{
    width: 400px;
}
.Atividades{
    margin: 70px
}

button{
    background-color:"green"
}


.imgOcc {
    max-width: 20vw;
    object-fit: cover;
    border-radius: 15px;
}

</style>