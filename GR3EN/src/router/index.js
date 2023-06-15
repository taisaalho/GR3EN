import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'



import LandingPage from '../views/LandingPageView.vue'
import login from '../views/SignInView.vue'
import register from '../views/SignUpView.vue'
import occurrenceReport from '../views/OccurrenceReportView.vue'
import Profile from '../views/ProfileView.vue'
import Ranking from '../views/RankingView.vue'
import Activities from '../views/ActivitiesView.vue'
import Atividade from '../views/ActivityView.vue'

//Admin 
import Ocurrence from '../views/Admin/OcurrenceView.vue'
import Ocurrences from '../views/Admin/OcurrencesView.vue'

//Validation Functions

async function CheckIfAdmin() {
  const res = await tokenChecker()
  
  if(res.data.conselhoEco == true){
    return true
  }else{
    return '/'
  }
 
}

async function CheckIfLogged(){
  if(await tokenChecker()){
    return true
  }else{
    console.log('ca')
    return '/'
  }

}

async function tokenChecker(){
  if(!localStorage.getItem('Token')){
    return false 
  }

  try {
    console.log(localStorage.getItem('Token'))

    const res = await axios.get('https://elegant-slug-woolens.cyclic.app/users/user-profile',{
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('Token')
      }  
    })
   
    return res
    
  } catch (error) {
    return false 
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
      
    },
    {
      path: '/users/login',
      name: 'login',
      component: login,
    },
    {
      path: '/occurrenceReport',
      name: 'occurenceReport',
      component: occurrenceReport,
      beforeEnter: [CheckIfLogged]
    },
    {
      //Mudado para axios/back-end
      path: '/users/register',
      name: 'register',
      component: register,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: [CheckIfLogged]
    },
    
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking,
    },
    {
      path: '/activities',
      name: 'activities',
      component:Activities ,
    },
    {
      path: '/activities/:id',
      name: 'activity',
      component:Atividade ,
    },
    {
      path: '/ocurrence/:id',
      name: 'ocurrence',
      component:Ocurrence ,
      beforeEnter: [CheckIfAdmin]
    },
    {
      path: '/ocurrences',
      name: 'ocurrences',
      component:Ocurrences ,
      beforeEnter: [CheckIfAdmin]
    },


  
  ]
})

export default router
