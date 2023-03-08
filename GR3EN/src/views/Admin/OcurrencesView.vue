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
</template>

<script>
import {Ocorrencia} from "../../stores/ocorrenciasStore.js"
import { Ranking } from "../../stores/rankingStore"

export default {
    setup () {
        const rankingStore = Ranking()
        const OcorrenciaStore = Ocorrencia()
        

        return {OcorrenciaStore,rankingStore}
    }
}
</script>

<style lang="scss" scoped>

</style>