<script>
import {User} from '../stores/userStore.js'



export default {
    data() {
        return {

            User:User(),
            email:'',
            password:'',
        }
    },
    
    methods: {
        async checkLogin(){
            /* console.log(this.email, this.password);
            console.log("taisa"); */
             if(this.User.login(this.email,this.password)){
                console.log("taisa")
                await this.$router.push({name :'home'})
             }
        }
    },
};

</script>   

<template >
    <div class="sheet">
        <v-sheet color="rgba(0, 115, 98, 0.8)" class="pa-15 mx-auto my-auto" width="45vw"  rounded>
            <div class="card">
                <h1>Log In</h1>
                <v-card color="rgba(0, 120, 108, 0.8)" class="mx-auto px-6 py-8" >
                    <v-form v-model="form" @submit.prevent="onSubmit">
                        <v-text-field
                        v-model="email"
                        class="mb-2"
                        clearable
                        label="Email"
                        placeholder = "Enter your email address"
                        ></v-text-field>

                        <v-text-field
                        v-model="password"
                        type="password"
                        clearable
                        label="Password"
                        placeholder="Enter your password"                            ></v-text-field>            
                            
                            <br>
                            <v-row class="buttons">

                                    
                                    <RouterLink to ="/users/register"><v-btn
                                        color="warning"
                                        size="large"
                                        type="submit"
                                        variant="elevated"
                                        >
                                            Register
                                        </v-btn></RouterLink>

                            
                            
                                    <RouterLink to ="/users/login"><v-btn class="btn1"
                                    color="warning"
                                    size="large"
                                    type="submit"
                                    variant="elevated"
                                    @click="checkLogin"
                                    >
                                    Confirm
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

*{
        text-decoration: none;
}


.sheet{
    margin: 8vw;

}
.buttons{
    display:flex;
    justify-content: space-between;
    margin-left:8vw;
    margin-top:3vh;
    margin-right:8vw;
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





</style>