<template>
    <layout>
        <div slot="main">
            <div style="margin:20px;">
                <h1>球队首页</h1>
                <div class="header1">
                  <ul class="row">
                      <li class="back" onclick="closeFrame()"></li>
                      <li class="textCenter textCenter0 col">
                          <img src="static/logo_header.png" alt="">
                          <p style="color:#fff;font-size:16px;">口号：×××</p>
                          <div class="row string padding_Top10" style="padding-top:5%;">
                              <div class="col">
                                  <div>20</div>
                                  <b>平均成绩</b>
                              </div>
                              <div class="col">
                                  <div>20</div>
                                  <b>球队人数</b>
                              </div>
                          </div>
                      </li>
                      <li style="width: 50px;"></li>
                  </ul>
              </div>
                <div style="padding:10px;">
                    <ul class="row">
                        <li class="col">
                          <Upload action="//jsonplaceholder.typicode.com/posts/">
                              <Button type="ghost" icon="ios-cloud-upload-outline">上传LOGO图</Button>
                          </Upload>
                        </li>
                        <li class="col">
                          <Button type="ghost" @click="openInput">设置口号</Button>
                          <Form ref="formInline" :rules="ruleInline" inline  v-show="!open">
                            <Form-item>
                                <Input  placeholder="请输入口号" style="width: 200px"></Input>
                            </Form-item>
                            <Form-item>
                                <Button type="primary" @click="closeInput">确定</Button>
                            </Form-item>
                        </Form>
                          
                        </li>
                        <li class="col">
                          <Upload action="//jsonplaceholder.typicode.com/posts/">
                              <Button type="ghost" icon="ios-cloud-upload-outline">上传背景图片</Button>
                          </Upload>
                        </li>
                    </ul>
                </div>
                <p style="text-align:center;line-height:30px;font-size:16px;">球队简介</p>
                <editor content="" :height="400" :z-index="1000" :auto-height="true" :show-module-name="false"></editor>
            </div>
        </div>
    </layout>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      open: true
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    openInput () {
      this.open = false
    },
    closeInput () {
      this.open = true
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
h1 {
    height: 80px;
    font-size: 20px;
    padding-left: 20px;
    line-height: 80px;
    border: 1px solid #eee;
}
@import '../../font-awesome-4.7.0/css/font-awesome.min.css'
</style>
