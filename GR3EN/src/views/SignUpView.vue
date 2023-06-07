<script>
import {User} from '../stores/userStore.js'
import axios from 'axios'


export default {
    data(){
        return{
            User:User(),
            email:'',
            firstName:'',
            lastName:'',
            school:'',
            password:'',
        }
    },
    methods: {
        createAcc() {
            if (!(this.User.getUsers.find(user => user.email == this.email))){
                let newUser = this.User.register(this.firstName,this.lastName,this.email,this.school,this.password,this.date)
                if (newUser){
                    console.log('User created')
                }else{
                    console.log('User not created')
                }
            }else{
                alert('Account Already Exists')
            }    
        }
    },
};


</script>
<template >
        <div class="sheet">
            <v-sheet color="rgba(0, 115, 98, 0.8)" class="pa-15 mx-auto my-auto rounded" width="45vw">
                <div class="card">
                    <h1>Register</h1>
                    <v-card color="rgba(0, 120, 108, 0.8)" class="mx-auto px-6 py-8" >
                        <v-form v-model="form" @submit.prevent="onSubmit">
                            <v-row>
                                <v-col col="6">
                                    <v-text-field
                                    :v-model="firstName"
                                    class="mb-2"
                                    clearable
                                    label="Primeiro Nome"
                                    placeholder = "Enter your email address"
                                    ></v-text-field>
                                    
                                    <v-text-field
                                    v-model="email"
                                    clearable
                                    label="Email"
                                    placeholder="Enter your name"
                                    class=""
                                    ></v-text-field>    
                                    
                                    <v-text-field
                                    v-model="password"
                                    type="password"
                                    clearable
                                    label="Password"
                                    placeholder="Enter your password"
                                    ></v-text-field>  
                                    
                                </v-col>
                                <v-col col="6">
                                    <v-text-field
                                    v-model="lastName"
                                    class="mb-2"
                                    clearable
                                    label="Último Nome"
                                    placeholder = "Enter your email address" 
                                    ></v-text-field>
                                        
                                    
                                    <!-- <input class="forms green" v-model="date" type="date" > -->
                                    <v-select
                                    v-model="school"
                                    class="green"
                                    label="Select"
                                    :items="['Primário', 'Secundário', 'Superior']"
                                    variant="solo"
                                    ></v-select> 
                                </v-col>
                            </v-row>
                            
                                
                            <v-row class="buttons">
                                
                                
                                <v-btn
                                color="warning"
                                size="large"
                                type="submit"
                                variant="elevated"
                                class="btn1"
                                @click="createAcc"
                                >
                                Confirmar
                                </v-btn>
                                <RouterLink to ="/signin"><v-btn class="btn1"
                                    color="warning"
                                    size="large"
                                    type="submit"
                                    variant="elevated"
                                    >
                                Sign In
                                </v-btn></RouterLink>
                            
                            
                            
                            </v-row>
                        </v-form>
                    </v-card>
                </div>    
            </v-sheet>
        </div>

    </template>


<style lang="scss" scoped>
    @font-face{
        font-family: Norquay;
        src: url(../assets/NorquayRegular.otf);
    }
    @font-face{
        font-family: Rubik;
        src: url(../assets/Rubik-Regular.ttf);
    }
    .btn1{
        color:white;
        
    }

    *{
        text-decoration: none;
    }

    .v-app{
    background-image: url('/src/assets/img/Mask group.svg') !important;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: auto 400% !important;
    height: 220vh !important;
    width: 100vw !important;
    // background-attachment: fixed !important;
    }
    
    
    .buttons{
        display:flex;
        justify-content: space-between;
        margin-left:5vw;
        margin-top:3vh;
        margin-right:5vw
    }
    .sheet{
        margin: 7.5vw;
        
    }
    
    .rounded{
        border-radius:30px
    }
    .green{
        background-color: rgba(0, 120, 108, 0.8);
    }
    
    .forms{
        margin-bottom:3vh;
        padding: 1.3vh;
        width: 17vw;
    }
    
    .card{
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 20px;
        margin-right: 20px;
    }
    
    h1{
        font-family: norquay;
        font-weight: 100;
        color: white;
        text-shadow: 5px 1px 1px #8D5836;
        margin-left: 300px;
    }
    
    .v-btn:hover{
        box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
    }
    
    
    
    
    
</style>