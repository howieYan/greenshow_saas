<template>
    <div>
        <!--header-->
        <header class="header">
            <div class="logo_image float_left">
                <div class="logo_icon float_left">
                    <img :src="'/static/favicon.ico'" alt="">
                </div>
                <div class="title float_left hover">高领秀管理后台</div>
            </div>
            <div class="width70 float_left">
                <div class="float_right user_id hover">
                    <span>小明</span>
                    <div class="position_abs">
                        <ul class="row">
                            <li class="col width80 height50 padding10 bg_hover">
                                <p class="">
                                    <img :src="'/static/ziliao.png'" alt="" class="width30">
                                </p>
                                <p>基本资料</p>
                            </li>
                            <li class="col width80 height50 padding10 bg_hover">
                                <p class="">
                                    <img :src="'/static/user.png'" alt="" class="width30">
                                </p>
                                <p>实名认证</p>
                            </li>
                            <li class="col width80 height50 padding10 bg_hover">
                                <p class="">
                                    <img :src="'/static/pass.png'" alt="" class="width30">
                                </p>
                                <p>安全设置</p>
                            </li>
                        </ul>
                        <ul><li class="line_height bg_hover">退出管理控制台</li></ul>
                    </div>
                </div>
                <div class="seek float_right hover">
                    <div class="row"><b class="bg_image col"></b><b class="col"style="line-height:50px;width:40px;">搜索</b></div>
                    <div class="input">
                        <input type="text" placeholder="搜索">
                        <b class="huiche"></b>
                    </div>

                </div>
            </div>
        </header>
        <!--nav-->
        <div class="nav" v-if="!collapsed">
            <div class="nav_on_off" @click="collapsed = !collapsed">
                <p>
                    <b class=""></b>
                </p>
            </div>
            <div class="nav_home" v-for="(item,index) in title" v-bind:class="{checked:index==nowIndex}" v-on:click="relationClick(index)">
                <ul class="">
                    <li class="nav_line_height row">
                        <i class="fa_icon "></i>
                        <a>{{ item.name }}</a>
                    </li>
                    <ul class="home_index home_index_player" v-for="record in team.list">
                        <li class="row">
                            <a href="javascript:(0)" class="col">
                                <ul class="nav_banner">
                                    <!-- <img :src="record.logo"> -->
                                    <li class="bg_banner_icon" style="width:30%;"></li>
                                    <li v-if="!collapsed" class="nav_banner_text" style="display:block">{{ record.name }}</li>
                                </ul>
                            </a>
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
        <div class="nav1" v-else>
            <div class="nav_on_off" @click="collapse">
                <p>
                    <b class=""></b>
                </p>
            </div>
            <div class="nav_home" v-for="(item,index) in title" v-bind:class="{checked:index==nowIndex}" v-on:click="relationClick(index)">
                <ul class="">
                    <li class="nav_line_height row">
                        <i class="fa_icon "></i>
                        <a>{{ item.name }}</a>
                    </li>
                    <ul class="home_index home_index_player" v-for="(items,index) in team.list">
                        <li class="row">
                            <a href="javascript:(0)" class="col">
                                <ul class="nav_banner">
                                    <li class="bg_banner_icon" v-bind:class="items.addClass" style="width:100%;"></li>
                                    <li class="nav_banner_text" style="display:none">{{ items.name }}</li>
                                </ul>
                            </a>
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
        <!--banner nav-->
        <section class="banner_nav_block">
            <div class="banner_nav banner_nav2" v-if="!nav_open" style="left:-190px;">
                <ul class="hover_li_fff">
                    <li class="banner_active_ff tema "  v-for="(itmeNav,index) in navName" v-bind:class="{backfff:index===navIndex}" v-on:click="openFrame(index)">
                        <a href="javascript:(0)">{{ itmeNav.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="banner_nav" v-else style="left:0px;">
                <ul class="hover_li_fff">
                    <li class="banner_active_ff tema "  v-for="(itmeNav,index) in navName" v-bind:class="{backfff:index==navIndex}" v-on:click="openFrame(index)">
                        <a href="javascript:(0)">{{ itmeNav.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="locker position_right" @click="navOpen"></div>
            <div class="width100 left180">
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
import { team } from '../store'
import * as lib from '../lib'

export default {
  name: 'Layout',
  data () {
    return {
      name: 'LayoutV',
      team: team,
      collapsed: true,
      nav_open: true,
      nowIndex: -1,
      navIndex: -1,
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
    async loadData () {
      try {
        if (typeof team.list === 'undefined' || team.list.length <= 0) {
          let result = await api.listTeam('manager')
          lib.debugView && console.debug(`${this.name}.loaded: %o`, result)
          team.list = api.isValid(result) ? result.data : {}
        }
        else {
          lib.debugView && console.debug(`${this.name}.load.skip`)
        }
      }
      catch (e) {
        console.error(e)
      }
    },

    relationClick: function (index) {
      this.nowIndex = index
    },
    openFrame: function (index) {
      this.pageIndex = index
      if (index === 0) {
        this.$router.push({ path: '/team' })
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
      }
      else {
        this.nav_open = true
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
.tema_nav{
    display: none;
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
</style>
