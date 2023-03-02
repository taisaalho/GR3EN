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

            </v-container>
        
    </div>
</template>

<script>
import {Ocorrencia} from "../../stores/ocorrenciasStore.js"


export default {
    setup () {
        const OcorrenciaStore = Ocorrencia()
        

        return {OcorrenciaStore}
    }
}
</script>

<style lang="scss" scoped>

</style>