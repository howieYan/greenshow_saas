import * as lib from '../lib'

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

const layout = {
  isNavOpen: true
}

const team = {
  list: [],
  active: null
}

const player = {
  list: [],
  active: null
}

export { account, layout, team, player }
