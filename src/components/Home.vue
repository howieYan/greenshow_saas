<template>
    <layout :hasNav="false">
      <div slot="main">
        <h1>我管理的球队</h1>
        <div class="flex-container shorthand">
          <div class="flex-item" v-for="record in team.list" @click="clickOpen(record)">
            <div>{{ record.name }}</div>
            <img :src="record.logo" width="200px;">
          </div>
        </div>
      </div>
    </layout>
</template>

<script>
// import api from '../api'
import * as lib from '../lib'
import { setting, team } from '../store'

export default {
  name: 'Home',
  data () {
    return {
      name: 'HomeV',
      team: team,
      open: true
    }
  },

  computed: {
  },

  created () {
    lib.debugView && console.debug(`${this.name}.created`)
    setting.isNavOpen = false
  },

  methods: {
    clickOpen (record) {
      lib.debugView && console.debug(`${this.name}.clickOpen: %o`, record)
      this.$router.push(`/team/${record.id}`)
      setting.isNavOpen = true // Show navbar by default.
    },

    openInput () {
      this.open = false
    },
    closeInput () {
      this.open = true
    }
  },

  mounted () {
    lib.debugView && console.debug(`${this.name}.mounted`)
  }
}
</script>

<style scoped>
h1 {
    height: 80px;
    font-size: 20px;
    padding-left: 20px;
    line-height: 80px;
    border: 1px solid #eee;
}

.flex-container {
  padding: 0;
  margin: 0;
  list-style: none;

  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
}

.shorthand {
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-flex-direction: row;
  flex-direction: row;
}

.longhand {
  -webkit-flex-flow: wrap row;
  flex-flow: wrap row;
}

.flex-item {
  width: 300px;
  height: 300px;
  line-height: 100px;
  font-weight: bold;
  font-size: 2em;
  text-align: center;
}
</style>
