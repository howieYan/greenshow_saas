<template>
    <div style="height:100%;">
        <div class="layout" :class="{'layout-hide-text': spanLeft < 3}">
            <Row type="flex">
                <i-col :span="spanLeft" class="layout-menu-left">
                    <Menu active-name="1" theme="dark" width="auto">
                        <div class="layout-logo-left">
                            <a href="http://www.golfgreenshow.com/greenshow.html" class="row">
                                <img :src="'/static/favicon.ico'" alt="" >
                                <b class="col">高领秀管理后台</b>
                            </a>
                        </div>
                       <Menu-item v-bind:name="item.index" v-for="(item,index) in title">
                            <Icon v-bind:type="item.type" :size="iconSize" style="padding-left:22%;padding-top:10px;"></Icon>
                            <span class="layout-text">{{ item.name }}</span>
                            <ul class="home_index home_index_player" v-for="(items,index) in list">
                                <li class="row">
                                    <a href="javascript:(0)" class="col">
                                        <ul class="nav_banner">
                                            <li class="bg_banner_icon" v-bind:class="items.addClass" style=""></li>
                                            <li class="nav_banner_text" style="display:block">{{ items.name }}</li>
                                        </ul>
                                    </a>
                                </li>
                            </ul>
                        </Menu-item>
                        <Menu-item name="2">
                            <Icon type="ios-keypad" :size="iconSize"></Icon>
                            <span class="layout-text">选项 2</span>
                        </Menu-item>
                        <Menu-item name="3">
                            <Icon type="ios-analytics" :size="iconSize"></Icon>
                            <span class="layout-text">选项 3</span>
                        </Menu-item>
                    </Menu>
                </i-col>
                <i-col :span="spanRight">
                    <div class="layout-header">
                        <i-button type="text" @click="toggleClick">
                            <Icon type="navicon" size="32"></Icon>
                        </i-button>
                    </div>
                    <div class="layout-breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb-item href="#">首页</Breadcrumb-item>
                            <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                            <Breadcrumb-item>某应用</Breadcrumb-item>
                        </Breadcrumb>
                    </div>
                    <div class="layout-content">
                        <div class="layout-content-main">内容区域</div>
                    </div>
                    <div class="layout-copy">
                        2011-2016 &copy; TalkingData
                    </div>
                </i-col>
            </Row>
        </div>
      
    </div>
</template>
<script>
  export default {
    data () {
      return {
        spanLeft: 3,
        spanRight: 21,
        title: [
          { name: '我的球队', type: 'ios-navigate' },
          { name: '我的门户', type: 'ios-keypad' }
        ],
        list: [
          { name: '高尔夫', addClass: 'bg_banner_icon0' },
          { name: '和平鸽', addClass: 'bg_banner_icon1' },
          { name: '长青高球队V', addClass: 'bg_banner_icon2' },
          { name: '上海高尔夫', addClass: 'bg_banner_icon3' },
          { name: '浦东高尔夫', addClass: 'bg_banner_icon4' }
        ]
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 1 ? 28 : 24
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 3) {
          this.spanLeft = 1
          this.spanRight = 23
        }
        else {
          this.spanLeft = 3
          this.spanRight = 21
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/main.css';
html,body{
    height:100%;
}
.nav_banner{
    height: 55px;
    line-height: 55px;
}
.nav_banner_text{
    color:#fff;
}
.row {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.col {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
}
.bg_banner_icon{
    display: block;
    width: 40%;
    height: 55px;
    float: left;
    overflow: hidden;
}
.bg_banner_icon0 {
    background: url(/static/banner.png)no-repeat center;
    background-size: 50% 50%;
}
.bg_banner_icon1{
    background: url('/static/hezuo.png')no-repeat  center;
    background-size: 50% 50%;
}
.bg_banner_icon2{
    background: url('/static/xilie.png')no-repeat  center;
    background-size: 50% 50%;
}
.bg_banner_icon3{
    background: url('/static/paiming.png')no-repeat  center;
    background-size: 50% 50%;
}
.bg_banner_icon4{
    background: url('/static/tuijian.png')no-repeat  center;
    background-size: 50% 50%;
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height:100%;
}
.layout-breadcrumb{
    padding: 10px 15px 0;
}
.layout-logo-left>a{
    height:60px;
    overflow: hidden;
}
.layout-logo-left>a>img{
    width:40px;
    margin-left:10px;
    margin-top:10px;
    margin-right:10px;
    height:40px;

}
.layout-logo-left>a>b{
    display:block;
    height:60px;
    font-size:16px;
    color:#fff;
    text-align:center;
    border-left:1px solid #000;
    line-height:60px;
    font-weight: inherit;
}
.layout-content{
    height:100%;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}
.layout-content-main{
    padding: 10px;
}
.layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
.layout-menu-left{
    background: #464c5b;
}
.layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-logo-left{
    width: 100%;
    height: 60px;
    border-radius: 3px;
    overflow: hidden;
}
.layout-ceiling-main a{
    color: #9ba7b5;
}
.layout-hide-text .layout-text{
    display: none;
}
.ivu-col{
    transition: width .2s ease-in-out;
}
</style>
