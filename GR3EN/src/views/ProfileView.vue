<template>
    <v-app >
        
            
    <NavBar/>
            
    <v-main>
        <v-sheet class="background" color="rgba(0, 115, 98, 0.8)">
            <v-row>

            <v-avatar id="pfp" image="..\src\assets\img\Elise.svg" size="300"></v-avatar>
            </v-row>
            <v-row>
            <h1 class="userName">{{currentUser.primeiroNome}} {{currentUser.ultimoNome}}</h1>
            </v-row>
            <v-row>
            <v-container>
                <h3 class="">Pontos : {{currentUser.pontos}} </h3>
                <h3 class="">Escola : {{currentUser.escola}} </h3>
            </v-container>
            </v-row>
            <v-row>
               <v-container>
                    <h1>Badges</h1>
                
                    <div  v-for="badge in userBadges" :key="badge._id">
                        <v-img :src="`data:image/webp;jpg;png;jpeg;base64,${badge.imagemBadge}`"></v-img>
                        {{ badge.nomeBadge }}
                    </div>
                </v-container>
            </v-row>
            <v-row>
               <v-container>
                    <h1>Titles</h1>
                
                    <div  v-for="title in userTitles" :key="title._id">
                        {{ title.name }}
                    </div>
                </v-container>
            </v-row>
            <v-row>
                <v-container>
                    <h1>Activities</h1>
                    <div  v-for="atividade in atividades_do_user" :key="atividade._id">
                        {{ atividade.nomeAtividade }}
                        {{ atividade.fotoAtividade }}
                    </div>
                    
                    
                </v-container>
            </v-row>
            <v-row>
                <v-container>
                    <h1>Occurrences</h1>
                    <div  v-for="ocorrencia in ocorrencias_do_user" :key="ocorrencia._id">
                        {{ ocorrencia.nomeOcorrencia }}
                        {{ ocorrencia.fotoOcorrencia }}
                        Estado:
                        <span v-if="ocorrencia.statusOcorrencia">Verificada</span>
                        <span v-else>Não Verificada</span>
                    </div>
                    
                    
               </v-container>
            </v-row>
            <v-row>
               <v-container>
                    <h1>Change Profile</h1>
                    <v-btn v-if="!MudarPerfil" @click="MudarPerfil = !MudarPerfil">Mudar Perfil</v-btn>
                    <v-form  @submit.prevent="changeProfile()" v-if="MudarPerfil">
                        <v-text-field v-model="EditUserForm.Primeiro_Nome" label="Primeiro Nome" ></v-text-field>
                        <v-text-field v-model="EditUserForm.Ultimo_Nome" label="Ultimo Nome"></v-text-field>
                        <v-text-field v-model="EditUserForm.Escola" label="Escola"></v-text-field>
                        <v-checkbox @click="changePassword = !changePassword" label="Mudar Password"></v-checkbox>
                        <div v-if="changePassword">
                            <v-text-field  v-model="EditUserForm.Password" type="password" label="Password"></v-text-field>
                            <v-text-field  v-model="EditUserForm.Password_Confirm" type="password" label="Confirm Password"></v-text-field>
                        </div>

                       <v-btn type="submit" color="green">Mudar</v-btn>
                       <v-btn @click="MudarPerfil = !MudarPerfil" color="red">x</v-btn>
                    </v-form>
               </v-container>
            </v-row>
            <v-alert
                v-model="alert"
                border="start"
               
                closable
                close-label="Close Alert"
                :type="alertType"
                title="Closable Alert"
                >{{ alertText }}</v-alert>
        </v-sheet>
        </v-main>
    </v-app>
            
</template>

