import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Team from '@/components/Team'
import PlayManagement from '@/components/PlayManagement'
import LeadingGroup from '@/components/LeadingGroup'
import CompetitionEvent from '@/components/CompetitionEvent'
import TeamNews from '@/components/TeamNews'
import TeamHistory from '@/components/TeamHistory'
import Login from '@/components/Login'
import Details from '@/components/Details'
import TeamList from '@/components/teamList'
import Honor from '@/components/Honor'
import Photo from '@/components/Photo'
import Photodetails from '@/components/Photodetails'
// import HistoryForm from '@/components/HistoryForm'

import * as lib from '../lib'
import { account } from '../store'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/team/:id',
      name: 'Team',
      component: Team
    },
    {
      path: '/playmanagement/:id',
      name: 'PlayManagement',
      component: PlayManagement
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
      path: '/teamnews',
      name: 'TeamNews',
      component: TeamNews
    },
    {
      path: '/teamhistory',
      name: 'TeamHistory',
      component: TeamHistory
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
      path: '/teamList',
      name: 'TeamList',
      component: TeamList
    },
    {
      path: '/honor',
      name: 'Honor',
      component: Honor
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/photodetails',
      name: '/Photodetails',
      component: Photodetails
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.time('route')
  lib.debug && console.debug(`OPEN (${account.getToken()}): ${from.name}(${from.path}) -> ${to.name}(${to.path}) %o`, to)
  if (to.path === '/login' || account.getToken()) {
    next()
  }
  else {
    next({ path: '/login', query: { redirect: to.path } })
  }
})

router.afterEach(route => {
  console.timeEnd('route')
  lib.debug && console.debug('OPENED: %o', route)
})

export default router
