<template>
    <layout>
      <div slot="main">
        <div v-if="team && team.list" v-for="record in team.list" @click="clickOpen(record)">
            <h1>{{ record.name }}</h1>
            <img :src="record.logo" width="200px;">
        </div>
      </div>
    </layout>
</template>

<script>
// import api from '../api'
import * as lib from '../lib'
import { team } from '../store'

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
  },

  methods: {
    clickOpen (record) {
      lib.debugView && console.debug(`${this.name}.clickOpen: %o`, record)
      this.$router.push(`/team/${record.id}`)
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
@import '../../font-awesome-4.7.0/css/font-awesome.min.css'
</style>
