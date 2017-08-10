<template>
    <layout>
        <div slot="main" style="position:relative;height:100%;overflow: hidden;">
          <div class="title_team">
              <div style="float:right;height:40px;line-height:40px;margin-right:20px;">
                   <Button type="info">排序</Button>
                   <Button type="ghost" @click="clickShow">添加</Button>
              </div>
              <table class="table">
                  <thead>
                      <tr class="">
                          <th class="">
                              时间
                          </th>
                          <th class="" >标题</th>
                          <th class="" >职位</th>
                          <th class="" >人员</th>
                          <th class="" >操作</th>
                      </tr>
                  </thead>
                  <tbody id="list">
                      <tr class="active">
                          <td class="" >2017-07-13 - 2017-08-17</td>
                          <td class="">第三届XXXX队委名单</td>
                          <td class="">队长</td>
                          <td class="">张凌峰</td>

                          <td class="" >
                              <Button type="ghost" @click="clickShow">编辑</Button>
                              <Button type="error" @click="clickDelete(item)">删除</Button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <!--编辑页-->
          <div class="el-dialog__wrapper" v-show="isShowAdd">
            <div class="center_top">
                <div class="alert_header" id="widthAlert">
                  <div class="layui-layer-title">
                      领导
                  </div>
                  <div class="layui-layer-setwin" @click="isShowAdd=!isShowAdd">
                      <a href="javascript:(0)" class="layui-layer-ico layui-layer-close layui-layer-close1"></a>
                  </div>
                  <Form  :label-width="80" style="margin-top:24px;">
                    <Form-item label="时间：">
                        <Row>
                          <Col>
                              <Date-picker type="daterange" confirm placement="right" placeholder="选择日期" style="width:90%;"></Date-picker>
                          </Col>
                        </Row>
                    </Form-item>
                    <Form-item label="标题：" >
                        <Input  placeholder="请输入标题" style="width:90%;"></Input>
                    </Form-item>
                    <Form-item label="职称：">
                        <Radio-group v-model="formItem.position">
                            <Radio label="队长"></Radio>
                            <Radio label="队员"></Radio>
                            <Radio label="嘉宾"></Radio>
                            <Radio label="粉丝"></Radio>
                        </Radio-group>
                    </Form-item>
                    <Form-item label="人员：" >
                        <Input  placeholder="请输入人员" style="width:90%;"></Input>
                    </Form-item>
                    <Form-item>
                        <Button type="primary">提交</Button>
                        <Button type="ghost" style="margin-left: 8px">取消</Button>
                    </Form-item>
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
  data () {
    return {
      isShowAdd: false,
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
    clickDelete (record) {
    //  this.delete(record.id)
    },
    clickShow () {
      this.isShowAdd = true
    },
    async delete (id) {
    //  if (api.isValid(result)) {
    //    this.$Notice.success({ title: '删除成功！' })
    //    this.loadData()
    //  }
    //  else {
    //    this.$Notice.error({ title: '删除失败，请重试。' })
    //  }
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
  tr.active:hover{
      background: #ebf7ff;
  }
  .title_team>h1 {
      height: 80px;
      font-size: 20px;
      padding-left: 20px;
      line-height: 80px;
      border: 1px solid #eee;
  }
  .table{
    border-top:1px solid #ddd;
    width:100%;
  }
  .table th, .table td{
      padding: 10px 8px;
      line-height: 30px;
      border-bottom: 1px solid #ddd;
      border-left: 0;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
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
  .alert_header {
      top: 25%;
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
</style>
