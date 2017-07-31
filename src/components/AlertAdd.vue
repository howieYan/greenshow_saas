<template>
<div>
    <div class="ui dimmer fadeIn active" v-if="!modal.show" v-on:click="modalSwitch">
        <div class="ui modal active">
            <h3 class="ui header">This is a header!</h3>
        </div>
    </div>
    <button v-on:click="modalSwitch" class="ui inverted blue button">nihao </button>
</div>
</template>

<script>
export default {
  name: 'alertadd',
  data () {
    return {
      modal: {
        show: true
      },
      article: {
        title: 'This is a title',
        content: 'Hi there!',
        fontSize: 26
      },
      comments: [
        { name: 'John Doe', said: 'Great!', show: true },
        { name: 'John Doe', said: 'Great!', show: true },
        { name: 'John Doe', said: 'Great!', show: true },
        { name: 'John Doe', said: 'Great!', show: true }
      ]
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    modalSwitch: function () {
      this.modal.show = !this.modal.show
    }
  },
  ready: function () {
    this.modalSwitch()
  },
  mounted () {
  }
}
</script>

<style scoped>
@import '../css/reset.css';
body,html{
    height: 100%;
    background:#ddd;
}
.title_team{
    width: 100%;
    height: 100%;
    background: #ffffff;
}
.title_team>h1{
    height: 80px;
    font-size: 20px;
    padding-left: 20px;
    line-height: 80px;
    border: 1px solid #eee;
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
    height: 80px;
    line-height: 80px;
}
.height_line_input>div{
    position: relative;
    width: 230px;
    padding-left:20px;
}
.height_line_input>div>input{
    margin-top: 20px;
    padding: 10px 40px  10px 10px;
    border: 1px solid #eee;
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
.height_line_btn>button{
    padding:10px;
    border-radius:5px;
    border: 1px solid #eee;
    background: #ffffff;
}
.height_line_btn>button.back_color{
    background-color: #44b549;
    color: #fff;
}
.table_sheet{
    width:100%;
    overflow-x:auto;
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
    border-right:1px solid #ddd ;
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
.table td >button{
    padding: 5px;
    background: #ffffff;
    border: 1px solid #eee;
}
.width_50px{
    width: 50px;
}
.width_50px>input{
    margin-left: 15px;
    margin-top: 10px;
    width: 20px;
    height: 20px;
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
    z-index: 19891014;
    background-color: #000;
    opacity: 0.3;
    height: 100%;
    top:0px;
    left:0;
    width:100%;
}
.alert_header{
    width: 80%;
    height: 50%;
    position: absolute;
    background: #ffffff;
    z-index: 1000000000000;
    border-radius: 5px;
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
    padding-left: 30%;
    margin-top: 10px;
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
</style>
