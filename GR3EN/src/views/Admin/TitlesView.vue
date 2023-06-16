<template>
    <v-app>
       
        <v-container height="100%">
            
            <v-row gutters>
                
                <v-col  v-for="title in titlesList" :key="title._id">
                    <v-card>
                        <v-card-title>
                            {{title.name}}
                        </v-card-title>
                        <v-card-text>
                            <v-btn color="primary" :to="'/Admin/EditTitle/'+title._id">Editar</v-btn>

                        </v-card-text>
                    </v-card>
                  
                </v-col>
                
            </v-row>
            

        </v-container>
    </v-app>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                titlesList:Array
            }
        },
        async mounted(){
            try {
                const res = await axios.get('http://127.0.0.1:3000/titles')
                 this.titlesList = res.data                
                 console.log(this.titlesList)
            } catch (error) {
                
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>