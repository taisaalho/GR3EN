import { createRouter, createWebHistory } from 'vue-router'
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

function CheckIfAdmin() {
  if(!JSON.parse(localStorage.getItem('currentUser')).conselhoEco){
    return '/'
  }
}

function CheckIfLogged(){
  if(!localStorage.getItem('currentUser')){
    return '/'
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
      beforeEnter: [CheckIfLogged,CheckIfAdmin]
    },
    {
      path: '/ocurrences/',
      name: 'ocurrences',
      component:Ocurrences ,
      beforeEnter: [CheckIfLogged,CheckIfAdmin]
    },


  
  ]
})

export default router
