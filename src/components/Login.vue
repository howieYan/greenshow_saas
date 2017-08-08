<template>
  <div>
      <div class="el-dialog__wrapper">
            <div class="alert_header" id="widthAlert" style="padding: 20px 0px;">
                <center><img src="/static/favicon.ico" alt=""></center>
                <h3><b>高领秀后台登录</b></h3>
                <div style="width:100%;text-align:center">
                    <Form ref="formInline" :model="data" :rules="ruleInline" inline>
                        <Form-item prop="user">
                            <Input type="text" v-model="data.user" placeholder="请输入账户名称">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </Form-item>
                        <Form-item prop="password">
                            <Input type="password" v-model="data.password" placeholder="请输入登录密码">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </Input>
                        </Form-item>
                        <Checkbox-group v-show="false" style="text-align:left;">
                            <Checkbox label="记住密码"></Checkbox>
                        </Checkbox-group>
                        <Form-item>
                            <Button type="primary" @click="handleSubmit('formInline')" style="width:100%;">登录</Button>
                        </Form-item>
                    </Form>
                </div>

            </div>
      </div>
  </div>
</template>

<script>
import api from '../api'
import * as lib from '../lib'
import { account } from '../store'

export default {
  name: 'Login',
  data () {
    return {
      data: {
        user: lib.debug ? '13585562369' : '',
        password: lib.debug ? '11111111' : '',
        code: '1111'
      },
      ruleInline: {
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ]
      }
    }
  },

  computed: {
  },

  created () {
  },

  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          api.login(this.data.user, lib.md5(this.data.password), this.data.code)
            .then((result) => {
              if (api.isValid(result) && result.data && result.data.token) {
                account.setToken(result.data.token)
                account.player = result.data.player
                if (this.$route.query.redirect) {
                  this.$router.replace(this.$route.query.redirect)
                }
                else {
                  this.$router.replace('/')
                }
              }
            })
            .catch((error) => {
              console.error(error)
            })
        }
        else {
          this.$Message.error('表单验证失败!')
        }
      })
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
@import '../css/reset.css';
.el-dialog__wrapper{
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    overflow: auto;
    margin: 0;
}
.ivu-form-inline .ivu-form-item {
    display: inline-block;
    margin-right: 10px;
    vertical-align: top;
    width: 100%;
}
.ivu-form-item,.ivu-checkbox-group{
  margin:10px 0;
}
form{
  margin-top:20px;
  width:100%;
  padding:0 20%;
}
.alert_header {
    top: 25%;
    position: absolute;
    left: 50%;
    width: 400px;
    height: 400px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius:5px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
.alert_header>h3{
  height:50px;
  line-height:50px;
  text-align:center;
}
.alert_header>h3>b{
  font-size:18px;
}
</style>
