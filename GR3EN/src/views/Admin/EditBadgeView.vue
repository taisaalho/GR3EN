<template>
  <v-app>
    <v-main>
      <v-container>
        <v-form @submit.prevent="submitForm" ref="form">
          <v-text-field v-model="form.nomeBadge" label="Badge Name" required></v-text-field>
          <v-text-field v-model="form.descricaoBadge" label="Badge Description" required></v-text-field>
          <v-file-input ref="file" label="Badge Image" accept="image/*" ></v-file-input>
          <v-text-field v-model.number="form.pontosBadge" label="Badge Points" :rules="pointsRules" required></v-text-field>
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
        nomeBadge: '',
        descricaoBadge: '',
        imagemBadge: null,
        pontosBadge: null,
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
      const res = await axios.get('http://127.0.0.1:3000/badges?badges='+this.$route.params.id)
      
      const badgeData = res.data[0]
      
      this.form.nomeBadge = badgeData.nomeBadge
      this.form.descricaoBadge = badgeData.descricaoBadge
      this.form.imagemBadge = badgeData.imagemBadge
      this.form.type = badgeData.type
      this.form.requirement   = badgeData.requirement
      this.form.pontosBadge   = badgeData.pontosBadge
    } catch (error) {
      this.$router.push('/Admin')
    }

    
    },
    submitForm() {
      if (this.$refs.form.validate()) {
      const badgeId = this.$route.params.id;
      const endpoint = `http://127.0.0.1:3000/badges/${badgeId}`;
      const formData = new FormData();
      formData.append('nomeBadge', this.form.nomeBadge);
      formData.append('descricaoBadge', this.form.descricaoBadge);
      formData.append('pontosBadge', this.form.pontosBadge);
      formData.append('type', this.form.type);
      formData.append('requirement', this.form.requirement);
      if(this.$refs.file.files[0]){
        this.form.imagemBadge = this.$refs.file.files[0];
        formData.append('imagemBadge', this.form.imagemBadge);
      }
      
      axios.put(endpoint, formData, {headers:{Authorization:'Bearer '+localStorage.getItem('Token')}})
        .then(response => {
          // Handle successful response
          this.showDialog('Success', 'Badge updated successfully.');
        })
        .catch(error => {
          // Handle error
          console.error('Error:', error);
          this.showDialog('Error', 'Failed to update badge.');
        });
    }
    },
    showDialog(title, message) {
      this.dialogTitle = title;
      this.dialogMessage = message;
      this.dialogVisible = true;
    },
    deleteBadge() {
      const badgeId = this.$route.params.id;
      const endpoint = `http://127.0.0.1:3000/badges/${badgeId}`;

      axios.delete(endpoint,{headers:{Authorization:'Bearer '+localStorage.getItem('Token')}})
        .then(response => {
          // Handle successful deletion
          this.showDialog('Success', 'Badge deleted successfully.');
        })
        .catch(error => {
          // Handle error
          console.error('Error:', error);
          this.showDialog('Error', 'Failed to delete badge.');
        });
    }
  
  }
};
</script>
