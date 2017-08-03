import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/Page'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
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
      name: 'Page',
      component: Page
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/page3',
      name: 'Page3',
      component: Page3
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
  lib.debug && console.debug(`OPEN: ${from.name}(${from.path}) -> ${to.name}(${to.path}) %o`, to)
  console.time('route')

  if (to.query && to.query.token) {
    api.setToken(to.query.token)
  }

  next()
})

export default router
