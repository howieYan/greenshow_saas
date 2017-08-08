<template>
    <layout>
        <div slot="main">
            <div style="margin:20px;">
                <h1>球队首页</h1>
                <h3 style="text-align:center;font-size:22px;padding:5px 0;">{{ team.active.name }}</h3>
                <div class="header1" v-bind:style="{ backgroud: team.active && team.active.facade ? `url(${team.active.facade}) no-repeat center`:'', 'background-color': !team.active || !team.active.facade ? '#CCCCCC':''}">
                  <ul class="row">
                      <li class="textCenter textCenter0 col">
                          <img :src="team.active && team.active.logo ? team.active.logo : ''" alt="" with="200px" height="200px">
                          <p style="color:#fff;font-size:16px;cursor: pointer;" >
                          口号{{ team.active && team.active.purpose ? team.active.purpose : '' }}
                          <Button type="primary" @click="openInput">修改口号</Button>
                          </p>
                          <Form ref="formInline" inline  v-show="!open">
                              <Form-item>
                                  <Input v-model="data.purpose" placeholder="请输入口号"></Input>
                              </Form-item>
                              <Form-item>
                                  <Button type="primary" @click="closeInput">确定</Button>
                              </Form-item>
                          </Form>
                          <div class="row string padding_Top10" style="padding-top:0;">
                              <div class="col">
                                  <div>{{ team.active && team.active.averageScore ? team.active.averageScore : '无' }}</div>
                                  <b>平均成绩</b>
                                  <Button type="primary" @click="openInputs">修改平均成绩</Button>
                                  <Form ref="formInline" inline  v-show="!opens">
                                      <Form-item>
                                          <Input v-model="data.averageScore" placeholder="请输入平均成绩"></Input>
                                      </Form-item>
                                      <Form-item>
                                          <Button type="primary" @click="closeInputs">确定</Button>
                                      </Form-item>
                                  </Form>
                              </div>
                             
                              <div class="col">
                                  <div>{{ team.active && team.active.memberCount ? team.active.memberCount : '无' }}</div>
                                  <b>球队人数</b>
                                  <Button type="primary" @click="temaopenInputs">修改平均成绩</Button>
                                  <Form ref="formInline" inline  v-show="!openss">
                                      <Form-item>
                                          <Input v-model="data.memberCount" placeholder="请输入平均成绩"></Input>
                                      </Form-item>
                                      <Form-item>
                                          <Button type="primary" @click="temacloseInputs">确定</Button>
                                      </Form-item>
                                  </Form>
                              </div>
                          </div>
                          <div class="row text_color">
                              <div class="col">
                                  <p >成立时间</p>
                                  <b>{{ team.active && team.active.time ? team.active.time : '无' }}</b>
                                  <Date-picker v-model="data.time"
                                      :open="opena"
                                      format="yyyy年M月d日"
                                      confirm
                                      placement="top-start"
                                      @on-change="handleChange"
                                      @on-clear="handleClear"
                                      @on-ok="handleOk" style="z-index:10000000;">
                                      <a href="javascript:void(0)" @click="handleClick">
                                          <Icon type="ios-calendar-outline"></Icon>
                                          <template v-if="value3 === ''" style="color:#000;">选择日期</template>
                                          <template v-else>{{ value3 }}</template>
                                      </a>
                                  </Date-picker>
                              </div>
                              <div class="col">
                                  <p>现任会长</p>
                                  <b @click="clickName">{{ team.active && team.active.CDRname ? team.active.CDRname : '张林峰' }}</b>
                                  <Form ref="formInline" inline v-show="!nameclick">
                                      <Form-item>
                                          <Input v-model="data.captain" placeholder="请输入名字" style="width:80px;"></Input>
                                      </Form-item>
                                      <Form-item>
                                          <Button type="primary" @click="closename">确定</Button>
                                      </Form-item>
                                  </Form>
                              </div>
                              <div class="col">
                                  <p>现任队长</p>
                                  <b @click="captainclick">{{ team.active && team.active.captain ? team.active.captain : '无' }}</b>
                                  <Form ref="formInline" inline v-show="!clickcaptain">
                                      <Form-item>
                                          <Input v-model="data.captain" placeholder="请输入名字" style="width:80px;"></Input>
                                      </Form-item>
                                      <Form-item>
                                          <Button type="primary" @click="closecaptain">确定</Button>
                                      </Form-item>
                                  </Form>
                              </div>
                              <div class="col">
                                  <p>现任秘书</p>  
                                  <b @click="secretary">{{ team.active && team.active.secretary ? team.active.secretary : '无' }}</b>
                                  <Form ref="formInline" inline v-show="!secretarys">
                                      <Form-item>
                                          <Input v-model="data.secretary" placeholder="请输入名字" style="width:80px;"></Input>
                                      </Form-item>
                                      <Form-item>
                                          <Button type="primary" @click="closesecretary">确定</Button>
                                      </Form-item>
                                  </Form>
                              </div>
                              <div class="col">
                                  <p>联系电话</p>
                                  <b @click="phoneclick">{{ team.active && team.active.phone ? team.active.phone : '无' }}</b>
                                  <Form ref="formInline" inline v-show="!clickphone">
                                      <Form-item>
                                          <Input v-model="data.phone" placeholder="请输入手机号码" style="width:120px;"></Input>
                                      </Form-item>
                                      <Form-item>
                                          <Button type="primary" @click="closephone">确定</Button>
                                      </Form-item>
                                  </Form>
                              </div>
                          </div>
                      </li>
                      <li style="width: 50px;"></li>
                  </ul>
              </div>
                <div style="padding:10px;">
                    <ul class="row">
                        <li class="col">
                          <Upload :show-upload-list="false" :action="url" :headers="{ Token: account.token }" :before-upload="onBeforeUpload" :on-success="onLogoUploaded" :format="['jpg','jpeg','png','gif']">
                              <Button type="ghost" icon="ios-cloud-upload-outline">上传LOGO图</Button>
                          </Upload>
                        </li>
                        <li class="col">
                        </li>
                        <li class="col">
                          <Upload :show-upload-list="false" :action="url" :headers="{ Token: account.token }" :before-upload="onBeforeUpload" :on-success="onFacadeUploaded" :format="['jpg','jpeg','png','gif']">
                              <Button type="ghost" icon="ios-cloud-upload-outline">上传背景图片</Button>
                          </Upload>
                        </li>
                    </ul>
                </div>
                <p style="text-align:center;line-height:30px;font-size:16px;">球队简介</p>
                <editor content="" :height="400" :auto-height="true" :show-module-name="false"></editor>
            </div>
        </div>
    </layout>
