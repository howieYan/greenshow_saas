import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TeamPage from '@/components/TeamPage'
import Management from '@/components/Management'
import LeadingGroup from '@/components/LeadingGroup'
import CompetitionEvent from '@/components/CompetitionEvent'
import Page4 from '@/components/Page4'
import Page5 from '@/components/Page5'
import Login from '@/components/Login'
import Details from '@/components/Details'
import Page7 from '@/components/Page7'
import Page8 from '@/components/Page8'

// import HistoryForm from '@/components/HistoryForm'

import * as lib from '../lib'
import api from '../api'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/teamPage',
      name: 'TeamPage',
      component: TeamPage
    },
    {
      path: '/management',
      name: 'Management',
      component: Management
    },
    {
      path: '/leadinggroup',
      name: 'LeadingGroup',
      component: LeadingGroup
    },
    {
      path: '/competitionevent',
      name: 'CompetitionEvent',
      component: CompetitionEvent
    },
    {
      path: '/page4',
      name: 'Page4',
      component: Page4
    },
    {
      path: '/page5',
      name: 'Page5',
      component: Page5
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/page7',
      name: 'Page7',
      component: Page7
    },
    {
      path: '/page8',
      name: 'Page8',
      component: Page8
    }
    // {
    //   path: '/HistoryForm',
    //   name: 'HistoryForm',
    //   component: HistoryForm
    // }
  ]
})

router.beforeEach((to, from, next) => {
  lib.debug && console.debug(`OPEN (${api.getToken()}): ${from.name}(${from.path}) -> ${to.name}(${to.path}) %o`, to)
  if (to.path === '/login' || api.getToken()) {
    next()
  }
  else {
    next({ path: '/login', query: { redirect: to.path } })
  }
})

export default router
