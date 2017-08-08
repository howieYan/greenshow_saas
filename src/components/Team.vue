<template>
    <layout>
        <div slot="main">
            <div style="margin:20px;">
                <h1>球队首页</h1>

                <div class="header1" v-bind:style="{ backgroud: team.active && team.active.facade ? `url(${team.active.facade}) no-repeat center`:'', 'background-color': !team.active || !team.active.facade ? '#CCCCCC':''}">
                  <ul class="row">
                      <li class="back" onclick="closeFrame()"></li>
                      <li class="textCenter textCenter0 col">
                          <img :src="team.active && team.active.logo ? team.active.logo : ''" alt="" with="200px" height="200px">
                          <p style="color:#fff;font-size:16px;cursor: pointer;" >
                          口号：{{ team.active && team.active.purpose ? team.active.purpose : '' }}
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
                              </div>
                              <div class="col">
                                  <div>{{ team.active && team.active.memberCount ? team.active.memberCount : '无' }}</div>
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
                <editor content="" :height="400" :z-index="1000" :auto-height="true" :show-module-name="false"></editor>
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
@import '../../font-awesome-4.7.0/css/font-awesome.min.css'
</style>
