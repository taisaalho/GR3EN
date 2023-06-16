<template>
  <v-app>
    <v-main>
      <v-container>
        <v-form @submit.prevent="submitForm" ref="form">
          <v-text-field v-model="form.nome" label="Badge Name" required></v-text-field>
          <v-text-field v-model.number="form.pontos" label="Badge Points" :rules="pointsRules" required></v-text-field>
          <v-select v-model="form.type" :items="typeOptions" label="Badge Type" required></v-select>
          <v-text-field v-model.number="form.requirement" label="Badge Requirement" required></v-text-field>
          <v-btn-group>
            <v-btn type="submit" color="success">Submit</v-btn>
            <v-btn color="error" @click="deleteBadge">Delete Badge</v-btn>
          </v-btn-group>
        </v-form>
      </v-container>
    </v-main>

    <v-dialog v-model="dialogVisible" max-width="400">
      <v-card>
        <v-card-title class="headline" v-text="dialogTitle"></v-card-title>
        <v-card-text v-text="dialogMessage"></v-card-text>
        <v-card-actions>
          <v-btn color="primary" to="/Admin" @click="dialogVisible = false">OK</v-btn>
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
        pontos: null,
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
  beforeMount() {
    this.fetchBadgeInfo();
  },
  methods: {
    async fetchBadgeInfo() {
    try {
      const res = await axios.get('http://127.0.0.1:3000/titles?titles='+this.$route.params.id)
      
      const titleData = res.data[0]
      console.log(titleData)
      this.form.nome = titleData.name
      this.form.type = titleData.type
      this.form.requirement = titleData.requirement
      this.form.pontos = titleData.points
    } catch (error) {
      this.$router.push('/Admin')
    }

    
    },
    submitForm() {
      if (this.$refs.form.validate()) {
      const titleId = this.$route.params.id;
      const endpoint = `http://127.0.0.1:3000/titles/${titleId}`;
      const formData = new FormData();
      formData.append('name', this.form.nome);
      formData.append('pontosBadge',  this.form.pontos);
      formData.append('type', this.form.type);
      formData.append('requirement', this.form.requirement);
    
      
      axios.put(endpoint, formData, {headers:{Authorization:'Bearer '+localStorage.getItem('Token')}})
        .then(response => {
          // Handle successful response
          this.showDialog('Success', 'Title updated successfully.');
        })
        .catch(error => {
          // Handle error
          console.error('Error:', error);
          this.showDialog('Error', 'Failed to update title.');
        });
    }
    },
    showDialog(title, message) {
      this.dialogTitle = title;
      this.dialogMessage = message;
      this.dialogVisible = true;
    },
    deleteBadge() {
      const titleId = this.$route.params.id;
      const endpoint = `http://127.0.0.1:3000/Titles/${titleId}`;

      axios.delete(endpoint,{headers:{Authorization:'Bearer '+localStorage.getItem('Token')}})
        .then(response => {
          // Handle successful deletion
          this.showDialog('Success', 'Title deleted successfully.');
        })
        .catch(error => {
          // Handle error
          console.error('Error:', error);
          this.showDialog('Error', 'Failed to delete title.');
        });
    }
  
  }
};
</script>
