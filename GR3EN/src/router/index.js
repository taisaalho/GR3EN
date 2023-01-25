import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPageView.vue'
import SignIn from '../views/SignInView.vue'
import SignUp from '../views/SignUpView.vue'
import occurrenceReport from '../views/OccurrenceReportView.vue'
import Profile from '../views/ProfileView.vue'
import Ranking from '../views/RankingView.vue'
import Activities from '../views/ActivitiesView.vue'
import Atividade from '../views/ActivityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
    },
    {
      path: '/occurrenceReport',
      name: 'occurenceReport',
      component: occurrenceReport,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
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


  
  ]
})

export default router