</template>

<script>
import axios from 'axios'
import api from '../api'
import { account, team } from '../store'
import * as lib from '../lib'

export default {
  name: 'Team',
  data () {
    return {
      name: 'TeamV',
      account: account,
      url: axios.defaults.baseURL + '/api5/Upload/Team',
      open: true,
      opens: true,
      openss: true,
      nameclick: true,
      clickcaptain: true,
      secretarys: true,
      clickphone: true,
      opena: false,
      value3: '',
      opentime: true,
      team: team,
      data: {
        purpose: null
      }
    }
  },

  watch: {
    id (newValue, oldValue) {
      lib.debugView && console.debug(`${this.name}.id: ${oldValue} => ${newValue} `)
      this.loadData()
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
    openInput () {
      this.open = false
    },
    closeInput () {
      this.open = true
      this.save({ purpose: this.data.purpose })
    },
    temaopenInputs () {
      this.openss = false
    },
    temacloseInputs () {
      this.openss = true
      this.save({ purpose: this.data.memberCount })
    },
    openInputs () {
      this.opens = false
    },
    closeInputs () {
      this.opens = true
      this.save({ purpose: this.data.averageScore })
    },
    timeopen () {
      this.opentime = false
    },
    timeclose () {
      this.opentime = true
      this.save({ purpose: this.data.averageScore })
    },
    clickName () {
      this.nameclick = false
    },
    closename () {
      this.nameclick = true
      this.save({ purpose: this.data.CRDname })
    },
    captainclick () {
      this.clickcaptain = false
    },
    closecaptain () {
      this.clickcaptain = true
      this.save({ purpose: this.data.captain })
    },
    secretary () {
      this.secretarys = false
    },
    closesecretary () {
      this.secretarys = true
      this.save({ purpose: this.data.secretary })
    },
    phoneclick () {
      this.clickphone = false
    },
    closephone () {
      this.clickphone = true
      this.save({ purpose: this.data.phone })
    },
    handleClick () {
      this.opena = !this.opena
    },
    handleClear () {
      this.opena = false
    },
    handleOk () {
      this.opena = false
    },
    async loadData () {
      try {
        let result = await api.getTeam(this.id, 'manager')
        lib.debugView && console.debug(`${this.name}.loadedTeam: %o`, result)
        team.active = api.isValid(result) ? result.data : {}
        this.data = team.active
      }
      catch (e) {
        console.error(e)
      }
    },

    onBeforeUpload () {
      lib.debugView && console.debug(`${this.name}.onBeforeUpload`)
      // this.$Notice.warning({ title: '上传中……' })
    },

    onLogoUploaded (response, file) {
      lib.debugView && console.debug(`${this.name}.onLogoUploaded: %o, %o`, response, file)
      if (response) {
        this.data.logoId = response.data
        this.save({ logoId: response.data })
      }
    },

    onFacadeUploaded (response, file) {
      lib.debugView && console.debug(`${this.name}.onFacadeUploaded: %o, %o`, response, file)
      if (response) {
        this.data.facadeId = response.data
        this.save({ facadeId: response.data })
      }
    },

    async save (data) {
      let result = await api.saveTeam(this.id, data)
      lib.debugView && console.debug(`${this.name}.savedTeam: %o`, result)
      if (api.isValid(result)) {
        this.$Notice.success({ title: '保存成功！' })
        this.loadData()
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
h1 {
    height: 80px;
    font-size: 20px;
    padding-left: 20px;
    line-height: 80px;
    border: 1px solid #eee;
}
.text_color>div{
  padding:5px;
}
.text_color>div>p,.text_color>div>b{
  color:#fff;
}
.text_color>div>p{
  padding:5px;
}
@import '../../font-awesome-4.7.0/css/font-awesome.min.css'
</style>
