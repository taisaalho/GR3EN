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
import PageNotFound from '../views/PageNotFound.vue'

//Admin 
import Ocurrence from '../views/Admin/OcurrenceView.vue'
import Ocurrences from '../views/Admin/OcurrencesView.vue'
import CreateActivity from '../views/Admin/CreateActivityView.vue'
import EditActivity from '../views/Admin/EditActivityView.vue'
import CreateBadge from '../views/Admin/CreateBadgeView.vue'
import EditBadge from '../views/Admin/EditBadgeView.vue'
import CreateTitle from '../views/Admin/CreateTitleView.vue'
import EditTitle from '../views/Admin/EditTitleView.vue'
import Admin from '../views/Admin/AdminView.vue'
import Badges from '../views/Admin/BadgesView.vue'
import Titles from '../views/Admin/TitlesView.vue'
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
  
    return '/'
  }

}

async function tokenChecker(){
  if(!localStorage.getItem('Token')){
    return false 
  }

  try {
    const res = await axios.get('http://127.0.0.1:3000/users/user-profile',{
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
      path: '/Admin/Ocurrences/:id',
      name: 'ocurrence',
      component:Ocurrence ,
      beforeEnter: [CheckIfAdmin]
    },
    {
      path: '/Admin/Ocurrences',
      name: 'ocurrences',
      component:Ocurrences ,
      beforeEnter: [CheckIfAdmin]
    },
    {
      path: '/Admin/CreateActivity',
      name: 'CreateActivity',
      component:CreateActivity ,
      beforeEnter: [CheckIfAdmin]
    },
    {
      path: '/Admin/EditActivity/:id',
      name: 'EditActivity',
      component:EditActivity ,
      beforeEnter: [CheckIfAdmin]
    },
    {
      path: '/Admin/EditBadge/:id',
      name: 'EditBadge',
      component:EditBadge ,
      beforeEnter: [CheckIfAdmin]
    },
    {
      path: '/Admin/CreateBadge',
      name: 'CreateBadge',
      component:CreateBadge ,
      beforeEnter: [CheckIfAdmin]
    },
    {
      path: '/Admin/EditTitle/:id',
      name: 'EditTitle',
      component:EditTitle ,
      beforeEnter: [CheckIfAdmin]
    },
    {
      path: '/Admin/CreateTitle',
      name: 'CreateTitle',
      component:CreateTitle ,
      beforeEnter: [CheckIfAdmin]
    },
    {
      path: '/Admin',
      name: 'Admin',
      component:Admin ,
      beforeEnter: [CheckIfAdmin]
    },
    {
      path: '/Admin/Titles',
      name: 'AdminTitles',
      component:Titles ,
      beforeEnter: [CheckIfAdmin]
    },
    {
      path: '/Admin/Badges',
      name: 'AdminBadges',
      component:Badges ,
      beforeEnter: [CheckIfAdmin]
    },
    {
      path: "/:catchAll(.*)",
      component: PageNotFound
    }


  
  ]
})

export default router
