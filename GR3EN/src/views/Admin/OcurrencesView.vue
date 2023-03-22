<template>
    <div>
        <v-container>
                <v-row gutters>
                    <v-col
                    v-for="ocorrencia in OcorrenciaStore.getOcorrencias"
                    cols="12"
                    sm="4">
                    
                    <v-card  :title="ocorrencia.nomeOcorrencia" 
                    variant="tonal">
        
                    <v-card-subtitle>
                        {{new Date(ocorrencia.dataHoraOcorrencia).toLocaleString()}}
                        <br>
                        Categoria: {{ocorrencia.categoriaOcorrencia}}
                        
                    </v-card-subtitle>
                    <v-card-text>
                        <h3>Foto</h3>
                        <v-img :src="ocorrencia.fotoOcorrencia"></v-img>
                        <h3>Descricao</h3>
                        {{ocorrencia.descriçaoOcorrencia}}
                    </v-card-text>
        
                    <v-card-actions>
                        <v-btn @click="OcorrenciaStore.ChangeOcorrenciaStatus(ocorrencia.idOcorrencia) " v-if="ocorrencia.statusOcorrencia == false" tonal color="green">Aprovar</v-btn>
                        <v-btn @click="OcorrenciaStore.ChangeOcorrenciaStatus(ocorrencia.idOcorrencia) " v-if="ocorrencia.statusOcorrencia == true" tonal color="red">Remover Aprovação</v-btn>
                        <v-btn :to="'/ocurrence/'+ocorrencia.idOcorrencia">Ver</v-btn>
                    </v-card-actions>
                    </v-card>
                    
                    </v-col>
                </v-row>

                <h1>Novo Ano letivo</h1>
                <v-btn @click="rankingStore.CreateNewTopRankedPlayers()">Mudar</v-btn>
                {{rankingStore.CurrentYear[0]}} / {{rankingStore.CurrentYear[1]}}
            </v-container>
        
    </div>
    <div class="Atividades">
        <h2>Nova atividade</h2>
        <br>
        <v-text-field
                        v-model="nomeAtv"
                        variant="solo"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                            clearable
                            label="Nome"
        ></v-text-field>
        <!-- <v-text-field
                        v-model="nomeAtv"
                        clearable
                        hide-details="auto"
                        label="Nome"
        ></v-text-field> -->
        <v-text-field
                        v-model="desAtv"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                            clearable
                            label="Descrição"
        ></v-text-field>
        <v-file-input label="Imagem" variant="solo" v-model="imgAtv" :rules="[required]"></v-file-input>
        <v-text-field
                        v-model="coordAtv"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                            clearable
                            label="Coordenador"
        ></v-text-field>
        <v-text-field
                        v-model="localAtv"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                            clearable
                            label="Localidade"
        ></v-text-field>
        <v-text-field 
                        class="mr-2" 
                        prepend-inner-icon="mdi-calendar-account" 
                        label="Data"
                        placeholder="dd/mm/yyyy hh:mm" 
                        :rules="[required]"
                        v-model="horaAtv"
                        ></v-text-field>
        <v-text-field
                        v-model="pontosAtv"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                            clearable
                            label="Pontos"
        ></v-text-field>
        <!-- <v-text-field
                        v-model="horaAtv"
                        :readonly="loading"
                        :rules="[required]"
                        placeholder="hh:mm"
                        class="mb-2"
                            clearable
                            label="Horas"
        ></v-text-field> -->
        <v-btn variant="outlined" @click="verificarAtividade()">Adicionar</v-btn>
    </div>
    <div class="Atividades">
        <h2>Remover Atividade</h2>
        <br>
        <v-text-field
                        v-model="removerNomeAtv"
                        variant="solo"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                            clearable
                            label="Nome"
        ></v-text-field>
        <v-btn variant="outlined" @click="RemoverAtividade()">Remover</v-btn>
    </div>
</template>

<script>
import {Ocorrencia} from "../../stores/ocorrenciasStore.js"
import { Ranking } from "../../stores/rankingStore"
import {Atividade} from '../../stores/atividadesStore.js'

export default {
    data() {
        return {
            nomeAtv: "",
            descAtv: "",
            imgAtv: "",
            localAtv: "",
            pontosAtv: "",
            horaAtv: "",
            coordAtv: "",
            OcorrenciaStore: Ocorrencia(),
            atividadesStore: Atividade(),
            rankingStore: Ranking()
        }
    },

    methods: {
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

</style>