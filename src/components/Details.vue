<template>
    <layout>
        <div slot="main" style="position:relative;">
          <div class="title_team">
              <h1 style>
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
                         <Input type="textarea" disabled  placeholder="这场例赛" style="width:90%;"></Input>
                      </Form-item>
                    </Form>
                    <div class="">
                          <div class="layout">
                            <Row type="flex" class="row">
                                <i-col :span="spanLeft" class="layout-menu-left">
                                    <Menu active-name="1" width="auto">
                                        <div class="layout-logo-left"></div>
                                        <Menu-item name="1">
                                            <Icon type="ios-paper"></Icon>
                                            <span class="layout-text" @click="navApply">报名管理</span>
                                        </Menu-item>
                                        <Menu-item name="2">
                                            <Icon type="ios-people"></Icon>
                                            <span class="layout-text" @click="navGrouping">分组管理</span>
                                        </Menu-item>
                                        <Menu-item name="3">
                                            <Icon type="ios-people"></Icon>
                                            <span class="layout-text" @click="navLead">领先版</span>
                                        </Menu-item>
                                        <Menu-item name="4">
                                            <Icon type="settings"></Icon>
                                            <span class="layout-text" @click="navAwards">奖项设置</span>
                                        </Menu-item>
                                        <Menu-item name="5">
                                            <Icon type="social-designernews-outline"></Icon>
                                            <span class="layout-text"  @click="navEvent">活动新闻</span>
                                        </Menu-item>
                                        <Menu-item name="6">
                                            <Icon type="images"></Icon>                                            
                                            <span class="layout-text" @click="navImage">图片管理</span>
                                        </Menu-item>
                                    </Menu>
                                </i-col>
                                <div class="col" style="width:100%;">
                                  <!--报名-->
                                  <div v-show="!navApplys" style="">
                                      <Transfer
                                          :data="data3"
                                          :target-keys="targetKeys3"
                                          :list-style="listStyle"
                                          :render-format="render3"
                                          :titles="['未报名的人','正在报名的人']"
                                          filterable
                                          @on-change="handleChange3">
                                          <div :style="{float: 'right', margin: '5px'}">
                                              <i-button type="ghost" size="small" @click="reloadMockData">提交</i-button>
                                          </div>
                                      </Transfer>        
                                  </div>
                                  <!--分组-->
                                  <div v-show="!navGroupings">
                                      <Row style="">
                                          <Col span="9">
                                              <Card :bordered="false">
                                                  <div style="overflow-x:auto;">
                                                    <div style="text-align:left;">
                                                         <Input  icon="ios-search" placeholder="请输入手机号码或姓名..."></Input>
                                                    </div>
                                                    <table class="table1">
                                                        <thead>
                                                            <tr class="">
                                                                <th class=""style="padding-left:50px;"></th>
                                                                <th class="" v-for="item in tableText">{{ item }}</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="list">
                                                            <tr class="activer" v-for="item in checkData" >
                                                                <td class=" width_50px">
                                                                    <Checkbox-group v-model="disabledGroupss">
                                                                        <Checkbox label="" ></Checkbox>
                                                                    </Checkbox-group>
                                                                </td>
                                                                <td class="" prop="nickname">Tony_z</td>
                                                                <td class=""  prop="name">张凌峰</td>
                                                                <td class="">9</td>
                                                                <td class="" >
                                                                   队员
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                  </div>
                                              </Card>
                                          </Col>
                                          <Col span="14" offset="1">
                                              <Card shadow>
                                                     <div style="width:100%;overflow-x: auto;">
                                                        <div style="text-align:left;">
                                                          <Checkbox-group v-model="disabledGroup">
                                                              <Checkbox label="显示真实姓名"></Checkbox>
                                                          </Checkbox-group>
                                                        </div>
                                                        <table class="table1">
                                                            <thead>
                                                                <tr class="">
                                                                    <th>组号</th>
                                                                    <th class="">开球洞数</th>
                                                                    <th class="" >开球时间</th>
                                                                    <th class="" >球员1</th>
                                                                    <th class="" >球员2</th>
                                                                    <th class="" >球员3</th>
                                                                    <th class="" >球员4</th>
                                                                    <th class="" >记分员</th>
                                                                    <th class="" >操作</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="list">
                                                                <tr class="" v-for="(item,index) in checkDatas">
                                                                    <td class="">{{ index + 1 }}</td>
                                                                    <td class="">1#</td>
                                                                    <td class="">10:00</td>
                                                                    <td class="">
                                                                        <strong v-show="disabledGroup">张林峰</strong>
                                                                        <strong v-show="!disabledGroup">***</strong>
                                                                        <Icon type="trash-a" style="display: block;"></Icon>
                                                                    </td>
                                                                    <td class="">
                                                                        <strong v-show="disabledGroup">张林峰</strong>
                                                                        <strong v-show="!disabledGroup">***</strong>
                                                                        <Icon type="trash-a" style="display: block;"></Icon>
                                                                    </td>
                                                                    <td class="">
                                                                        <strong v-show="disabledGroup">张林峰</strong>
                                                                        <strong v-show="!disabledGroup">***</strong>
                                                                        <Icon type="trash-a" style="display: block;"></Icon>
                                                                    </td>
                                                                    <td class="">
                                                                        <strong v-show="disabledGroup">张林峰</strong>
                                                                        <strong v-show="!disabledGroup">***</strong>
                                                                        <Icon type="trash-a" style="display: block;"></Icon>
                                                                    </td>
                                                                    <td class="">
                                                                      <Select v-model="model1" style="width:80px;">
                                                                          <Option v-for="item in optionsSle">{{ item.label }}</Option>
                                                                      </Select>
                                                                    </td>
                                                                    <td class="" >
                                                                        <Poptip placement ="top-end"
                                                                            confirm
                                                                            trigger="hover"
                                                                            title="您确认删除这条内容吗？"
                                                                            @on-ok="ok"
                                                                            @on-cancel="cancel">

                                                                            <Button type="error">删除</Button>

                                                                        </Poptip>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                      </div>
                                                  <!--<div style="text-align:center;">
                                                     
                                                  </div>
                                                  <div style="text-align:center;">
                                                      <ul class="row height_li">
                                                          <li class="col">
                                                            1
                                                          </li>
                                                          <li class="col">
                                                            1#
                                                          </li>
                                                          <li class="col">
                                                            10:00
                                                          </li>
                                                          <li class="col">
                                                            <strong v-show="disabledGroup">张林峰</strong>
                                                            <strong v-show="!disabledGroup">***</strong>
                                                          </li>
                                                          <li class="col">
                                                            <strong v-show="disabledGroup">张林峰</strong>
                                                            <strong v-show="!disabledGroup">***</strong>
                                                          </li>
                                                          <li class="col">
                                                            <strong v-show="disabledGroup">张林峰</strong>
                                                            <strong v-show="!disabledGroup">***</strong>
                                                          </li>
                                                          <li class="col">
                                                            <strong v-show="disabledGroup">张林峰</strong>
                                                            <strong v-show="!disabledGroup">***</strong>
                                                          </li>
                                                          <li class="col">
                                                            <Select v-model="model2" style=";">
                                                                <Option v-for="item in optionsSle">{{ item.label }}</Option>
                                                            </Select>
                                                          </li>
                                                          <li class="col">
                                                            操作
                                                          </li>
                                                      </ul>
                                                  </div>-->
                                              </Card>
                                          </Col>
                                      </Row>
                                  </div>
                                  <!--领先版-->
                                  <div v-show="!navLeads">
                                    <Row>
                                        <Col span="23">
                                            <Card>
                                               <div style="overflow-x:auto;">
                                                <div class="row">
                                                    <div class="col">
                                                        <div style="text-align:left;">
                                                             <Input  icon="ios-search" placeholder="请输入手机号码或姓名..." ></Input>
                                                        </div>
                                                    </div>
                                                    <div class="col" style="text-align:center;">
                                                        上次更新：2017-8-1  10:00
                                                    </div>
                                                    <div class="col" style="text-align:center;">
                                                        <Button type="primary" :loading="loading" @click="toLoading">
                                                            <span v-if="!loading">刷新</span>
                                                            <span v-else>刷新中...</span>
                                                        </Button>
                                                    </div>
                                                </div>
                                               
                                                <table class="table1">
                                                    <thead>
                                                        <tr class="">
                                                            <th class="">状态</th>
                                                            <th class="">名次</th>
                                                            <th class="">姓名</th>
                                                            <th class="">性别</th>
                                                            <th class="">昵称</th>
                                                            <th class="">完成洞数</th>
                                                            <th class="">杆差</th>
                                                            <th class="">总杆</th>
                                                            <th class="">差点</th>
                                                            <th class="">净杆</th>
                                                            <th class="">前九</th>
                                                            <th class="">后九</th>
                                                            <th class="">积分卡张数</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="list">
                                                        <tr class="activer">
                                                            <td class="">
                                                                <Select v-model="model3" style="width:120px">
                                                                    <Option v-for="item in optionsSles" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                                                </Select>
                                                            </td>
                                                            <td class="">{{ index+1 }}</td>
                                                            <td class="">张三</td>
                                                            <td class="">男</td>
                                                            <td class="">天佑</td>
                                                            <td class="">F</td>
                                                            <td class="">-2</td>
                                                            <td class="">70</td>
                                                            <td class="">9</td>
                                                            <td class="">5</td>
                                                            <td class="">35</td>
                                                            <td class="">35</td>
                                                            <td class="">1</td>
                                                        </tr>
                                                    </tbody>
                                                    
                                                </table>
                                              </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                  </div>
                                </div>
                            </Row>
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
  data () {
    return {
      theme1: 'light',
      disabledGroup: false,
      loading: false,
      disabledGroupss: true,
      navApplys: false,
      navGroupings: true,
      navLeads: true,
      navAwardss: true,
      navEvents: true,
      navImages: true,
      model3: '0',
      data3: this.getMockData(),
      targetKeys3: this.getTargetKeys(),
      listStyle: {
        width: '480px',
        height: '400px'
      },
      model1: '0',
      model2: '0',
      formRight: {
        input1: '',
        input2: '',
        input3: '',
        input4: ''
      },
      tableText: ['昵称', '姓名', '差点', '身份'],
      optionsSle: [
        {
          value: '0',
          label: '张三'
        },
        {
          value: '1',
          label: '李四'
        },
        {
          value: '2',
          label: '老王'
        },
        {
          value: '3',
          label: '曾维坚'
        },
        {
          value: '4',
          label: '球童'
        }
      ],
      optionsSles: [
        {
          value: '0',
          label: '正常(Field)'
        },
        {
          value: '1',
          label: '未晋级(Misscut)'
        },
        {
          value: '2',
          label: '弃权(WD)'
        },
        {
          value: '3',
          label: '取消资格(DQ)'
        }
      ],
      allData: [
        { parCheck: false },
        { text: '全选' }
      ],
      checkData: [
        {
          isCheck: false
        },
        {
          isCheck: false
        },
        {
          isCheck: false
        },
        {
          isCheck: false
        },
        {
          isCheck: false
        }
      ],
      allDatas: [
        { parCheck: false },
        { text: '全选' }
      ],
      checkDatas: [
        {
          isCheck: false
        },
        {
          isCheck: false
        },
        {
          isCheck: false
        },
        {
          isCheck: false
        },
        {
          isCheck: false
        }
      ]
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    allSelect () {
      var vm = this
      vm.checkData.forEach(item => {
        item.isCheck = vm.allData.parCheck
      })
    },
    singleSelect () {
      var vm = this
      var selectData = vm.checkData.filter(item => {
        return item.isCheck === true
      })
      selectData.length === vm.checkData.length ? vm.allData.parCheck = true : vm.allData.parCheck = false
    },
    allSelects () {
      var vm = this
      vm.checkDatas.forEach(item => {
        item.isCheck = vm.allDatas.parCheck
      })
    },
    singleSelects () {
      var vm = this
      var selectData = vm.checkDatas.filter(item => {
        return item.isCheck === true
      })
      selectData.length === vm.checkDatas.length ? vm.allDatas.parCheck = true : vm.allDatas.parCheck = false
    },
    navApply () {
      this.navApplys = false
      this.navLeads = true
      this.navGroupings = true
    },
    navGrouping () {
      this.navApplys = true
      this.navLeads = true
      this.navGroupings = false
    },
    navLead () {
      this.navApplys = true
      this.navGroupings = true
      this.navLeads = false
    },
    navAwards () {
    },
    navEvent () {
    },
    navImage () {
    },
    getMockData () {
      let mockData = []
      for (let i = 1; i <= 20; i++) {
        mockData.push({
          key: i.toString(),
          label: '姓名：张林峰' + i,
          name: '昵称：张三' + i,
          nubmer: '差点：9' + i,
          sex: '性别：男' + i,
          city: '城市：上海' + i
        })
      }
      return mockData
    },
    getTargetKeys () {
      return this.getMockData()
    },
    handleChange3 (newTargetKeys) {
      this.targetKeys3 = newTargetKeys
    },
    render3 (item) {
      return item.label + ' - ' + item.name + ' - ' + item.nubmer + ' - ' + item.sex + ' -' + item.city
    },
    reloadMockData () {
      this.targetKeys3 = this.getTargetKeys()
    },
    ok () {
      this.$Message.info('点击了确定')
    },
    cancel () {
      this.$Message.info('点击了取消')
    },
    toLoading () {
      this.loading = true
    }
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

.ivu-input-wrapper{
  margin-bottom: 21px;
}
.ivu-btn-small{
  padding:2px 10px;
}
/*.table{
  border-left:1px solid #eee;
  border-right: 1px solid #eee;
}*/
tr.activer:hover{
  background:#ebf7ff;
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
.height_li>li{
   height:52px;line-height:52px;
}
.clounm100{
  border:1px solid #eee;
  padding-left:20px;
  padding-top:20px;
}
.table1 th, .table1 td{
    padding: 10px 20px;
    line-height: 30px;
    border-left: 0;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.table th, .table td{
    padding: 10px 20px;
    line-height: 30px;
    border-bottom: 1px solid #ddd;
    border-left: 0;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.border_none>.table th,.border_none>.table td{
    padding: 10px 10px;
    line-height: 30px;
    border-left: 0;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border:0;
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
@media all and (min-width: 376px)and (max-width:768px){
  .clounm2 {
    border: 1px solid #eee;
    padding: 10px 0;
  }
}
.line_padd5{
    padding:10px 8px!important;
}
.ivu-table-fixed{
    background:#fff;
    top:0!important;
}
.ivu-card-body{
  padding: 0px!important;  
}
</style>
