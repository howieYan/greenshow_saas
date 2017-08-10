<template>
    <layout>
        <div style="position:relative;height:100%;" slot="main">
          <div style="">
            <div class="title_team">
              <div class="border_bott">
                  <div class="team">
                      <b class="center_padd">队员</b>
                  </div>
                  <div class="row height_line" inline>
                      <div class="col height_line_input" style="text-align:center;">
                          <Input  icon="ios-search" placeholder="请输入手机号码或姓名..."></Input>
                      </div>
                      <div class="col height_line_btn" style="text-align:center;">
                          <Button type="info" @click="clickEdit({ gender: 1, type: 2, avatar: null })">手动添加</Button>

                      </div>
                      <div class="col" style="text-align:center;">
                          <Button type="primary" :loading="loading" icon="checkmark-round" @click="clickReload">
                              <span v-if="loading">正在获取数据……</span>
                              <span v-else>刷新</span>
                          </Button>
                      </div>
                  </div>
                  <div class="table_sheet">
                    <table class="table">
                        <thead>
                            <tr class="">
                                <th v-show="false" class="width_50px ">
                                   <input type="checkbox" v-model="allData.parCheck" @change="allSelect()">全选
                                </th>
                                <th class="" v-for="item in tableText">{{ item }}</th>
                            </tr>
                        </thead>
                        <tbody id="list">
                            <tr class="activer" v-for="item in list" >
                                <th v-show="false" class="width_50px line_padd5" style="text-align:left">
                                  <input type="checkbox" @change="singleSelect()" v-model="item.isCheck" :id="item.id">
                                </th>
                                <td class="">
                                  <img :src="item.avatar ? item.avatar :'/static/apply_1.png'" alt="">
                                </td>
                                <td class="">{{ item.nickname }}</td>
                                <td class="">{{ item.realname }}</td>
                                <td class="">{{ item.gender == 1 ? '男' : '女'}}</td>
                                <td class="">{{ item.phone }}</td>
                                <td class="" >{{ item.honor }}</td>
                                <td class="" >{{ item.type == 1 ? '粉丝' : item.type == 2 ? '队员' : item.type == 4 ? '嘉宾' : '领导'}}</td>
                                <td class="" >
                                    <Button type="ghost" @click="clickEdit(item)">编辑</Button>
                                    <!-- <Poptip placement="top-end" confirm title="您确认删除这条内容吗？" @on-ok="clickDelete(item)">
                                        <Button type="error" @click="clickDelete(item)">删除</Button>
                                    </Poptip> -->
                                    <Button type="error" @click="clickDelete(item)">删除</Button>
                                    <Poptip v-show="false" placement ="top-end"
                                        confirm
                                        title="您确认要加入黑名单吗？"
                                        @on-ok="yesBlacklist">
                                        <Button type="warning">加入黑名单</Button>
                                    </Poptip>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
              </div>
            </div>
          </div>
        <!--弹出框-->
        <!-- 编辑-->
        <div class="el-dialog__wrapper" v-show="isShowModal">
          <div class="center_top">
              <div class="alert_header" id="widthAlert">
                <div class="layui-layer-title">
                    队员
                </div>
                <div class="layui-layer-setwin" @click="isShowModal=false">
                    <a href="javascript:(0)" class="layui-layer-ico layui-layer-close layui-layer-close1"></a>
                </div>

                <Form :model="formItem" :label-width="80" :rules="ruleValidate">
                    <p style="text-align:center;"><img :src="formItem.avatar ? formItem.avatar : '/static/apply_1.png'" alt="" style="width:80px;height:80px;"></p>
                    <Form-item label="头像：">
                        <Upload :show-upload-list="false" :action="url" :headers="{ Token: account.token }" :on-success="onUploaded" :format="['jpg','jpeg','png','gif']">
                            <Button type="ghost" icon="ios-cloud-upload-outline">上传头像</Button>
                        </Upload>
                    </Form-item>
                    <Form-item label="手机号码：">
                        <Input v-model="formItem.phone" placeholder="请输入手机号码"></Input>
                    </Form-item>
                    <Form-item label="昵称：" prop="nickname">
                        <Input v-model="formItem.nickname" placeholder="请输入昵称"></Input>
                    </Form-item>
                    <Form-item label="姓名：">
                        <Input v-model="formItem.realname" placeholder="请输入姓名"></Input>
                    </Form-item>
                    <Form-item label="性别：">
                        <Radio-group v-model="formItem.gender">
                            <Radio label="1" value="">男</Radio>
                            <Radio label="2" value="">女</Radio>
                        </Radio-group>
                    </Form-item>
                    <Form-item label="头衔：">
                        <Input v-model="formItem.honor" placeholder="请输入头衔"></Input>
                    </Form-item>
                    <Form-item label="类型：">
                        <Radio-group v-model="formItem.type">
                            <Radio label="8">领导</Radio>
                            <Radio label="2">队员</Radio>
                            <Radio label="4">嘉宾</Radio>
                            <Radio label="1">粉丝</Radio>
                        </Radio-group>
                    </Form-item>
                    <Form-item>
                        <Button type="primary" @click="clickSave(formItem)">提交</Button>
                        <Button type="ghost" style="margin-left: 8px" @click="isShowModal=false">取消</Button>
                    </Form-item>
                </Form>

              </div>
          </div>
        </div>
      </div>
    </layout>
