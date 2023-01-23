<script>
    
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
export default {
    data:() =>({
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',]
    }),
    components:{
    NavBar,
    Footer,
    }
};

</script>   

<template >
            <v-sheet class="bg-deep-purple pa-15 mx-auto my-auto" width="40vw" rounded>
                <v-card class="mx-auto px-6 py-8" >
                    <v-form v-model="form" @submit.prevent="onSubmit">
                        <v-text-field
                        v-model="email"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                            clearable
                            label="Email"
                            ></v-text-field>

                            <v-text-field
                            v-model="password"
                            :readonly="loading"
                            :rules="[required]"
                            clearable
                            label="Password"
                            placeholder="Enter your password"
                            ></v-text-field>            
                            
                            <br>
                            
                            <v-btn
                            :disabled="!form"
                            :loading="loading"
                            block
                            color="success"
                            size="large"
                            type="submit"
                            variant="elevated"
                            >
                            Sign In
                        </v-btn>
                    </v-form>
                </v-card>    
            </v-sheet>

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

  
</style>