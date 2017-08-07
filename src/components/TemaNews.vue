<template>
    <layout>
        <div slot="main" style="position:relative;height:100%;overflow: hidden;">
          <div class="title_team">
              <h1>球队新闻</h1>
              <div style="float:right;height:40px;line-height:40px;margin-right:20px;">
                   <Button type="ghost" @click="addCopyreader">添加</Button>
              </div>
              <table class="table">
                  <thead>
                      <tr class="">
                          <th class="">
                              赛制
                          </th>
                          <th class="" >赛事类型</th>
                          <th class="" >赛事名称</th>
                          <th class="" >赛事时间</th>
                          <th class="" >球场</th>
                          <th class="" >报名人数</th>
                          <th class="" >操作</th>
                      </tr>
                  </thead>
                  <tbody id="list">
                      <tr class="">
                          <td class="" >比杆赛</td>
                          <td class="">球队赛</td>
                          <td class="">8月例赛</td>
                          <td class="">2017-7-12-2017-8-12</td>
                          <td class="">上海美兰湖高尔夫球场</td>
                          <td class="">20</td>
                          <td class="" >
                              <Button type="primary">发布</Button>
                              <Button type="ghost" @click="copyreader">编辑</Button>
                              <Poptip placement ="top-end"
                                  confirm
                                  trigger="hover"
                                  title="您确认删除这条内容吗？"
                                  @on-ok="ok"
                                  @on-cancel="cancel">
                                  <Button type="error">删除</Button>
                              </Poptip>
                              <Button type="success" @click="openParticulars">详情</Button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <!--编辑页-->          
          <div class="el-dialog__wrapper" v-show="!copyreaders">
            <div class="center_top">
                <div class="alert_header" id="widthAlert">
                  <div class="layui-layer-title">
                      编辑页
                  </div>
                  <div class="layui-layer-setwin" @click="closecopyreader">
                      <a href="javascript:(0)" class="layui-layer-ico layui-layer-close layui-layer-close1"></a>
                  </div>
                  <Form  :label-width="80" style="margin-top:24px;">
                    <Form-item label="赛事时间：">
                        <Row>
                          <Col>
                              <Date-picker type="daterange" confirm placement="right" placeholder="请选择日期" style="width:90%;"></Date-picker>
                          </Col>
                        </Row>
                    </Form-item>
                    <Form-item label="球场：" >
                        <Input  placeholder="请输入球场..." style="width:90%;"></Input>
                    </Form-item>
                    <Form-item label="赛制：" >
                        <Input  placeholder="请输入赛制..." style="width:90%;"></Input>
                    </Form-item>
                    <Form-item label="赛事名称：" >
                        <Input  placeholder="请输入赛事名称..." style="width:90%;"></Input>
                    </Form-item>
                     <Form-item label="参赛名额：" >
                        <Input-number v-model="value3" size="small" style="width:90%;"></Input-number>
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
                          <Checkbox-group v-model="fruit">
                              <Checkbox label="球队队员"></Checkbox><br>
                              <Checkbox label="嘉宾"></Checkbox><br>
                          </Checkbox-group>
                        </div>
                        <div class="col">
                          <div class="title_card">
                              <b></b>
                          分享范围
                          </div>
                          <Checkbox-group v-model="fruit">
                              <Checkbox label="球队队员"></Checkbox><br>
                              <Checkbox label="嘉宾"></Checkbox><br>
                              <Checkbox label="粉丝"></Checkbox>
                          </Checkbox-group>
                        </div>
                      </div>
                    </Form-item>
                    <Form-item>
                        <Button type="primary">提交</Button>
                        <Button type="ghost" style="margin-left: 8px" @click="closecopyreader">取消</Button>
                    </Form-item>
                  </Form>
                </div>
            </div>
          </div>
          <!--添加页-->
          <div class="el-dialog__wrapper" v-show="!addCopyreaders">
            <div class="center_top">
                <div class="alert_header" id="widthAlert">
                  <div class="layui-layer-title">
                      添加页
                  </div>
                  <div class="layui-layer-setwin" @click="closeaddCopyreader">
                      <a href="javascript:(0)" class="layui-layer-ico layui-layer-close layui-layer-close1"></a>
                  </div>
                  <Form  :label-width="80" style="margin-top:24px;">
                    <Form-item label="赛事时间：">
                        <Row>
                          <Col>
                              <Date-picker type="daterange" confirm placement="right" placeholder="请选择日期" style="width:90%;"></Date-picker>
                          </Col>
                        </Row>
                    </Form-item>
                    <Form-item label="球场：" >
                        <Input  placeholder="请输入球场..." style="width:90%;"></Input>
                    </Form-item>
                    <Form-item label="赛制：" >
                        <Input  placeholder="请输入赛制..." style="width:90%;"></Input>
                    </Form-item>
                    <Form-item label="赛事名称：" >
                        <Input  placeholder="请输入赛事名称..." style="width:90%;"></Input>
                    </Form-item>
                     <Form-item label="参赛名额：" >
                        <Input-number v-model="value3" size="small" style="width:90%;"></Input-number>
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
                          <Checkbox-group v-model="fruit">
                              <Checkbox label="球队队员"></Checkbox><br>
                              <Checkbox label="嘉宾"></Checkbox><br>
                          </Checkbox-group>
                        </div>
                        <div class="col">
                          <div class="title_card">
                              <b></b>
                          分享范围
                          </div>
                          <Checkbox-group v-model="fruit">
                              <Checkbox label="球队队员"></Checkbox><br>
                              <Checkbox label="嘉宾"></Checkbox><br>
                              <Checkbox label="粉丝"></Checkbox>
                          </Checkbox-group>
                        </div>
                      </div>
                    </Form-item>
                    <Form-item>
                        <Button type="primary">提交</Button>
                        <Button type="ghost" style="margin-left: 8px" @click="closecopyreader">取消</Button>
                    </Form-item>
                  </Form>
                </div>
            </div>
          </div>
          <!--详情-->
           <div class="el-dialog__wrappers" v-show="!particulars">
            <div class="center_top">
                <div class="alert_headers" id="widthAlert">
                  <div class="layui-layer-title">
                      详情页
                  </div>
                  <div class="layui-layer-setwin" @click="closeParticulars">
                      <a href="javascript:(0)" class="layui-layer-ico layui-layer-close layui-layer-close1"></a>
                  </div>
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
                       <Input  type="textarea" disabled  placeholder="这场例赛" style="width:90%;"></Input>
                    </Form-item>
                    <Row>
                        <Col span="24" class="demo-tabs-style2">
                            <Tabs type="card">
                                <Tab-pane label="报名管理">
                                  <div style="width:100%;height:100%;">
                                    <div class="col height_line_input">
                                        <Input  icon="ios-search" placeholder="请输入手机号码或姓名..." style="width: 300px"></Input>
                                    </div>
                                  </div>
                                </Tab-pane>
                                <Tab-pane label="分组管理">标签二的内容</Tab-pane>
                                <Tab-pane label="领先版">标签三的内容</Tab-pane>
                                <Tab-pane label="奖项设置">标签三的内容</Tab-pane>
                                <Tab-pane label="活动新闻">标签三的内容</Tab-pane>
                                <Tab-pane label="活动新闻">标签三的内容</Tab-pane>
                            </Tabs>
                        </Col>
                    </Row>
                  </Form>
                </div>
            </div>
          </div>
        </div>
    </layout>
</template>

<script>
export default {
  name: 'Page2',
  value3: 2,
  data () {
    return {
      copyreaders: true,
      addCopyreaders: true,
      particulars: true,
      nav_open: true,
      formItem: {
        position: '队员'
      }
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
    copyreader () {
      this.copyreaders = false
    },
    closecopyreader () {
      this.copyreaders = true
    },
    addCopyreader () {
      this.addCopyreaders = false
    },
    closeaddCopyreader () {
      this.addCopyreaders = true
    },
    openParticulars () {
      this.particulars = false
    },
    closeParticulars () {
      this.particulars = true
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
    padding: 10px 8px;
    line-height: 30px;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
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
