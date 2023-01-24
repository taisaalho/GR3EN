<template>
    <v-app >
        <v-app-bar color="rgba(0, 115, 98, 0.8)">
            <v-btn variant="text"><img src="GR3EN\src\assets\Logo 2.svg"></v-btn>
            <v-btn variant="text" class="navBtn" color="white">Atividades</v-btn>
            <RouterLink to ="/occurrencereport"><v-btn variant="text" class="navBtn" color="white">Ocorrências</v-btn></RouterLink>
            <v-btn variant="text" class="navBtn" color="white ">Ranking</v-btn>
            <template v-slot:append>
                <RouterLink to ="/signin"><v-btn variant="text" color="white" class="navBtn">Sign In</v-btn></RouterLink>
            </template>
            
        </v-app-bar>
        
        <v-main>
        <v-container>
            <v-sheet class="background" color="rgba(0,115,98,0.8)" >
                <v-row>

                    <h1 class="title">Reportar Ocorrência</h1>
                </v-row>
                
                <v-row>
                    <v-text-field class="inputOcc" label="Nome" variant="solo"></v-text-field>
                    <v-text-field  class="inputOcc" label="Local" variant="solo"></v-text-field>
                    <v-select class="inputOcc"
                    label="Categoria"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    variant="solo"
                    ></v-select>
                </v-row>
                <v-row>
                    <v-file-input class="fileInput inputOcc" label="Imagem" variant="solo"></v-file-input>
                    
                </v-row>
                
                <v-row>
                    <h1 class="subTitle">Descrição</h1>
                </v-row>
                <v-row>
                    <v-col style="max-height:20vh">
                        <v-textarea autogrow  class="inputOcc description" label="Label" variant="solo"></v-textarea>

                        <v-btn class="buttons submit"  size="x-large">Reportar</v-btn>
                    </v-col>

                </v-row>
                <v-row>
                </v-row>
            </v-sheet>     
        </v-container>
        </v-main>
    </v-app >

</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @font-face{
        font-family: Norquay;
        src: url(../assets/NorquayRegular.otf);
    }
    @font-face{
        font-family: Rubik;
        src: url(../assets/Rubik-Regular.ttf);
    }

    .background{
        width:80vw; 
        height:100vh;
        margin:auto;
        border-radius:30px;
    }

    .fileInput{
        max-width: 17vw;
    }

    .buttons{
        font-family:Norquay;
    
        background-color:#FF6500;
        color:white;
        font-size: 1.5rem;
    }

    .inputOcc{
        margin-right:5vw;
        margin-left:5vw;
        margin-top:2vw;
    }

    .title{
        margin:auto;
        margin-top:7vh;
        font-family: Norquay;
        font-size: 3em;
        color: white;
        text-shadow: 5px 1px 1px #8D5836 ;   /* text shadow?????? */
        
    }

    .subTitle{
        font-family: Norquay;
        font-size: 2em;
        color: white;
        text-shadow: 5px 1px 1px #8D5836 ;   /* text shadow?????? */
        margin-left: 10vw;
        margin-top: 10vh;
    }

    .submit{
        margin-left:65vw;
    }

    .description{
        margin-bottom:5vh
    }
</style>