</template>

<script>
import axios from 'axios'
import api from '../api'
import * as lib from '../lib'
import { account } from '../store'

export default {
  name: 'TeamPlayer',
  data () {
    return {
      name: 'TeamPlayerV',
      account: account,
      url: axios.defaults.baseURL + '/api5/Upload/Player',
      list: [],
      formItem: {
        input: '',
        gender: '1',
        nav_open: true,
        position: '队员',
        nickname: ''
      },
      disabledGroup: '4',
      sex: '1',
      ruleValidate: {
        nickname: [
          { required: true, message: '昵称不能为空', trigger: 'blur' }
        ]
      },
      tableText: ['头像', '昵称', '姓名', '性别', '手机', '头衔', '类型', '操作'],
      isShowModal: false,
      loading: false,
      model1: '0',
      allData: [
        { parCheck: false },
        { text: '全选' }
      ],
      optionsSle: [
        {
          value: '0',
          label: '全部队员'
        },
        {
          value: '1',
          label: '领导'
        },
        {
          value: '2',
          label: '队员'
        },
        {
          value: '3',
          label: '嘉宾'
        },
        {
          value: '4',
          label: '粉丝'
        },
        {
          value: '5',
          label: '黑名单'
        }
      ],
      cityList: [
        {
          value: '0',
          label: '领导'
        },
        {
          value: '1',
          label: '队员'
        },
        {
          value: '2',
          label: '嘉宾'
        },
        {
          value: '3',
          label: '粉丝'
        }
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
      modal: {
        show: false
      }
    }
  },

  computed: {
    id () {
      return this.$route.params.id
    }
  },

  created () {
    this.loadData()
  },

  methods: {
    allSelect () {
      var vm = this
      vm.checkData.forEach(item => {
        item.isCheck = vm.allData.parCheck
      })
    },
    yesBlacklist () {
      this.$Message.info('已经加入黑名单了')
    },
    singleSelect () {
      var vm = this
      var selectData = vm.checkData.filter(item => {
        return item.isCheck === true
      })
      selectData.length === vm.checkData.length ? vm.allData.parCheck = true : vm.allData.parCheck = false
    },

    clickReload () {
      this.loading = true
      this.loadData()
    },

    handleStart () {
      this.$Modal.confirm({
        title: '确认提示',
        content: '你确定要删除吗？',
        okText: '确定',
        cancelText: '取消'
      })
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!')
        }
        else {
          this.$Message.error('表单验证失败!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },

    clickEdit (record) {
      lib.debugView && console.debug(`${this.name}.clickEdit: %o`, record)
      this.isShowModal = true
      this.formItem = record
      this.formItem.teamId = this.id
    },

    onUploaded (response, file) {
      lib.debugView && console.debug(`${this.name}.onUploaded: %o, %o`, response, file)
      if (response) {
        this.formItem.avatar = response.data.url
        this.formItem.avatarId = response.data.id
      }
    },

    clickDelete (record) {
      lib.debugView && console.debug(`${this.name}.clickDelete: %o`, record)
      this.delete(record.id)
    },

    clickSave (record) {
      lib.debugView && console.debug(`${this.name}.clickSave: %o`, record)
      if (typeof record.id === 'undefined') record.id = 0
      if (typeof record.playerId === 'undefined') record.playerId = 0
      this.save(record.id, record)
    },

    async delete (id) {
      let result = await api.deleteTeamPlayer(id)
      lib.debugView && console.debug(`${this.name}.deleted: %o`, result)
      if (api.isValid(result)) {
        this.$Notice.success({ title: '删除成功！' })
        this.loadData()
      }
      else {
        this.$Notice.error({ title: '删除失败，请重试。' })
      }
    },

    async loadData () {
      try {
        this.list = []
        let result = await api.listTeamPlayer(this.id, 'manager', 0, 10000)
        lib.debugView && console.debug(`11111${this.name}.loaded: %o`, result)
        this.list = api.isValid(result) ? result.data : {}
        this.loading = false
      }
      catch (e) {
        console.error(e)
      }
    },

    async save (id, data) {
      let result = await api.saveTeamPlayer(id, data)
      lib.debugView && console.debug(`${this.name}.saved: ${id}, %o`, result)
      if (api.isValid(result)) {
        this.$Notice.success({ title: '保存成功！' })
        this.isShowModal = false
        this.loadData()
      }
      else if (result.code === -5) {
        this.$Notice.error({ title: '昵称和手机号不得重复。', desc: '如果需要添加其他球员，请直接手工添加队员，并且输入该球员的昵称或手机号。' })
      }
      else {
        this.$Notice.error({ title: '保存失败，请重试。' })
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  @import '../css/reset.css';
  .ivu-input-wrapper{
    width:80%;
  }

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

  .ivu-poptip-body>i.ivu-poptip-confirm .ivu-poptip-body .ivu-icon,.ivu-icon-help-circled:before{
     display:none;
  }
  body,html{
      height: 100%;
      background:#ddd;
  }
  .title_team{
      width: 100%;
      height: 100%;
      background: #ffffff;
  }
  .table>tr{
      position:relative;
  }
  .position_abs_che{
      position: absolute;
      left:0;
      z-index:110000000;
  }
  .title_team>h1{
      height: 80px;
      font-size: 20px;
      padding-left: 20px;
      line-height: 80px;
      border: 1px solid #eee;
  }
  tr.activer:hover{
      background:#ebf7ff;
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
      margin-top:20px;
      height: 31px;
      line-height: 30px;
      margin-bottom:20px;
  }
  .height_line_input{
    height:32px;
  }
  .height_line_input>div{
      position: relative;
      width: 230px;
      padding-left:20px;
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
  .height_line_btn>button.back_color{
      background-color: #44b549;
      color: #fff;
  }
  .table_sheet{
      width:100%;
      border: 1px solid #EEEEEE;
      position: relative;
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
  .width_50px{
      width: 74px;
  }
  .width_50px>input{
      margin-left: 12px;
  }
  /*下拉框*/
  .selectpicker {
      text-align: left;
      position: relative;
  }
  .selectpicker .dropdown-toggle.filled {
      padding-left: 5px;
  }
  .selectpicker .dropdown-toggle {
      position: relative;
      text-align: left;
      border-radius: 0;
  }
  .btn-block {
      display: block;
      width: 100%;
  }
  .btn-group-lg>.btn, .btn-lg {
      padding: 10px 16px;
      font-size: 18px;
      line-height: 1.3333333;
      border-radius: 6px;
  }
  .btn-default {
      color: #333;
      background-color: #fff;
      border-color: #ccc;
  }
  .open>.dropdown-toggle.btn-default {
      background-image: none;
  }
  .open>.dropdown-toggle.btn-default {
      color: #333;
      background-color: #e6e6e6;
      border-color: #adadad;
  }
  .open>.dropdown-menu {
      display: block;
  }
  .btn {
      display: inline-block;
      margin-bottom: 0;
      font-weight: 400;
      text-align: center;
      vertical-align: middle;
      touch-action: manipulation;
      cursor: pointer;
      background-image: none;
      border: 1px solid #eee;
      white-space: nowrap;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      border-radius: 4px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }
  .selectpicker .dropdown-toggle span.text {
      float: left;
  }
  .selectpicker .dropdown-toggle span.caret {
      float: right;
      margin-top: 7px;
  }
  .btn-lg .caret {
      border-width: 5px 5px 0;
      border-bottom-width: 0;
  }
  .btn .caret {
      margin-left: 0;
  }
  .caret {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 2px;
      vertical-align: middle;
      border-top: 4px dashed;
      border-right: 4px solid transparent;
      border-left: 4px solid transparent;
  }
  .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1000;
      display: none;
      float: left;
      min-width: 160px;
      padding: 5px 0;
      margin: 2px 0 0;
      list-style: none;
      font-size: 14px;
      text-align: left;
      background-color: #fff;
      border: 1px solid #ccc;
      border: 1px solid rgba(0,0,0,.15);
      border-radius: 4px;
      -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
      box-shadow: 0 6px 12px rgba(0,0,0,.175);
      background-clip: padding-box;
  }
  .selectpicker .dropdown-menu ul {
      margin-top: 4px;
  }
  .list-unstyled {
      padding-left: 0;
      list-style: none;
  }
  .selectpicker .dropdown-menu ul>li {
      display: block;
      padding: 4px 0 4px 20px;
      cursor: pointer;
  }

  .layui-layer-shade{
      position:absolute;
      z-index: 222222222222;
      background-color: #000;
      opacity: 0.3;
      height: 100%;
      top:0px;
      left:0;
      width:100%;
  }
  .alert_header{
      top:25%;
      position: absolute;
      left: 50%;
      width:30%;
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,.3);
      box-sizing: border-box;
      margin-bottom: 50px;
  }
  .layui-layer-title{
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
  .layui-layer-ico{
      background: url('/static/icon.png')no-repeat center;
  }
  .layui-layer-setwin .layui-layer-close1 {
      background-position: 1px -40px;
      cursor: pointer;
  }
  .layui-layer-setwin a {
      position: relative;
      width: 16px;
      height: 16px;
      margin-left: 10px;
      font-size: 12px;
      _overflow: hidden;
  }
  .layui-layer-setwin a {
      display: inline-block;
      vertical-align: top;
  }
  form{
      margin-top: 30px;
  }
  .input_pa{
     padding: 5px 10px;
  }
  form>div{
      text-align: left;
  }
  .addinputform{
      padding: 10px;
      margin-left: 42px;
      border-color:#EEEEEE;
      background: #30adef;
      border: none;
      color:#fff;
      border-radius: 3px;
  }
  .line_padd5{
      padding:15px 8px!important;
  }
  .ivu-table-fixed{
      background:#fff;
      top:none!important;
  }
</style>
