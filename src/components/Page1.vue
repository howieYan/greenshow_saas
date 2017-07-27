<template>
    <layout>
        <div slot="main">
          <div style="margin:10px;background:#f5f5f5;">
            <div class="title_team">
              <h1>队员管理</h1>
              <div class="border_bott">
                  <div class="team">
                      <b class="center_padd">队员</b>
                  </div>
                  <div class="row height_line">
                      <div class="col height_line_input">
                          <div class="row">
                              <input type="text" class="col" placeholder="用户昵称/或手机号">
                              <i class="fa_icon_share"></i>
                          </div>

                      </div>
                      <div class="col height_line_btn">
                          <button id="page1Add">手动添加</button>
                          <button>删除</button>
                          <button class="back_color">刷新</button>
                      </div>
                  </div>
                  <div class="table_sheet">
                      <div class="team_player_nav row">
                          <div class="col team_player_nav_activer">
                              <b>全部队员</b>
                          </div>
                          <div class="col">
                              <b>领导</b>
                          </div>
                          <div class="col">
                              <b>队员</b>
                          </div>
                          <div class="col">
                              <b>嘉宾</b>
                          </div>
                          <div class="col">
                              <b>粉丝</b>
                          </div>
                          <div class="col">
                              <b>黑名单</b>
                          </div>
                      </div>
                      <div class="opt row">
                          <input class="magic-checkbox " type="checkbox" name="" id="allId"
                          v-model="allData.parCheck" @change="allSelect()">
                          <p class="col">
                              <b style="padding-right: 20px">{{ allData[1].text }}</b>
                              <button class="padd_bor">加入黑名单</button>
                          </p>
                      </div>
                      <table class="table">
                          <thead>
                              <tr class="row">
                                  <th class="width_50px"></th>
                                  <th class="col">头像</th>
                                  <th class="col">昵称</th>
                                  <th class="col">姓名</th>
                                  <th class="col">性别</th>
                                  <th class="col">手机</th>
                                  <th class="col">职称</th>
                                  <th class="col">操作</th>
                              </tr>
                          </thead>
                          <tbody id="list">
                              <tr class="row" v-for="item in checkData">
                                  <td class="width_50px" style="text-align: left;"> 
                                    <input type="checkbox" name="" @change="singleSelect()" v-model="item.isCheck" :id="item.id">
                                  </td>
                                  <td class="col"><img :src="'/static/apply_1.png'" alt=""></td>
                                  <td class="col">Tony_z</td>
                                  <td class="col">张凌峰</td>
                                  <td class="col">男</td>
                                  <td class="col">18000000000</td>
                                  <td class="col">队员</td>
                                  <td class="col"><button>修改身份</button></td>
                              </tr>

                          </tbody>
                      </table>
                  </div>
              </div>

            </div>
          </div>
        </div>
         <iframe slot="preview" src="http://devwx.golfgreenshow.com/#/teamPlayer?id=CEDE230F-3FFB-4F30-9966-B4E6F236EEDA" id="show" width="100%" height="99%" marginheight="0" marginwidth="0" frameborder="0" scrolling="auto"></iframe>
        
    </layout>
</template>
<script>
import '../script/jquery.min.js'
import '../script/zdialog.js'
import '../script/layer.js'

export default {
  name: 'Page',
  data () {
    return {
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
    }
  },
  mounted () {
  }
}
import '../script/index.js'
import '../script/pege1.js'
</script>

<style scoped>
@import '../css/reset.css';
body,html{
    height: 100%;
    background:#ddd;
}
.title_team{
    width: 100%;
    height: 100%;
    background: #ffffff;
}
.title_team>h1{
    height: 80px;
    font-size: 20px;
    padding-left: 20px;
    line-height: 80px;
    border: 1px solid #eee;
}
.team{
    height: 40px;
    border-bottom: 1px solid #eee;
    line-height: 39px;
}
.team>b{
    display: block;
    width: 50px;
    margin-left:20px;
    text-align: center;
    border-bottom: 2px solid #44b549;
}
.height_line {
    height: 80px;
    line-height: 80px;
}
.height_line_input>div{
    position: relative;
    width: 230px;
}
.height_line_input>div>input{
    margin-top: 20px;
    padding: 10px 40px  10px 10px;
    border: 1px solid #eee;
}
.fa_icon_share{
    margin-top: 20px;
    display: block;
    width: 40px;
    height: 40px;
    background: url('/static/share.png') no-repeat center;
    background-size: 50%;
    border-left:1px solid #eee;
    position: absolute;
    top:0;
    right: 0;
}
.height_line_btn>button{
    padding:10px;
    border-radius:5px;
    border: 1px solid #eee;
    background: #ffffff;
}
.height_line_btn>button.back_color{
    background-color: #44b549;
    color: #fff;
}
.table_sheet{
    border: 1px solid #EEEEEE;
}
.team_player_nav{
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 100%;
    border-bottom: 1px solid #EEEEEE;
}
.team_player_nav>div{
    width: 100%;
    text-align: center;
}
.team_player_nav>div.team_player_nav_activer>b{
    height: 50px;
    line-height: 50px;
    border-bottom: 2px solid #44b549;
    display: -webkit-inline-box;
    width: 80px;
    text-align: -webkit-center;
}
.table{
    width: 100%;
}

.opt{
    height:50px;
    padding-left: 20px;
    line-height:50px;
    border-bottom: 1px solid #EEEEEE;
    background:#f4f5f9;
    position: relative;
}
.magic-checkbox{
    width: 20px;
    height: 20px;
    margin-top: 15px;
    position: relative;
    border:0;
    background: #ffffff;
    margin-right: 10px;
}
/*.magic-checkbox:checked + label:before {*/
    /*border: #3e97eb;*/
    /*background: #3e97eb; }*/
.opt>b{
    margin-top: -5px;
    height: 50px;
    line-height: 50px;
}
.padd_bor{
    border: 1px solid #EEEEEE;
    padding:8px  10px;
    background: #f5f5f5;
    color: #DDDDDD;
}
.table th, .table td {
    padding: 10px 8px;
    line-height: 30px;
    border-bottom: 1px solid #ddd;
    border-right:1px solid #ddd ;
    border-left: 0;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.table td >img{
    border-radius: 50%;
    height: 30px;
    width: 30px;
}
.table td >button{
    padding: 5px 10px;
    background: #ffffff;
    border: 1px solid #eee;
}
.width_50px{
    width: 50px;
}
.width_50px>input{
    margin-left: 15px;
    margin-top: 10px;
    width: 20px;
    height: 20px;
}
</style>
