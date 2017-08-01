<template>
    <layout>
        <div slot="main" style="position:relative;height:100%;overflow: hidden;">
          <div class="title_team">
              <h1 style="width:100%;display: -webkit-box;">
                <Breadcrumb-item href="/page3">赛事活动</Breadcrumb-item>/
                <Dropdown trigger="click" placement="bottom-start" style="width:130px;text-align:center;">
                    <a href="javascript:void(0)">
                        8月例赛 
                        <Icon type="arrow-down-b"></Icon>
                    </a>
                    <Dropdown-menu slot="list">
                        <Dropdown-item v-for="n in 10">8月例赛</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>/
                <Breadcrumb-item href="/details">详情</Breadcrumb-item>
              </h1>
               <div class="">
              <div class="center_top">
                  <div class="" id="widthAlert">
                    <Form  :label-width="80" style="margin-top:24px;">
                      <div class="event_name row">
                          <div class="col border_event">
                                  <b>8月例赛</b>
                          </div>
                          <div class="col">
                              <b>2017-3-25</b>
                          </div>
                          <div class="col">
                              <b>上海美兰湖高尔夫球场</b>
                          </div>
                      </div>
                      <Form-item label="简述：">
                         <Input v-model="value5" type="textarea" disabled  placeholder="这场例赛" style="width:90%;"></Input>
                      </Form-item>
                    </Form>
                    <div class="row">
                        <Menu mode="vertical" :theme="theme1" active-name="1" style="width:120px;">
                              <Menu-item name="1">
                                  <Icon type="ios-paper"></Icon>
                                   报名管理
                              </Menu-item>
                              <Menu-item name="2">
                                  <Icon type="ios-people"></Icon>
                                   分组管理
                              </Menu-item>
                              <Menu-item name="3">
                                  <Icon type="ios-people"></Icon>
                                   领先版
                              </Menu-item>
                              <Menu-item name="4">
                                  <Icon type="settings"></Icon>
                                   奖项设置
                              </Menu-item>
                              <Menu-item name="5">
                                  <Icon type="social-designernews-outline"></Icon>
                                  活动新闻
                              </Menu-item>
                              <Menu-item name="6">
                                  <Icon type="images"></Icon>
                                  图片管理
                              </Menu-item>
                        </Menu>
                        <div class="col">

                        </div>
                    </div>
                   
                     
                  </div>
              </div>
            </div>
          </div>
          <!--详情-->
         
        </div>
    </layout>
</template>

<script>
export default {
  name: 'details',
  value3: 2,
  data () {
    return {
      theme1: 'light'
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
@import '../css/reset.css';
.ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title{
  padding: 20px 10px;
}
.title_team{
    width: 100%;
    background: #ffffff;
}
.title_team>h1 {
    height: 80px;
    font-size: 20px;
    padding-left: 20px;
    line-height: 80px;
    border: 1px solid #eee;
}
.title_card{
    background-color: #2d8cf0;
    height:30px;
    line-height: 30px;
    color:#ffffff;
    width:80px;
    text-align: right;
    padding-right: 10px;
    position: relative;
}
.ivu-tabs{
  border-left:1px solid  #dddee1;
  border-bottom:1px solid  #dddee1;
}
.alert_headers{

    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background: #fff;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 50px;
}
.layui-layer-title {
    padding: 0 80px 0 20px;
    height: 42px;
    line-height: 42px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    color: #333;
    overflow: hidden;
    background-color: #F8F8F8;
    border-radius: 2px 2px 0 0;
    text-align: -webkit-left;
}
.layui-layer-setwin {
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 0;
    line-height: initial;
}
.layui-layer-setwin .layui-layer-close1 {
    background-position: 1px -40px;
    cursor: pointer;
}
.layui-layer-setwin a{
    display: inline-block;
    vertical-align: top;
}
.layui-layer-setwin a{
    position: relative;
    width: 16px;
    height: 16px;
    margin-left: 10px;
    font-size: 12px;
    _overflow: hidden;
}
.layui-layer-ico {
    background: url(/static/icon.png)no-repeat center;
}
.event_name{
    height:30px;
    line-height:30px;
    margin-top:10px;
    margin-bottom:10px;
}
.border_event>div{
    text-align:center;
}
.border_event>b{
    border-left:2px solid #fc6621;
    padding-left: 10px;
    margin-left:12%;
}

</style>
