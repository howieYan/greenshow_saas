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
                  <div class="" id="widthAlert" style="overflow: hidden;">
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
                    <div class="" style="display: -webkit-inline-box;">
                        <Menu mode="vertical" :theme="theme1" active-name="1" style="width:120px;">
                              <Menu-item name="1" inline>
                                  <Icon type="ios-paper"></Icon>
                                  <div style="display: -webkit-inline-box;" @click="navApply">报名管理</div>
                              </Menu-item>
                              <Menu-item name="2" inline>
                                  <Icon type="ios-people"></Icon>
                                  <div style="display: -webkit-inline-box;" @click="navGrouping">分组管理</div>
                              </Menu-item>
                              <Menu-item name="3" inline>
                                  <Icon type="ios-people"></Icon>
                                  <div style="display: -webkit-inline-box;" @click="navLead">领先版</div>
                              </Menu-item>
                              <Menu-item name="4" inline>
                                  <Icon type="settings"></Icon>
                                  <div style="display: -webkit-inline-box;" @click="navAwards">奖项设置</div>
                              </Menu-item>
                              <Menu-item name="5" inline>
                                  <Icon type="social-designernews-outline"></Icon>
                                  <div style="display: -webkit-inline-box;" @click="navEvent">活动新闻</div>
                              </Menu-item>
                              <Menu-item name="6" inline>
                                  <Icon type="images"></Icon>
                                  <div style="display: -webkit-inline-box;" @click="navImage">图片管理</div>
                              </Menu-item>
                        </Menu>
                        
                        <div class="" style="overflow-x: auto;">
                          <!--报名-->
                          <div v-show="!navApplys" style="display: -webkit-inline-box;overflow-x: auto;">
                              <div class="clounm2" style="overflow-x: auto;">
                                  <div>
                                      <Input  icon="ios-search" placeholder="请输入昵称或姓名..." style="width: 300px"></Input>
                                  </div>
                                  <div style="width:100%;overflow-x: auto;position: relative;">
                                    <div class="ivu-table-fixed">
                                          <table class="table">
                                            <thead>
                                              <tr class="">
                                                    <th class="width_50px line_padd5" style="text-align:left">
                                                       <input type="checkbox" name="" id="allId" v-model="allData.parCheck" @change="allSelect()">
                                                    全选
                                                    </th>
                                                </tr>
                                                 <tr class="" v-for="item in checkData">
                                                    <th class="width_50px line_padd5" style="text-align:left">
                                                      <input type="checkbox" name="" @change="singleSelect()" v-model="item.isCheck" :id="item.id">
                                                      <label :for="item.id"></label>
                                                    </th>
                                                </tr>
                                                
                                            </thead>
                                          </table>  
                                    </div>
                                    <div style="">
                                        <table class="table">
                                            <thead>
                                                <tr class="">
                                                    <th class=""style=""></th>
                                                    <th class="">姓名</th>
                                                    <th class="">昵称</th>
                                                    <th class="">差点</th>
                                                    <th class="">性别</th>
                                                    <th class="">城市</th>
                                                </tr>
                                            </thead>
                                            <tbody id="list">
                                                <tr class="activer" v-for="item in checkData" >
                                                  <td class="width_50px" style="padding-left:34px;"></td>
                                                  <td class="">张凌峰</td>
                                                  <td class="">张三</td>
                                                  <td class="">9</td>
                                                  <td class="">男</td>
                                                  <td class="" >上海 </td> 
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                  </div>
                                  <Button type="info" style="margin:20px 20px 10px 0;width:80px">确认添加</Button>
                              </div>
                              <div class="clounm2" style="margin-left:20px;overflow-x: auto;">
                                  <h3 style="text-align:center;line-height: 32px;">选择的报名人员</h3>
                                  <div>
                                    <Checkbox-group v-model="disabledGroup">
                                        <Checkbox label="显示姓名（默认显示昵称）"></Checkbox>
                                    </Checkbox-group>
                                  </div>
                                  <div style="position: relative;">
                                    <div class="ivu-table-fixed">
                                        <table class="table">
                                          <thead>
                                            <tr class="">
                                                  <th class="width_50px line_padd5" style="text-align:left">
                                                     <input type="checkbox" name="" id="allId" v-model="allDatas.parCheck" @change="allSelects()">
                                                  全选
                                                  </th>
                                              </tr>
                                               <tr class="" v-for="item in checkDatas">
                                                  <th class="width_50px line_padd5" style="text-align:left">
                                                    <input type="checkbox" name="" @change="singleSelects()" v-model="item.isCheck" :id="item.id">
                                                    <label :for="item.id"></label>
                                                  </th>
                                              </tr>
                                              
                                          </thead>
                                        </table>
                                    </div>
                                  </div>
                                  <div style="width:100%;overflow-x: auto;">
                                    <table class="table">
                                        <thead>
                                            <tr class="">
                                                <th class=""style=""></th>
                                                <th class="">姓名 </th>
                                                <th class="" >昵称</th>
                                                <th class="" >职称</th>
                                                <th class="" >差点</th>
                                                <th class="" >性别</th>
                                                <th class="" >报名时间</th>
                                            </tr>
                                        </thead>
                                        <tbody id="list">
                                            <tr class="" v-for="item in checkDatas">
                                                <td class="width_50px" style="padding-left:34px;"></td>
                                                <td class="" v-show="disabledGroup">张凌峰</td>
                                                <td class="" v-show="!disabledGroup">***</td>
                                                <td class="">张三</td>
                                                <td class="">队员</td>
                                                <td class="">9</td>
                                                <td class="">男</td>
                                                <td class="" >
                                                  2017-7-12
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                  </div>
                                  <Button type="info" style="float:right;margin:20px 20px 10px 0;">删除</Button>
                              </div>
                          </div>
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
      navApplys: false,
      navGroupings: true,
      navLeads: true,
      navAwardss: true,
      navEvents: true,
      navImages: true,
      model1: '0',
      model2: '0',
      formRight: {
        input1: '',
        input2: '',
        input3: '',
        input4: ''
      },
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
.table{
  border-left:1px solid #eee;
  border-right: 1px solid #eee;
}
tr.activer:hover{
  background:#ebf7ff;
}
thead{
  border-top:1px solid #eee;
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

.clounm100{
  border:1px solid #eee;
  padding-left:20px;
  padding-top:20px;
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
    z-index:1000000;
    top:0!important;
}
</style>
