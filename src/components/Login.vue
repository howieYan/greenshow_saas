<template>
  <div>
      <div class="el-dialog__wrapper">
            <div class="alert_header" id="widthAlert">
                <h3><b>高领秀后台登录</b></h3>
                <div style="width:100%;text-align:center">
                    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                        <Form-item prop="user">
                            <Input type="text" v-model="formInline.user" placeholder="Username">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </Form-item>
                        <Form-item prop="password">
                            <Input type="password" v-model="formInline.password" placeholder="Password">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </Input>
                        </Form-item>
                        <Checkbox-group style="text-align:left;">
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
export default {
  name: 'Login',
  data () {
    return {
      formInline: {
        user: '',
        password: ''
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
          this.$Message.success('提交成功!')
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
    height:300px;
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
