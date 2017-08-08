import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Team from '@/components/Team'
import PlayManagement from '@/components/PlayManagement'
import LeadingGroup from '@/components/LeadingGroup'
import CompetitionEvent from '@/components/CompetitionEvent'
import TemaNews from '@/components/TemaNews'
import TemaHistory from '@/components/TemaHistory'
import Login from '@/components/Login'
import Details from '@/components/Details'
import TemaList from '@/components/TemaList'
import Honor from '@/components/Honor'
import Photo from '@/components/Photo'

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
      path: '/playmanagement',
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
      path: '/temanews',
      name: 'TemaNews',
      component: TemaNews
    },
    {
      path: '/temahistory',
      name: 'TemaHistory',
      component: TemaHistory
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
      path: '/TemaList',
      name: 'TemaList',
      component: TemaList
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
    }
  ]
})

router.beforeEach((to, from, next) => {
  lib.debug && console.debug(`OPEN (${account.getToken()}): ${from.name}(${from.path}) -> ${to.name}(${to.path}) %o`, to)
  if (to.path === '/login' || account.getToken()) {
    next()
  }
  else {
    next({ path: '/login', query: { redirect: to.path } })
  }
})

export default router
