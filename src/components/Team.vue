<template>
    <layout>
        <div slot="main">
            <div style="margin:20px;">
                <div style="text-align:center;" class="row">
                  <h3 style="text-align:right;font-size:22px;padding:5px 0;" @click="playName" class="col">
                      <div v-if="isView">{{ data.name ? data.name : '' }}</div>
                      <Input v-else v-model="data.name" placeholder="请输入平均成绩" style="width:200px;"></Input>
                  </h3>
                  <Checkbox v-model="data.published" class="col" style="text-align:left;margin-top:12px;margin-left:10px;font-size:16px;">{{ data.published ? '已发布' : '未发布' }}</Checkbox>
                </div>
                <div class="header1" style="background-size:100% 100%;" v-bind:style="{ 'background': !team.active || data.facade ? 'url('+data.facade+') no-repeat center' : '#ccc'}">
                  <ul class="row">
                      <li class="textCenter textCenter0 col">
                          <img :src="data.logo ? team.active.logo : ''" alt="" with="200px" height="200px">
                          <div style="color:#fff;font-size:16px;cursor: pointer;" @click="clickEdit">
                          口号: {{  data.purpose ? team.active.purpose : '无' }}
                          </div>
                          <Input v-if="!isView" v-model="data.purpose" placeholder="请输入口号" style="width:200px;"></Input>
                          <div class="row string padding_Top10" style="padding-top:0;">
                              <div class="col">
                                  <div v-if="isView">{{ data.averageScore ? team.active.averageScore : '无' }}</div>
                                  <Input v-else v-model="data.averageScore" placeholder="请输入平均成绩" style="width:200px;"></Input>
                                  <p @click="clickEdit" style="color:#fff;font-size:20px;">平均成绩</p>
                              </div>
                              <div class="col">
                                  <div v-if="isView">{{ data.memberCount ? team.active.memberCount : '无' }}</div>
                                  <Input v-else v-model="data.memberCount" placeholder="请输入球队人数" style="width:200px;"></Input>
                                  <p @click="clickEdit" style="color:#fff;font-size:20px;">球队人数</p>
                              </div>
                          </div>
                          <div class="row text_color">
                              <div class="col">
                                  <p @click="clickEdit">现任会长</p>
                                  <b v-if="isView">{{ data.chairman ? team.active.chairman : '无' }}</b>
                                  <Input v-else v-model="data.chairman" placeholder="请输入名字" style="width:120px;"></Input>
                              </div>
                              <div class="col">
                                  <p @click="clickEdit">现任队长</p>
                                  <b v-if="isView">{{ data.captain ? team.active.captain : '无' }}</b>
                                  <Input v-else v-model="data.captain" placeholder="请输入名字" style="width:120px;"></Input>
                              </div>
                              <div class="col">
                                  <p @click="clickEdit">现任秘书</p>
                                  <b v-if="isView">{{ data.secretary ? team.active.secretary : '无' }}</b>
                                  <Input v-else v-model="data.secretary" placeholder="请输入名字" style="width:120px;"></Input>
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

                <p style="text-align:center;line-height:30px;font-size:16px;">球队章程</p>
                <editor :content="data.constitution" :height="400" :auto-height="true" :show-module-name="false" @change="updateContent"></editor>

                <div class="row">
                    <div class="col">
                        <p>成立时间</p>
                        <b>{{ data.establishDate ? formatTs(team.active.establishDate, "YYYY-MM-DD") : '无' }}</b>
                        <template>{{ value3 }}</template>
                        <Date-picker v-model="data.date"
                            :open="opena"
                            confirm
                            placement="bottom"
                            @on-clear="handleClear"
                            @on-ok="handleOk" style="z-index:10000000;">
                            <a href="javascript:void(0)" @click="handleClick">
                                <Icon type="ios-calendar-outline"></Icon>
                                <template v-if="value3 === ''" style="color:#000;">选择日期</template>
                            </a>
                        </Date-picker>
                    </div>

                    <div class="col">
                        <p @click="clickEdit">联系电话</p>
                        <b v-if="isView">{{ data.phone ? team.active.phone : '无' }}</b>
                        <Input v-else v-model="data.phone" placeholder="请输入手机号码" style="width:120px;"></Input>
                    </div>
                </div>

                <Button type="primary" size="large" style="float:right;margin-top:20px;margin-right:20px;" @click="clickSave">保存</Button>
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
      isView: true,
      opena: false,
      isdisabled: false,
      isSue: '0',
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

    // data () {
    //   lib.debugView && console.debug(`${this.name}.data.dirty: %o`, this.data)
    // }
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
    formatTs: lib.formatTs,

    clickEdit () {
      this.isView = !this.isView
      // this.save({ purpose: this.data.purposea })
    },
    clickName () {
      if (this.nameclick === true) {
        this.nameclick = false
      }
      else {
        this.nameclick = true
        this.save({ purpose: this.data.CRDname })
      }
    },
    captainclick () {
      if (this.clickcaptain === true) {
        this.clickcaptain = false
      }
      else {
        this.clickcaptain = true
        this.save({ purpose: this.data.captain })
      }
    },
    secretary () {
      if (this.secretarys === true) {
        this.secretarys = false
      }
      else {
        this.secretarys = true
        this.save({ purpose: this.data.secretary })
      }
    },
    phoneclick () {
      if (this.clickphone === true) {
        this.clickphone = false
      }
      else {
        this.clickphone = true
        this.save({ purpose: this.data.phone })
      }
    },
    playName () {
      this.isView = false
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
        if (this.data.constitution === null) {
          this.data.constitution = ''
          this.data.date = lib.formatTs(this.data.establishDate, null)
        }
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
        this.data.logoId = response.data.id
        this.data.logo = response.data.url
        // this.save({ logoId: response.data.id })
      }
    },

    onFacadeUploaded (response, file) {
      lib.debugView && console.debug(`${this.name}.onFacadeUploaded: %o, %o`, response, file)
      if (response) {
        this.data.facadeId = response.data.id
        this.data.facade = response.data.url
        // this.save({ facadeId: response.data.id })
      }
    },

    clickSave () {
      lib.debugView && console.debug(`${this.name}.clickSave: %o`, this.data)
      this.isView = true
      this.data.establishDate = lib.formatTime(this.data.date, 'X')
      this.save(this.data)
    },

    updateContent (data) {
      lib.debugView && console.debug(`${this.name}.updateContent: %o`, data)
      this.data.constitution = data
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
  .ivu-breadcrumb>span:last-child{
    font-weight:0;
  }
  .text_color>div>p,.text_color>div>b{
    color:#fff;
  }
  .text_color>div>p{
    padding:5px;
  }
  @import '../../font-awesome-4.7.0/css/font-awesome.min.css'
</style>
