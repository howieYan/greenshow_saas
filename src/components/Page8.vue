<template>
  <div>
    <Row>
        <Col span="25">
            <Card>
               <div style="overflow-x:auto;">
                <div class="row">
                    <div class="col">
                        <div style="text-align:left;">
                             <Input  icon="ios-search" placeholder="请输入手机号码或姓名..." ></Input>
                        </div>
                    </div>
                    <div class="col" style="text-align:center;">
                        上次更新：2017-8-1  10:00
                    </div>
                    <div class="col" style="text-align:center;">
                        <Button type="primary" :loading="loading" @click="toLoading">
                            <span v-if="!loading">刷新</span>
                            <span v-else>刷新中...</span>
                        </Button>
                    </div>
                </div>
               
                <table class="table1">
                    <thead>
                        <tr class="">
                            <th class="">状态</th>
                            <th class="">名次</th>
                            <th class="">姓名</th>
                            <th class="">性别</th>
                            <th class="">昵称</th>
                            <th class="">完成洞数</th>
                            <th class="">杆差</th>
                            <th class="">总杆</th>
                            <th class="">差点</th>
                            <th class="">净杆</th>
                            <th class="">前九</th>
                            <th class="">后九</th>
                            <th class="">积分卡张数</th>
                        </tr>
                    </thead>
                </table>
                 <tbody id="list">
                      <tr class="activer">
                          <td class="">
                              <Select v-model="model3" style="width:120px">
                                  <Option v-for="item in optionsSles" :value="item.value" :key="item.value">{{ item.label }}</Option>
                              </Select>
                          </td>
                          <td class="">{{ index+1 }}</td>
                          <td class="">张三</td>
                          <td class="">男</td>
                          <td class="">天佑</td>
                          <td class="">F</td>
                          <td class="">-2</td>
                          <td class="">70</td>
                          <td class="">9</td>
                          <td class="">5</td>
                          <td class="">35</td>
                          <td class="">35</td>
                          <td class="">1</td>
                      </tr>
                  </tbody>
                    <Collapse>
                      <Panel name="1">
                          史蒂夫·乔布斯
                          <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                      </Panel>
                      <Panel name="2">
                          斯蒂夫·盖瑞·沃兹尼亚克
                          <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                      </Panel>
                      <Panel name="3">
                          乔纳森·伊夫
                          <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                      </Panel>
                    </Collapse>
              </div>
            </Card>
        </Col>
    </Row>
  </div>
  
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      spanLeft: 3,
      model3: '0',
      optionsSles: [
        {
          value: '0',
          label: '正常(Field)'
        },
        {
          value: '1',
          label: '未晋级(Misscut)'
        },
        {
          value: '2',
          label: '弃权(WD)'
        },
        {
          value: '3',
          label: '取消资格(DQ)'
        }
      ]
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style scoped>
@import '../css/reset.css';
.ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title{
  padding: 20px 10px;
}

.ivu-input-wrapper{
  margin-bottom: 21px;
}
.ivu-btn-small{
  padding:2px 10px;
}
/*.table{
  border-left:1px solid #eee;
  border-right: 1px solid #eee;
}*/
tr.activer:hover{
  background:#ebf7ff;
}
.title_team{
    width: 100%;
    background: #ffffff;
}
.table1 th, .table1 td{
    padding: 10px 20px;
    line-height: 30px;
    border-left: 0;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.title_team>h1 {
    height: 80px;
    font-size: 20px;
    padding-left: 20px;
    line-height: 80px;
    border: 1px solid #eee;
}
.height_li>li{
   height:52px;line-height:52px;
}
.clounm100{
  border:1px solid #eee;
  padding-left:20px;
  padding-top:20px;
}
.table1 th, .table1 td{
    padding: 10px 20px;
    line-height: 30px;
    border-left: 0;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.table th, .table td{
    padding: 10px 20px;
    line-height: 30px;
    border-bottom: 1px solid #ddd;
    border-left: 0;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.border_none>.table th,.border_none>.table td{
    padding: 10px 10px;
    line-height: 30px;
    border-left: 0;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border:0;
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
.alert_headers{

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
}
.border_event>div{
    text-align:center;
}
.border_event>b{
    border-left:2px solid #fc6621;
    padding-left: 10px;
    margin-left:12%;
}
@media all and (min-width: 376px)and (max-width:768px){
  .clounm2 {
    border: 1px solid #eee;
    padding: 10px 0;
  }
}
.line_padd5{
    padding:10px 8px!important;
}
.ivu-table-fixed{
    background:#fff;
    top:0!important;
}
.ivu-card-body{
  padding: 0px!important;  
}
</style>

