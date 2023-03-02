<template>
    <v-app>
        
            <NavBar/>
        
            <v-main>
                <v-container>
                    <v-sheet class="background" color="rgba(0,115,98,0.8)">
                        <v-row>
                            <h1 class="title">Reportar Ocorrência</h1>
                        </v-row>
                        <v-form @submit.prevent="addOcc">
                        <v-row>
                            <v-text-field
                                :rules="rules"
                                class="inputOcc"
                                label="Nome"
                                v-model="nome"
                                variant="solo"
                            ></v-text-field>
              
                            <v-text-field
                              :rules="rules"
                                v-model="local"
                                class="inputOcc"
                                label="Local"
                                variant="solo"
                            ></v-text-field>
                            <v-select
                                :rules="rules"
                                v-model="select"
                                class="inputOcc"
                                label="Categoria"
                                :items="items"
                                item-value="cat"
                                variant="solo"
                            ></v-select>
                        </v-row>
                        <v-row>
                            <v-file-input
                                class="fileInput inputOcc"
                                label="Imagem"
                                v-mode="img"
                                variant="solo"
                            ></v-file-input>
                        </v-row>

                        <v-row>
                        <h1 class="subTitle">Descrição</h1>
                        </v-row>
                        <v-row>
                            <v-col style="max-height: 20vh">
                                <v-textarea
                                :rules="rules"
                                autogrow
                                v-model="desc"
                                class="inputOcc description"
                                label="Label"
                                variant="solo"
                                ></v-textarea>

                                <v-btn type="submit" class="buttons submit" size="x-large">Reportar</v-btn>
                            </v-col>
                        </v-row>
                      </v-form>
                    </v-sheet>
                </v-container>
            </v-main>
        
    </v-app>
</template>

<script>
import { Ocorrencia } from "../stores/ocorrenciasStore.js";
import NavBar from "../components/NavBar.vue";

export default {
    components: {
        NavBar,
    },

    data: () => ({
        ocorrenciasStore: Ocorrencia(),
        currentUser: localStorage.getItem("currentUser"),
        items:["Fuga","Partido","Em falta","Outro"],
        nome:'',
        desc:'',
        local:'',
        img:'',
        select:'',
        rules: [
        value => {
          if (value) return true

          return 'Preenchimento obrigatorio'
        }],
        
    }),
    methods: {
        addOcc() {

            if(this.nome && this.local && this.desc && this.select) {
              this.ocorrenciasStore.addOcorrencia(this.nome,this.desc,this.local,this.currentUser.idUser,this.img,this.select)

              this.$router.push('/')
            }
        },
        

        
    },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: Norquay;
  src: url(../assets/NorquayRegular.otf);
}
@font-face {
  font-family: Rubik;
  src: url(../assets/Rubik-Regular.ttf);
}

*{
        text-decoration: none;
}


.background {
  width: 80vw;
  height: 100vh;
  margin: auto;
  border-radius: 30px;
}

.fileInput {
  max-width: 17vw;
}

.buttons {
  font-family: Norquay;

  background-color: #ff6500;
  color: white;
  font-size: 1.5rem;
}

.inputOcc {
  margin-right: 5vw;
  margin-left: 5vw;
  margin-top: 2vw;
}

.title {
  margin: auto;
  margin-top: 7vh;
  font-family: Norquay;
  font-size: 3em;
  color: white;
  text-shadow: 5px 1px 1px #8d5836; /* text shadow?????? */
}

.subTitle {
  font-family: Norquay;
  font-size: 2em;
  color: white;
  text-shadow: 5px 1px 1px #8d5836; /* text shadow?????? */
  margin-left: 10vw;
  margin-top: 10vh;
}

.submit {
  margin-left: 65vw;
}

.description {
  margin-bottom: 5vh;
}
</style>
