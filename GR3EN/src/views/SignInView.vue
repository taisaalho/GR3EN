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
    <div class="page">

        <NavBar />
        
        <v-card class="background">

        </v-card>
        





        <Footer />
            
            

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

    .background{
        background-color:rgba(0, 115, 98, 0.8);
        border-radius: 30px;
        height:60vh;
        margin-top: 10vh;
    }
    
</style>