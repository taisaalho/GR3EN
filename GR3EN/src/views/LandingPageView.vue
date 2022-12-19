<script>
    
import NavBar from '../components/NavBar.vue'
export default {
    components:{
    NavBar
    }
};

</script>
<template >
    <div class="page">

        <NavBar />
            <v-carousel :color="blue">
                <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
                ></v-carousel-item>
                
                <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                cover
                ></v-carousel-item>
            
                <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                cover
                ></v-carousel-item>
            </v-carousel>
            
            <section  class="background">
                <div class="flex">
                    <img src="https://images.theoutbound.com/uploads/1409240279880/pzozm86m91ux47vi/03460ef5b7c07b97816071b2194d0b42?w=900&fit=crop&dpr=2"
                     class="homeIMG" alt="">
                    <h1>loremaskdjnaskjdsand

                    </h1>
                </div>
            </section>
            
    </div>

        


</template>


<style lang="scss" scoped>
    .background{
        margin-top:5%;
        background-color:#007362;
        height:40vh;
        
    }
    .homeIMG{
        width:20vw;
        margin:3%
    }
    .page{
        background-image:url(https://images.theoutbound.com/uploads/1409240279880/pzozm86m91ux47vi/03460ef5b7c07b97816071b2194d0b42?w=900&fit=crop&dpr=2);
        height:300vh;
    }
    .flex{
        display:flex
    }
</style>