<template>
    <v-app>
       
        <v-container height="100%">
            
            <v-row gutters>
                
                <v-col  v-for="badge in badgesList" :key="badge._id">
                    <v-card>
                        <v-card-title>
                            {{badge.nomeBadge}}
                        </v-card-title>
                        <v-card-text>
                            {{badge.descricaoBadge}}
                        </v-card-text>
                        <v-card-text>
                            <v-img :src="`data:image/webp;jpg;png;jpeg;base64,${badge.imagemBadge}`" ></v-img>
                        </v-card-text>
                        <v-card-text>
                            <v-btn color="primary" :to="'/Admin/EditBadge/'+badge._id">Editar</v-btn>

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
                badgesList:Array
            }
        },
        async mounted(){
            try {
                const res = await axios.get('http://127.0.0.1:3000/badges')
                 this.badgesList = res.data                
                 console.log(this.badgesList)
            } catch (error) {
                
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>