<script>
    import {User} from '../stores/userStore.js'
    import {Atividade} from '../stores/atividadesStore.js'
    import {Ocorrencia} from '../stores/ocorrenciasStore.js'
    import {Badge} from '../stores/badgesStore.js'
    import NavBar from '../components/NavBar.vue'
    import axios from 'axios'
    
    export default {
        
        components: {
            NavBar,
        },
        data() {
            return {
                User: User(),
                atividadesStore : Atividade(),
                ocorrenciasStore : Ocorrencia(),
                Badge : Badge(),
                currentUser: Object,
                userBadges:Array,
                userTitles:Array,
                atividades_do_user:Array,
                ocorrencias_do_user:Array,
                changePassword:false,
                MudarPerfil:false,
                alert:false,
                alertText:'',
                alertType:'error',
                EditUserForm:
                {
                    Primeiro_Nome:'',
                    Ultimo_Nome:'',
                    Escola:'',
                    Password:'',
                    Password_Confirm:'',
                }
            }   
        },
        computed: {
            
            
        },
         async created() {

            try {
                let res = await axios.get('https://elegant-slug-woolens.cyclic.app/users/user-profile',{
                    headers:{
                        Authorization: 'Bearer ' + localStorage.getItem('Token')
                    }}) 

                this.currentUser = res.data
                
                this.EditUserForm.Primeiro_Nome = res.data.primeiroNome
                this.EditUserForm.Ultimo_Nome = res.data.ultimoNome
                this.EditUserForm.Escola = res.data.escola
               

                
                let badgeStr = ''

                this.currentUser.idBadge.forEach(idBadge => badgeStr = badgeStr + idBadge + ',')
                
                badgeStr = badgeStr.slice(0, badgeStr.length - 1)
                
                res = await axios.get('https://elegant-slug-woolens.cyclic.app/badges?badges=' + badgeStr)
                this.userBadges = res.data
                
                let titleStr = ''
                
                this.currentUser.idTitulo.forEach(idBadge => badgeStr = badgeStr + idBadge + ',')
                
                titleStr = titleStr.slice(0, titleStr.length - 1)
                
                res = await axios.get('https://elegant-slug-woolens.cyclic.app/titles?titles=' + titleStr)
                this.userTitles = res.data
                
                res = await axios.get('https://elegant-slug-woolens.cyclic.app/activities?userid=' + this.currentUser._id)
                this.atividades_do_user = res.data
                
                res = await axios.get('https://elegant-slug-woolens.cyclic.app/occurrences?userid=' + this.currentUser._id)
                this.ocorrencias_do_user = res.data

            } catch (error) {
                
            }

    

          
         
        },
        methods: {
            async changeProfile(){
                const data = {
                    primeiroNome:this.EditUserForm.Primeiro_Nome,
                    ultimoNome:this.EditUserForm.Ultimo_Nome,
                    escola:this.EditUserForm.Escola,
                }


                if(this.changePassword){
                    if(this.EditUserForm.Password != this.EditUserForm.Password_Confirm){
                        this.alert = true
                        this.alertType = 'error'
                        this.alertText = 'Passwords do not match.'
                        return
                    }else{
                        data.password = this.EditUserForm.Password
                    }
                }
              
                try {
                    let res = await axios.put('https://elegant-slug-woolens.cyclic.app/users/user-profile', data , {
                    headers: {
                        'Authorization': 'Bearer '+ localStorage.getItem('Token'),
                        'Content-Type': 'application/json'
                    }})
                    this.alertType = 'success'
                    this.alertText = res.data.message
                    this.alert = true
                    location.reload()
                } catch (error) {

                    console.log(error.response)
                    this.alertType = 'error'
                    this.alertText = error.response.data
                    this.alert = true
                }
            
            }
            

        },

    }
</script>

<style lang="scss" scoped>

.scroll{
    overflow: hidden;
    overflow-y: scroll;
    max-height: 80vh;
    max-width: 200vh;
    margin-top: 10vh;
    margin-bottom: 10vh;
}


@font-face{
        font-family: Norquay;
        src: url(../assets/NorquayRegular.otf);
}
@font-face{
        font-family: Rubik;
        src: url(../assets/Rubik-Regular.ttf);
}

.subTitle{
    margin:0;
    
}

.scroll{
    overflow: hidden;
    overflow-y: scroll;
    min-width: 80vw;
    max-height: 50vh;
    margin-top: 10vh;
    padding-left:5vw ;
    padding-right:5vw ;
}

.flex{
    display: flex;
}

.leftTitles{
    margin-left: 10vw;
    margin-right: 0vw;
    
}
.verBtn{
    margin-top: 5vh ;
}



#pfp{
    margin:auto;
    top: -10vh
}
#infoAtt{
    margin-top:5vh;
}

*{
        text-decoration: none;
}

#registerButton{
    font-family:Norquay;
    margin-left: 5vw;
    background-color:#FF6500;
    color:white;
    font-size: 1.5rem;
}
.attBtn{
    border-radius: 15px;
    margin-left:3vw;
}
.changeInfo{
    margin-left:5vw;
    min-width:30vw;
}
.tabWindow{
    margin:5vw;
    margin-left:10vw
}
.tabsTitles{
    font-family:Norquay;
    padding-top: 2vh;
    color:white;
    text-shadow: 3px 1px 1px #8D5836;
    font-size: 3rem;
}
.title{
    margin:auto;
    color: rgba(255,255,255,0.8);
    font-size:2rem;

}

.tabs{
    margin: auto;
}

.userName{
    margin:auto;
    font-family: Norquay;
    font-size:5rem;
    color:white;
    text-shadow: 5px 1px 1px #8D5836 ;

}

.background{
    margin: auto;
    margin-top:10vh;
    width:80vw;
    height:fit-content;
    border-radius: 30px;
}

.dividersHor{
    max-width: 80vw;
    margin: auto;
}

.dividersVer{
    margin-left: 2vw;
}


</style>