<template>
    <layout>
        <div slot="main" style="position:relative;">
          <div class="title_team">
            <div class="">
              <div class="center_top">
                  <div class="" id="widthAlert">
                    <Form  :label-width="80" style="margin-top:24px;">
                      <div class="event_name row">
                          <div class="col border_event">
                              <b v-model="nameSelect">{{ nameSelect }}</b>
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
                                <i-col class="layout-menu-left">
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
                                              <i-button type="ghost" size="small">提交</i-button>
                                          </div>
                                      </Transfer>
                                  </div>
                                  <!--分组-->
                                  <div v-show="!navGroupings">
                                      <Row style=" ">
                                          <Col span="11">
                                              <Card :bordered="false">
                                                  <div style="overflow-x: auto;"">
                                                    <div style="text-align:left;">
                                                         <Input  icon="ios-search" placeholder="请输入手机号码或姓名..."style="width:200px;"></Input>
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
                                          <Col span="11" offset="1">
                                              <Card :bordered="false">
                                                  <div style="width:100%;overflow-x: auto;">
                                                      <div style="text-align:left;">
                                                        <Checkbox-group v-model="disabledGroup">
                                                            <Checkbox label="显示真实姓名"></Checkbox>
                                                        </Checkbox-group>
                                                      </div>
                                                      <table class="table1 table1_1">
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
                                                                        <Option v-for="item in optionsSle" :key="item.label">{{ item.label }}</Option>
                                                                    </Select>
                                                                  </td>
                                                                  <td class="" >
                                                                      <Button type="error">删除</Button>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </div>
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
                                                <div>
                                                  <ul class="row" style="text-align:center;padding:15px 0;">
                                                    <li class="col">状态</li>
                                                    <li class="col">名次</li>
                                                    <li class="col">姓名</li>
                                                    <li class="col">性别</li>
                                                    <li class="col">昵称</li>
                                                    <li class="col">完成洞数</li>
                                                    <li class="col">杆差</li>
                                                    <li class="col">总杆</li>
                                                    <li class="col">差点</li>
                                                    <li class="col">净杆</li>
                                                    <li class="col">前九</li>
                                                    <li class="col">后九</li>
                                                    <li class="col">积分卡</li>
                                                  </ul>
                                                  <div>
                                                      <ul class="row activer" style="width:100%;text-align:center;padding:10px 0;" @click="openDelist(index)">
                                                        <li class="col">
                                                            <Select v-model="model3" style="widli:120px">
                                                                <Option v-for="item in optionsSles" :key="item.label">{{ item.label }}</Option>
                                                            </Select>
                                                        </li>
                                                        <li class="col">1</li>
                                                        <li class="col">张三</li>
                                                        <li class="col">男</li>
                                                        <li class="col">天佑</li>
                                                        <li class="col">F</li>
                                                        <li class="col">-2</li>
                                                        <li class="col">70</li>
                                                        <li class="col">9</li>
                                                        <li class="col">5</li>
                                                        <li class="col">35</li>
                                                        <li class="col">35</li>
                                                        <li class="col">2</li>
                                                      </ul>
                                                      <div v-show="!open">
                                                        <div style="">
                                                          <div class="row" style="border:1px solid #eee;height:50px;line-height:50px;">
                                                            <div class="col">
                                                                  <Form  :label-width="50">
                                                                    <Form-item label="前九：">
                                                                        <Input  placeholder="请输入前九"></Input>
                                                                    </Form-item>
                                                                  </Form>
                                                            </div>
                                                            <div class="col">
                                                                  <Form  :label-width="50">
                                                                    <Form-item label="后九：">
                                                                        <Input  placeholder="请输入后九"></Input>
                                                                    </Form-item>
                                                                  </Form>
                                                            </div>
                                                            <div class="col">
                                                                  <Form  :label-width="50">
                                                                    <Form-item label="总杆：">
                                                                        <Input  placeholder="请输入总杆"></Input>
                                                                    </Form-item>
                                                                  </Form>
                                                            </div>
                                                            <div class="col">
                                                                  <Form  :label-width="50">
                                                                    <Form-item label="差点：">
                                                                        <Input  placeholder="请输入差点"></Input>
                                                                    </Form-item>
                                                                  </Form>
                                                            </div>
                                                            <div class="col">
                                                                  <Form :label-width="80">
                                                                    <Form-item>
                                                                        <Button type="primary">提交</Button>
                                                                    </Form-item>
                                                                  </Form>
                                                            </div>

                                                          </div>
                                                          <div style="float:left;margin-top:30px;width: 100%;">
                                                            <ul class="row" style="text-align:center;width:95%;float:right;">
                                                                <li style="width:80px;">HOTE</li>
                                                                <li class="col">1</li>
                                                                <li class="col">2</li>
                                                                <li class="col">3</li>
                                                                <li class="col">4</li>
                                                                <li class="col">5</li>
                                                                <li class="col">6</li>
                                                                <li class="col">7</li>
                                                                <li class="col">8</li>
                                                                <li class="col">9</li>
                                                                <li class="col">OUT</li>
                                                                <li class="col">11</li>
                                                                <li class="col">12</li>
                                                                <li class="col">13</li>
                                                                <li class="col">14</li>
                                                                <li class="col">15</li>
                                                                <li class="col">16</li>
                                                                <li class="col">17</li>
                                                                <li class="col">18</li>
                                                                <li class="col">IN</li>
                                                                <li class="col">TOT</li>
                                                            </ul>
                                                            <Checkbox v-model="disabledSingle" style="float:left;padding-top:21px;"></Checkbox>
                                                             <ul class="row" style="text-align:center;width:95%;float:right;" v-bind:class ="{ 'opaacity' : disabledSingle === false }">
                                                                <li style="width:80px;">小秀</li>
                                                                <li class="col" v-for="n in 20">2</li>
                                                            </ul>
                                                          </div>
                                                          <div style="float:left;width: 100%;" v-bind:class ="{ 'opaacity' : disabledSingles === false }">
                                                            <Checkbox v-model="disabledSingles" style="float:left;"></Checkbox>
                                                             <ul class="row" style="text-align:center;width:95%;float:right;">
                                                                <li style="width:80px;">小秀</li>
                                                                <li class="col" v-for="n in 20">2</li>
                                                            </ul>
                                                          </div>
                                                          <!--没成绩时这是输入框-->
                                                          <div v-show="disabledGroup">
                                                             录入成绩：<Input  type="textarea" placeholder="请输入成绩"></Input>
                                                             <p style="opacity:0.4;">成绩后面要有空格间隔或"-"间隔</p>
                                                          </div>

                                                        </div>
                                                      </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                  </div>
                                  <!--奖项设置-->
                                  <div v-show="!navAwardss">
                                    <div style="border:1px solid #eee;">
                                      <Button type="ghost" icon="ios-plus-empty" style="margin:20px 20px 20px 1%;" @click="clickShow">添加</Button>
                                      <table class="table">
                                          <thead>
                                              <tr class="">
                                                  <th class="">奖项名称</th>
                                                  <th class="">奖品</th>
                                                  <th class="">获奖人</th>
                                                  <th class="">操作</th>
                                              </tr>
                                          </thead>
                                          <tbody id="list">
                                              <tr class="">
                                                  <td class="" prop="nickname">总冠</td>
                                                  <td class=""  prop="name">1#木</td>
                                                  <td class="">张三</td>
                                                  <td class="">
                                                      <Button type="ghost" icon="ios-plus-empty">选择获奖人</Button>
                                                  </td>
                                                  <td class="">
                                                      <Button type="info" @click="clickShow">编辑</Button>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                    </div>
                                    <!--添加-->
                                    <div class="el-dialog__wrapper" v-show="isShowAdd">
                                      <div class="center_top">
                                          <div class="alert_header" id="widthAlert">
                                            <div class="layui-layer-title">
                                                添加页
                                            </div>
                                            <div class="layui-layer-setwin" @click="isShowAdd=!isShowAdd">
                                                <a href="javascript:(0)" class="layui-layer-ico layui-layer-close layui-layer-close1"></a>
                                            </div>
                                            <div style="">
                                              <Form :model="formRight" label-position="right" :label-width="100">
                                                  <Form-item label="奖项名称：">
                                                      <Input v-model="formRight.input1" style="width:80%;"></Input>
                                                  </Form-item>
                                                  <Form-item label="奖品：">
                                                      <Input v-model="formRight.input2" style="width:80%;"></Input>
                                                  </Form-item>
                                                  <Form-item label="获奖人：">
                                                      <Input v-model="formRight.input3" style="width:80%;"></Input>
                                                  </Form-item>
                                                  <Form-item>
                                                      <Button type="primary">提交</Button>
                                                      <Button type="ghost" style="margin-left: 8px" @click="isShowAdd=!isShowAdd">取消</Button>
                                                  </Form-item>
                                              </Form>
                                              <div style="width:100%;height:50px;"></div>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                    <!-- 选择获奖人-->
                                    <div class="el-dialog__wrapper" v-show="!playM">
                                      <div class="center_top">
                                          <div class="alert_header" id="widthAlert">
                                            <div class="layui-layer-title">
                                                人员名单
                                            </div>
                                            <div class="layui-layer-setwin">
                                                <a href="javascript:(0)" class="layui-layer-ico layui-layer-close layui-layer-close1"></a>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                  <!--图片管理-->
                                  <div v-show="!navImages">
                                     图片管理
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
      nameSelect: '',
      dataList: [
        {
          value: '8月例赛',
          matchName: '8月例赛'
        },
        {
          value: '9月例赛',
          matchName: '9月例赛'
        },
        {
          value: '10月例赛',
          matchName: '10月例赛'
        },
        {
          value: '11月例赛',
          matchName: '11月例赛'
        },
        {
          value: '12月例赛',
          matchName: '12月例赛'
        },
        {
          value: '13月例赛',
          matchName: '13月例赛'
        }
      ],
      theme1: 'light',
      disabledGroup: false,
      loading: false,
      open: true,
      disabledSingle: true,
      disabledGroupss: true,
      navApplys: false,
      playM: true,
      redact: true,
      isShowAdd: false,
      navGroupings: true,
      disabledSingles: false,
      navLeads: true,
      navAwardss: true,
      navEvents: true,
      navImages: true,
      pageIndex: -1,
      model3: '0',
      data3: this.getMockData(),
      targetKeys3: this.getTargetKeys(),
      listStyle: {
        width: '40%',
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
          label: '张三'
        },
        {
          label: '李四'
        },
        {
          label: '老王'
        },
        {
          label: '曾维坚'
        },
        {
          label: '球童'
        }
      ],
      optionsSles: [
        {
          label: '正常(Field)'
        },
        {
          label: '未晋级(Misscut)'
        },
        {
          label: '弃权(WD)'
        },
        {
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
      this.navAwardss = true
      this.navEvents = true
      this.navLeads = true
      this.navImages = true
      this.navGroupings = true//  详情页的导航条
    },
    navGrouping () {
      this.navApplys = true
      this.navAwardss = true
      this.navEvents = true
      this.navLeads = true
      this.navImages = true
      this.navGroupings = false
    },
    navLead () {
      this.navApplys = true
      this.navGroupings = true
      this.navAwardss = true
      this.navEvents = true
      this.navImages = true
      this.navLeads = false
    },
    navAwards () {
      this.navApplys = true
      this.navGroupings = true
      this.navEvents = true
      this.navLeads = true
      this.navImages = true
      this.navAwardss = false
    },
    navEvent () {
      this.navApplys = true
      this.navGroupings = true
      this.navLeads = true
      this.navAwardss = true
      this.navImages = true
      this.navEvents = false
    },
    navImage () {
      this.navApplys = true
      this.navGroupings = true
      this.navLeads = true
      this.navAwardss = true
      this.navEvents = true
      this.navImages = false
    },
    getMockData () {
      let mockData = []
      for (let i = 1; i <= 20; i++) {
        mockData.push({
          key: i.toString(),
          label: '张林峰' + i,
          name: '张三' + i,
          nubmer: '9' + i,
          sex: '男' + i,
          city: '上海' + i
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
    toLoading () {
      this.loading = true
    },
    openDelist (index) {
      if (this.open === true) {
        this.open = false
      }
      else {
        this.open = true
      }
    },
    clickShow () {
      this.isShowAdd = true
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
@import '../css/reset.css';
.el-dialog__wrapper{
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  overflow: auto;
  margin: 0;
  background:rgba(0,0,0,0.5);
}
.alert_header{
    top: 20%;
    position: absolute;
    left: 50%;
    width: 30%;
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
.ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title{
  padding: 20px 10px;
}
ul.activer>li{
  height:32px;
  line-height:32px;
}
ul.activer:hover{
  background:#ebf7ff;
}
.ivu-input-wrapper{
  margin-bottom: 21px;
}
.ivu-btn-small{
  padding:2px 10px;
}
.table4{
  border:1px solid #ddd;
}
tr.activer:hover{
  background:#ebf7ff;
}
.opaacity{
  opacity:0.5;
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
.table1_1 th, .table1_1 td{
    padding: 10px;
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
.ivu-form-item{
  margin:0;
}
form{
  padding-top:8px;
}
</style>
