<template>
  <layout>
    <div slot="main">
        <div class="ivu-table-fixed" style="width: 74px;" >
            <table class="table">
              <thead>
                <tr class="">
                      <th class="width_50px ">
                         <input type="checkbox" name="" id="allId" v-model="allData.parCheck" @change="allSelect()">
                      全选
                      </th>
                  </tr>
                   <tr class="" v-for="item in checkData">
                      <th class="width_50px line_padd5" style="text-align:left">
                        <input type="checkbox" name="" @change="singleSelect()" v-model="item.isCheck" :id="item.id">
                        <label :for="item.id"></label>
                      </th>
                  </tr>
                  
              </thead>
            </table>  
        </div>
        <div style="overflow-x:auto;">
          <table class="table">
              <thead>
                  <tr class="">
                        <th class=""style="padding-left:74px;"></th>
                      <th class="" v-for="item in tableText">{{ item }}</th>
                  </tr>
              </thead>
              <tbody id="list">
                  <tr class="activer" v-for="item in checkData" >
                    <td class=" width_50px" style="padding-left:74px;">
                        
                      </td>
                      <td class="">
                        <img :src="'/static/apply_1.png'" alt="">
                      </td>
                      <td class="" prop="nickname">Tony_z</td>
                      <td class=""  prop="name">张凌峰</td>
                      <td class="">男</td>
                      <td class="">18000000000</td>
                      <td class="" >
                         队员
                      </td>
                      <td class="" >
                          <Button type="ghost" @click="uploadImage">编辑</Button>
                          <Poptip placement ="top-end"
                              confirm
                              trigger="hover"
                              title="您确认删除这条内容吗？"
                              @on-ok="ok"
                              @on-cancel="cancel">

                              <Button type="error">删除</Button>

                          </Poptip>
                          <Poptip placement ="top-end"
                              confirm
                              title="您确认要加入黑名单吗？"
                              @on-ok="yesBlacklist"
                              @on-cancel="cancelNo">
                              <Button type="warning">加入黑名单</Button>
                          </Poptip>

                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
    </div>
  </layout>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      formItem: {
        input: '',
        radio: 'male',
        position: '队员'
      },
      formValidate: {
        name: '',
        nickname: '',
        gender: '',
        phone: '',
        position: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '昵称不能为空', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        phone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' }
        ],
        position: [
          { required: true, message: '请选择职称', trigger: 'change' }
        ]
      },
      tableText: ['头像', '昵称', '姓名', '性别', '手机', '职称', '操作'],
      alerts: true,
      uploadImages: true,
      loading: false,
      loading2: false,
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
  },
  created () {
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
    cancelNo () {
      this.$Message.info('已经取消加入黑名单了')
    },
    ok () {
      this.$Message.info('点击了确定')
    },
    cancel () {
      this.$Message.info('点击了取消')
    },
    singleSelect () {
      var vm = this
      var selectData = vm.checkData.filter(item => {
        return item.isCheck === true
      })
      selectData.length === vm.checkData.length ? vm.allData.parCheck = true : vm.allData.parCheck = false
    },
    toLoading () {
      this.loading = true
    },
    toLoading2 () {
      this.loading2 = true
    },
    handleEdit () {
      this.alerts = false
    },
    uploadImage () {
      this.uploadImages = false
    },
    closeuploadImages () {
      this.uploadImages = true
    },
    closeAlert () {
      this.alerts = true
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
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
@import '../css/reset.css';
span{
  color:#000;
}
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
    z-index:1000000;
    top:0!important;
}
</style>
