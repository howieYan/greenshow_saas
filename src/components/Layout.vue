<template>
    <div>
        <!--header-->
        <header class="header">
            <div class="logo_image float_left" @click="$router.push('/')">
                <div class="logo_icon float_left">
                    <img :src="'/static/favicon.ico'" alt="">
                </div>
                <div class="title float_left hover">高领秀管理后台</div>
            </div>
            <div class="width70 float_left">
                <div class="float_right user_id hover">
                    <div style="color:white;line-height:50px;">
                      <span>{{ account && account.player ? account.player.name : '欢迎' }}，</span>
                      <span @click="clickLogout">退出登录</span>
                    </div>
                </div>
            </div>
        </header>
        <!--nav-->
        <div class="nav" v-if="collapsed">
            <div class="nav_on_off" @click="collapse">
                <p>
                    <b class=""></b>
                </p>
            </div>
            <div class="nav_home">
                <ul class="home_index" v-for="(record,index) in team.list">
                    <li class="row">
                        <a class="col" @click="clickOpen(record)"  v-bind:class="{ 'back00C1DE' : collapsed === false }">
                            <ul class="nav_banner row">
                                <li class="bg_banner_icon" style=""><img :src="'/static/favicon.ico'"></li>
                                <li class="nav_banner_text col" style="padding-left:10px;">{{ record.name }}</li>
                            </ul>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!--折叠后的导航-->
        <div class="nav nav1" v-else>
            <div class="nav_on_off" @click="collapse">
                <p>
                    <b class=""></b>
                </p>
            </div>
            <div class="nav_home1" >
                <ul class="home_index" v-for="(record,index) in team.list">
                    <li class="row">
                        <a class="col" @click="clickOpen(record)" v-bind:class="{ 'back00C1DE' : index === temaindex }">
                          <div class="center-right">
                              <Tooltip v-bind:content="record.name" placement="right">
                                  <li class="bg_banner_icon" style="margin-left:11px;"><img :src="'/static/favicon.ico'"></li>
                              </Tooltip><br><br>
                          </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!--球队的 nav-->
        <section class="banner_nav_block" v-bind:style="{ 'left': collapsed ? '190px' : '60px' }">
            <div class="banner_nav" v-bind:style="{ 'left': nav_open ? '0px' : '-190px' }">
                <ul class="hover_li_fff">
                    <li class="banner_active_ff tema "  v-for="(itmeNav,index) in navName" v-bind:class="{ 'backfff' : index === navIndex}" v-on:click="openFrame(index)">
                        <a href="javascript:(0)">{{ itmeNav.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="locker"
            @click="navOpen" v-bind:style="{ 'left': nav_open ? '160px' : '0px' }" 
            :class="{ 'position_right'  : collapsed === true }">
            </div>
            <div class="width100 left180" v-bind:style="{ 'left': nav_open ? '180px' : '0px' }">
                <div style="height:100%;" class="">
                    <slot name="main">
                    </slot>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
import api from '../api'
import { account, team } from '../store'
import * as lib from '../lib'

export default {
  name: 'Layout',
  data () {
    return {
      name: 'LayoutV',
      account: account,
      team: team,
      collapsed: true,
      nav_open: true,
      nowIndex: -1,
      temaindex: 0,
      navIndex: 0,
      pageIndex: -1,
      title: [
        { name: '我的球队' },
        { name: '我的门户' }
      ],
      navName: [
        { name: '球队首页' },
        { name: '队员管理' },
        { name: '领导班子' },
        { name: '赛事活动' },
        { name: '球队新闻' },
        { name: '球队历史' },
        { name: '榜单' },
        { name: '荣誉' },
        { name: '相册' }
      ]
    }
  },
  computed: {
  },

  created () {
    lib.debugView && console.debug(`${this.name}.created`)
    this.loadData()
  },

  methods: {
    clickOpen (record) {
      if (this.collapsed === true) {
        this.nav_open = true
        this.collapsed = false
      }
      else {
        this.nav_open = true
      }
      lib.debugView && console.debug(`${this.name}.clickOpen: %o`, record)
      this.$router.push(`/team/${record.id}`)
    },

    clickLogout () {
      account.setToken('')
      this.$router.push(`/login`)
    },

    async loadData () {
      try {
        if (typeof team.list === 'undefined' || team.list.length <= 0) {
          let result = await api.listTeam('manager')
          lib.debugView && console.debug(`${this.name}.loadedTeams: %o`, result)
          team.list = api.isValid(result) ? result.data : {}
        }
        else {
          lib.debugView && console.debug(`${this.name}.loadedTeams.skip`)
        }

        if (typeof account.player === 'undefined' || account.player === null) {
          let result = await api.getPlayer(0)
          lib.debugView && console.debug(`${this.name}.loadedPlayer: %o`, result)
          account.player = api.isValid(result) ? result.data : {}
        }
        else {
          lib.debugView && console.debug(`${this.name}.loadedPlayer.skip`)
        }
        if (this.collapsed === true) {
          this.nav_open = false
        }
        else {
          this.nav_open = true
        }
      }
      catch (e) {
        console.error(e)
      }
    },
    openFrame (index) {
      this.collapsed = false
      this.nav_open = true
      if (index === 0) {
        this.$router.push({ path: '/' })
      }
      if (index === 1) {
        this.$router.push({ path: '/management' })
      }
      if (index === 2) {
        this.$router.push({ path: '/leadinggroup' })
      }
      if (index === 3) {
        this.$router.push({ path: '/CompetitionEvent' })
      }
      if (index === 4) {
        this.$router.push({ path: '/page4' })
      }
    },
    collapse () {
      if (this.collapsed === true) {
        this.collapsed = false
      }
      else {
        this.collapsed = true
      }
    },
    navOpen () {
      if (this.nav_open === true) {
        this.nav_open = false
        this.collapsed = true
      }
      else {
        this.nav_open = true
        this.collapsed = false
      }
    }
  },
  mounted () {
    lib.debugView && console.debug(`${this.name}.mounted`)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/reset.css';
@import '../css/index.css';
.hover_li_fff>li:hover{
    background: #f5f5f5;
}
h1 {
    height: 80px;
    font-size: 20px;
    padding-left: 20px;
    line-height: 80px;
    border: 1px solid #eee;
}
.checked>ul>.home_index_player{
    display:block;
}
.backfff{
    background:#fff!important;
}
ul.home_index_player{
    display:none;
}
.nav_home1  .ivu-btn .ivu-tooltip-inner{
  background:none;
}
.nav_home1 .ivu-tooltip-inner{
    display: none;
}
.back00C1DE{
  background:#00C1DE;
}
.tema_nav>li{
    height: 40px;
    line-height: 40px;
    padding-left: 70px;
}
.tema_nav>li:hover{
    background: #f5f5f5;
}
/*.home_index_player , .home_index_home{
    display:none;
}*/
.background_fff_player{
    background:#fff;
}
.nav_player{
    background: #FFFFFF;
    line-height: 40px;
    height: 40px;
    box-shadow: 0px 0px 3px #ccc;
}
.nav_player>li>b{
    padding-left: 60px;
    font-size: 14px;
}
.nav_player>li>div>div{
    padding-left: 50px;
    font-size: 12px;
}
.nav_player>li:nth-of-type(1):hover{
    background: #FFFFFF;
}
.nav_player>li:hover{
    background: #f5f5f5;
}
.fa_icon_bottom{
    background: url('/static/fa_icon_bottom.png')no-repeat center;
    background-size:40%;
    display: block;
    height: 40px;
    width: 40px;
}
.fa_icon_right{
    background: url('/static/fa_icon_right.png')no-repeat center;
    background-size:20%;
    display: block;
    height: 40px;
    width: 40px;
}
.active_nav_player{
    background: #FFFFFF;
}
.position_nav_player{
    display: none;
    width: 100%;
}
.position_nav_player>div{
    text-align: center;
    background: #eeeeee;
    color: #000000;
}
.position_nav_player>div:hover{
    background: #f5f5f5;
}
#uploading{
    width: 100%;
    height: 95%;
}
#show{
    width:100%; height:99%;
}
.product-navbar{
    width: 190px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    z-index: 2;
    overflow: hidden;
    background: #eeeeee;
}
.active_nav_player_bar{
    background: #00C1DE;
    color: #fff;
}
.nav_home1>.home_index{
  
}
</style>
