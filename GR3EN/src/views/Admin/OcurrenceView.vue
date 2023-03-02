<template>
    <div>
        Ocurrence
    </div>
    <v-container>
        <div v-for="key,i in ocorrencia">
            <h3>{{ i }}</h3>
            <p>{{ key }}</p>

        </div>
        <v-btn @click="OcorrenciaStore.ChangeOcorrenciaStatus(ocorrencia.idOcorrencia) " v-if="ocorrencia.statusOcorrencia == false" tonal color="green">Aprovar</v-btn>
                        <v-btn @click="OcorrenciaStore.ChangeOcorrenciaStatus(ocorrencia.idOcorrencia) " v-if="ocorrencia.statusOcorrencia == true" tonal color="red">Remover Aprovação</v-btn> 
        <v-btn to="/ocurrences">Voltar</v-btn>
    </v-container>
</template>

<script>
import { ref } from 'vue'
import {useRouter,useRoute} from 'vue-router'
import { Ocorrencia } from '../../stores/ocorrenciasStore'


export default {
    setup () {
        const Route = useRoute()
        const OcorrenciaStore = Ocorrencia()
        const ocorrencia = ref(OcorrenciaStore.getOcorrenciaById(Route.params.id))

        
        

        return {ocorrencia,OcorrenciaStore  }
    }
}
</script>

<style lang="scss" scoped>

</style>