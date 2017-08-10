import * as lib from '../lib'

/**
 * Account data.
 */
const account = {
  token: null,
  member: null,

  getToken () {
    if (this.token === null) {
      this.token = localStorage.getItem('token')
      lib.debugVuex && console.debug(`Account.loadToken: ${this.token}`)
    }
    return this.token
  },

  setToken (token) {
    lib.debugVuex && console.debug(`Account.setToken: ${token}`)
    this.token = token
    localStorage.setItem('token', this.token)
  },

  reset () {
    this.setToken(null)
    this.member = null
  }
}

/**
 * View settings.
 */
const setting = {
  isNavOpen: false,
  navIndex: 0,

  reset () {
    this.isNavOpen = false
  }
}

/**
 * Team data.
 */
const team = {
  list: [],
  active: null,

  reset () {
    this.list = []
    this.active = null
  }
}

/**
 * Player data.
 */
const member = {
  list: [],
  active: null,

  reset () {
    this.list = []
    this.active = null
  }
}

function reset () {
  lib.debugVuex && console.debug(`Store.reset all`)
  account.reset()
  setting.reset()
  team.reset()
  member.reset()
}

export { account, setting, team, member, reset }
