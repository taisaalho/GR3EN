<template>
    <div>
      <v-container>
        <h1>Editar Atividade</h1>
        <br>
        <v-form @submit.prevent="submitForm">
          <v-text-field v-model="nomeAtividade" label="Nome de atividade" :rules="nomeAtividadeRules"></v-text-field>
          <v-text-field v-model="descricao" label="Descrição"></v-text-field>
          <v-file-input  ref="file" v-model="image" label="Imagem" accept="image/png, image/jpeg, image/bmp" prepend-icon="mdi-camera"></v-file-input>
          <v-row>
            <v-col>
              <v-text-field v-model="day" label="Dia" :rules="dayRules"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="month" label="Mês" :rules="monthRules"></v-text-field> 
            </v-col>
            <v-col>   
              <v-text-field v-model="year" label="Ano" :rules="yearRules"></v-text-field>
            </v-col>
          </v-row>
          <v-text-field v-model="localAtividade" label="LocalAtividade" :rules="localAtividadeRules"></v-text-field>
          <v-text-field v-model="pontosAtividade" label="Pontos Atividade" :rules="pontosAtividadeRules"></v-text-field>
          <v-btn type="submit" :disabled="!isFormValid">Editar Atividade</v-btn>
          <v-btn @click="RemoveActivity" >Remover Atividade</v-btn>
        </v-form>
      </v-container>

      <v-dialog v-model="dialogVisible">
      <v-card>
        <v-card-title>
          Success
        </v-card-title>
        <v-card-text>
          The activity was edited successfully.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialogVisible = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
  </template>
  
  <script>
import axios from 'axios';

  export default {
    data() {
      return {
        day: '',
        month: '',
        year: '',
        image:'',
        descricao:'',
        nomeAtividade:'',
        localAtividade:'',
        pontosAtividade: '',
        dialogVisible: false,
        errorDialogVisible: false,
        dayRules: [
          value => {
            if (!value || value === '') {
              return 'Day is required';
            }
            const day = parseInt(value, 10);
            if (isNaN(day) || day < 1 || day > 31) {
              return 'Invalid day';
            }
            return true;
          }
        ],
        monthRules: [
          value => {
            if (!value || value === '') {
              return 'Month is required';
            }
            const month = parseInt(value, 10);
            if (isNaN(month) || month < 1 || month > 12) {
              return 'Invalid month';
            }
            return true;
          }
        ],
        yearRules: [
          value => {
            if (!value || value === '') {
              return 'Year is required';
            }
            const year = parseInt(value, 10);
            if (isNaN(year) || year < 1900 || year > 2100) {
              return 'Invalid year';
            }
            return true;
          }
        ],
        pontosAtividadeRules: [
          value => {
            if (!value || value === '') {
              return 'Pontos Atividade is required';
            }
            const pontos = parseInt(value, 10);
            if (isNaN(pontos) || !Number.isInteger(pontos)) {
              return 'Pontos Atividade must be an integer';
            }
            return true;
          }
        ],
        nomeAtividadeRules: [
          value => {
            if (!value || value === '') {
              return 'Nome de atividade is required';
            }
            return true;
          }
        ],
        FileRules: [
          value => {
            if (!value || value === '') {
              return 'File is required';
            }
            return true;
          }
        ],
        localAtividadeRules: [
          value => {
            if (!value || value === '') {
              return 'LocalAtividade is required';
            }
            return true;
          }
        ]
      };
    },
    computed: {
      isFormValid() {
        return (
          this.day &&
          this.month &&
          this.year &&
          this.nomeAtividade &&
          this.localAtividade &&
          this.pontosAtividade &&
          this.dayRules.every(rule => rule(this.day) === true) &&
          this.monthRules.every(rule => rule(this.month) === true) &&
          this.yearRules.every(rule => rule(this.year) === true) &&
          this.pontosAtividadeRules.every(rule => rule(this.pontosAtividade) === true) &&
          this.nomeAtividadeRules.every(rule => rule(this.nomeAtividade) === true) &&
          this.localAtividadeRules.every(rule => rule(this.localAtividade) === true)
        );
      }
    },
    methods: {
      async submitForm() {
        if (this.isFormValid) {
          const formData = new FormData();
          formData.append('dataHoraAtividade', new Date(this.year + '-' + this.month +'-' + this.day));
          formData.append('nomeAtividade', this.nomeAtividade);
          formData.append('descAtividade', this.descricao);
          formData.append('localAtividade', this.localAtividade);
          formData.append('pontosAtividade', this.pontosAtividade);
        
         
          if(this.$refs.file.files[0]){
                const file = this.$refs.file.files[0]
                
                formData.append('imagemAtividade', file);
            }
          try {
            const response = await axios.put('http://127.0.0.1:3000/activities/'+this.$route.params.id, formData, {headers:{Authorization:'Bearer '+ localStorage.getItem('Token')}});
            console.log('Form submitted successfully:', response.data);
            this.dialogVisible = true;
          } catch (error) {
            console.error('An error occurred while submitting the form:', error);
          }
        } else {
          console.log('Please fill in all the required fields correctly');
        }
      },
      async RemoveActivity(){
        try {
          await axios.delete('http://127.0.0.1:3000/activities/'+ this.$route.params.id, {headers:{Authorization:'Bearer '+ localStorage.getItem('Token')}});
          this.$router.push('/')
        } catch (error) {
          
        }

      }
    },
    async beforeMount(){
        try {
            const res = await axios.get('http://127.0.0.1:3000/activities?activities='+this.$route.params.id)
            console.log(res.data[0])
            this.day = new Date(res.data[0].dataHoraAtividade).getDate()
            this.month = new Date(res.data[0].dataHoraAtividade).getMonth()
            this.year = new Date(res.data[0].dataHoraAtividade).getFullYear()
            
            this.descricao = res.data[0].descAtividade
            this.nomeAtividade = res.data[0].nomeAtividade
            this.localAtividade = res.data[0].localAtividade
            this.pontosAtividade =res.data[0].pontosAtividade
        } catch (error) {
            
        }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  