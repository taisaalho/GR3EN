<template>
  <v-app>
    <v-main>
      <v-container>
        <v-form @submit.prevent="submitForm" ref="form">
          <v-text-field v-model="form.nome" label="Badge Name" required></v-text-field>
          <v-text-field v-model.number="form.points" label="Badge Points" :rules="pointsRules" required></v-text-field>
          <v-select v-model="form.type" :items="typeOptions" label="Badge Type" required></v-select>
          <v-text-field v-model.number="form.requirement" label="Badge Requirement" required></v-text-field>
          <v-btn type="submit" color="primary">Submit</v-btn>
        </v-form>
      </v-container>
    </v-main>

    <v-dialog v-model="dialogVisible" max-width="400">
      <v-card>
        <v-card-title class="headline" v-text="dialogTitle"></v-card-title>
        <v-card-text v-text="dialogMessage"></v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialogVisible = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        nome: '',
        points: null,
        type: '',
        requirement: null
      },
      typeOptions: ['ActivityCounter', 'OccurrenceCounter', 'PointCounter'],
      pointsRules: [
        value => !!value || 'Points is required',
        value => Number.isInteger(value) || 'Points must be an integer'
      ],
      dialogVisible: false,
      dialogTitle: '',
      dialogMessage: ''
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        const formData = new FormData();
    
        formData.append('name', this.form.nome);

        formData.append('points', this.form.points);
        formData.append('type', this.form.type);
        formData.append('requirement', this.form.requirement);

        axios.post('http://127.0.0.1:3000/titles/', formData,{headers:{Authorization:'Bearer '+localStorage.getItem('Token')}})
          .then(response => {
            // Handle successful response
            this.showDialog('Success', 'POST request completed successfully.');
          })
          .catch(error => {
            // Handle error
            this.showDialog('Error', 'An error occurred during the POST request.');
            console.error('Error:', error);
          });
      }
    },
    showDialog(title, message) {
      this.dialogTitle = title;
      this.dialogMessage = message;
      this.dialogVisible = true;
    }
  }
};
</script>
