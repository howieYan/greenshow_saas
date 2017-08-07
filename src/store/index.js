import * as lib from '../lib'

/**
 * Account data.
 */
const account = {
  token: null,
  player: null,

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
  }
}

/**
 * View settings.
 */
const setting = {
  isNavOpen: false
}

/**
 * Team data.
 */
const team = {
  list: [],
  active: null
}

/**
 * Player data.
 */
const player = {
  list: [],
  active: null
}

export { account, setting, team, player }
