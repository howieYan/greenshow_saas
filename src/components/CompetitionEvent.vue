<template>
    <layout>
        <div slot="main" style="position:relative;height:100%;">
          <div class="title_team">
              <div style="float:right;height:40px;line-height:40px;margin-right:20px;">
                   <Button type="ghost" @click="clickShow">添加</Button>
              </div>
              <div style="width:100%;overflow-x:auto;">
                <table class="table">
                    <thead>
                        <tr class="">
                            <th class="" v-for="item in tableText">{{ item }}</th>
                        </tr>
                    </thead>
                    <tbody id="list">
                        <tr class="active" v-for="item in list">
                            <td class="" >{{ item.matchTem }}</td>
                            <td class="">{{ item.temaMatch }}</td>
                            <td class="">{{ item.matchName }}</td>
                            <td class="">{{ item.matchTime }}</td>
                            <td class="">{{ item.matchSite }}</td>
                            <td class="">{{ item.number }}</td>
                            <td class="" >
                                <Button type="primary">发布</Button>
                                <Button type="ghost" @click="clickShow(item)">编辑</Button>
                                <Poptip placement ="top-end"
                                    confirm
                                    trigger="hover"
                                    title="您确认删除这条内容吗？"
                                    @on-ok="ok"
                                    @on-cancel="cancel">
                                    <Button type="error">删除</Button>
                                </Poptip>
                                <Button type="success" @click="$router.push({ path: '/details' })">详情</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
              </div>
              
          </div>
          <!--编辑页-->          
          <div class="el-dialog__wrapper" v-show="isShowAdd">
            <div class="center_top">
                <div class="alert_header" id="widthAlert">
                  <div class="layui-layer-title">
                      活动
                  </div>
                  <div class="layui-layer-setwin" @click="isShowAdd=!isShowAdd">
                      <a href="javascript:(0)" class="layui-layer-ico layui-layer-close layui-layer-close1"></a>
                  </div>
                  <Form  :label-width="80" style="margin-top:24px;" :model="formItem">
                    <Form-item label="赛事时间：">
                        <Row>
                          <Col>
                              <Date-picker type="daterange" confirm placement="right" placeholder="请选择日期" style="width:90%;" v-model="formItem.matchTime"></Date-picker>
                          </Col>
                        </Row>
                    </Form-item>
                    <Form-item label="球场：" >
                        <Input v-model="formItem.matchSite" placeholder="请输入球场..." style="width:90%;"></Input>
                    </Form-item>
                    <Form-item label="赛制：" >
                        <Input v-model="formItem.matchTem"  placeholder="请输入赛制..." style="width:90%;"></Input>
                    </Form-item>
                    <Form-item label="赛事名称：" >
                        <Input v-model="formItem.matchName"  placeholder="请输入赛事名称..." style="width:90%;"></Input>
                    </Form-item>
                     <Form-item label="参赛名额：" >
                        <Input-number v-model="formItem.number" size="small" style="width:90%;"></Input-number>
                    </Form-item>
                    <Form-item label="简述：">
                       <Input  type="textarea" placeholder="请输入..." style="width:90%;"></Input>
                    </Form-item>
                    <Form-item>
                      <div class="row">
                        <div class="col">
                          <div class="title_card">
                              <b></b>
                          报名范围
                          </div>
                          <Checkbox-group>
                              <Checkbox label="球队队员"></Checkbox><br>
                              <Checkbox label="嘉宾"></Checkbox><br>
                          </Checkbox-group>
                        </div>
                        <div class="col">
                          <div class="title_card">
                              <b></b>
                          分享范围
                          </div>
                          <Checkbox-group>
                              <Checkbox label="球队队员"></Checkbox><br>
                              <Checkbox label="嘉宾"></Checkbox><br>
                              <Checkbox label="粉丝"></Checkbox>
                          </Checkbox-group>
                        </div>
                      </div>
                    </Form-item>
                    <Form-item>
                        <Button type="primary">提交</Button>
                        <Button type="ghost" style="margin-left: 8px" @click="isShowAdd=!isShowAdd">取消</Button>
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
import * as lib from '../lib'
import { account } from '../store'

export default {
  name: 'CompetitionEvent',
  data () {
    return {
      name: 'CompetitionEventV',
      account: account,
      url: axios.defaults.baseURL + '/api5/Upload/Player',
      isShowAdd: false,
      formItem: {
        position: '队员'
      },
      tableText: ['赛制', '赛事类型', '赛事名称', '赛事时间', '球场', '报名人数', '操作'],
      list: [
        { matchTem: '比杆赛', temaMatch: '球队赛', matchName: '8月例赛', matchTime: '2017-7-12-2017-8-12', matchSite: '上海美兰湖高尔夫球场', number: '20' },
        { matchTem: '比杆赛', temaMatch: '球队赛', matchName: '8月例赛', matchTime: '2017-7-12-2017-8-12', matchSite: '上海美兰湖高尔夫球场', number: '20' },
        { matchTem: '比杆赛', temaMatch: '球队赛', matchName: '8月例赛', matchTime: '2017-7-12-2017-8-12', matchSite: '上海美兰湖高尔夫球场', number: '20' },
        { matchTem: '比杆赛', temaMatch: '球队赛', matchName: '8月例赛', matchTime: '2017-7-12-2017-8-12', matchSite: '上海美兰湖高尔夫球场', number: '20' },
        { matchTem: '比杆赛', temaMatch: '球队赛', matchName: '8月例赛', matchTime: '2017-7-12-2017-8-12', matchSite: '上海美兰湖高尔夫球场', number: '20' }
      ]
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    ok () {
      this.$Message.info('点击了确定')
    },
    cancel () {
      this.$Message.info('点击了取消')
    },
    clickShow (record) {
      this.isShowAdd = true
      lib.debugView && console.debug(`${this.name}.clickEdit: %o`, record)
      this.formItem = record
      this.formItem.teamId = this.id
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
@import '../css/reset.css';

.title_team{
    width: 100%;
    height: 100%;
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
 tr.active:hover{
    background: #ebf7ff;
}
.title_card >b{
    position: absolute;
    left:-1px;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid #ffffff;
}
.table{
  border-top:1px solid #ddd;
  width:100%;
}
.table th, .table td{
    padding: 10px 0px;
    line-height: 30px;
    border-bottom: 1px solid #ddd;
    border-left: 0;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.el-dialog__wrapper,.el-dialog__wrappers{
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  overflow: auto;
  margin: 0;
  background:rgba(0,0,0,0.5);
}
.alert_header {
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
.alert_headers{
    top: 12%;
    position: absolute;
    left: 50%;
    width: 50%;
    height:80%;
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
    text-align:center;
}
.border_event>div{
    text-align:center;
}
.border_event>b{
    border-left:2px solid #fc6621;
    padding-left: 10px;
}
.demo-tabs-style2{
  padding:0 10px;
}
.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
    border-radius: 0;
    background: #fff;
}
.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
    border-top: 1px solid #3399ff;
}
.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #3399ff;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
