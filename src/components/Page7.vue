<template>
  <layout>
  <div class="clounm2">
                                  <div>
                                      <Input  icon="ios-search" placeholder="请输入昵称或姓名..." style="width: 300px"></Input>
                                  </div>
                                  <div style="padding-left:20px;">未报名的球员：</div>
                                  <div style="width:100%;overflow-x: auto;">
                                    <table class="table">
                                        <thead>
                                            <tr class="">
                                                <th style="text-align: -webkit-left;">
                                                    <input type="checkbox" name="" id="allId" v-model="allData.parCheck" @change="allSelect()">
                                                      全选
                                                </th>
                                                <th class="">
                                                    姓名
                                                </th>
                                                <th class="" >昵称</th>
                                                <th class="" >差点</th>
                                                <th class="" >性别</th>
                                                <th class="" >城市</th>
                                            </tr>
                                        </thead>
                                        <tbody id="list">
                                            <tr class="" v-for="item in checkData">
                                                <td style="text-align: -webkit-left;">
                                                  <input type="checkbox" name="" @change="singleSelect()" v-model="item.isCheck" :id="item.id">
                                                  <label :for="item.id"></label>
                                                </td>
                                                <td class="">张凌峰</td>
                                                <td class="">张三</td>
                                                <td class="">9</td>
                                                <td class="">男</td>
                                                <td class="" >
                                                  上海
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                  </div>
                                  <Button type="info" style="float:right;margin:20px 20px 10px 0;">确认添加</Button>
                              </div>
       <div class="clounm2">
                                  <h3 style="text-align:center;line-height: 32px;">选择的报名人员</h3>
                                  <div>
                                    <Checkbox-group v-model="disabledGroup">
                                        <Checkbox label="显示姓名（默认显示昵称）"></Checkbox>
                                    </Checkbox-group>
                                  </div>
                                  <div style="width:100%;overflow-x: auto;">
                                    <table class="table">
                                        <thead>
                                            <tr class="">
                                                <th style="text-align: -webkit-left;">
                                                    <input type="checkbox" name="" id="allId" v-model="allDatas.parCheck" @change="allSelects()">
                                                      全选
                                                </th>
                                                <th class="">
                                                    姓名
                                                </th>
                                                <th class="" >昵称</th>
                                                <th class="" >职称</th>
                                                <th class="" >差点</th>
                                                <th class="" >性别</th>
                                                <th class="" >报名时间</th>
                                            </tr>
                                        </thead>
                                        <tbody id="list">
                                            <tr class="" v-for="item in checkDatas">
                                                <td style="text-align: -webkit-left;">
                                                  <input type="checkbox" name="" @change="singleSelects()" v-model="item.isCheck" :id="item.id">
                                                  <label :for="item.id"></label>
                                                </td>
                                                <td class="" v-show="disabledGroup">张凌峰</td>
                                                <td class="" v-show="!disabledGroup">***</td>
                                                <td class="">张三</td>
                                                <td class="">队员</td>
                                                <td class="">9</td>
                                                <td class="">男</td>
                                                <td class="" >
                                                  2017-7-12
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                  </div>
                                  <Button type="info" style="float:right;margin:20px 20px 10px 0;">删除</Button>
                              </div>
  </layout>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
@import '../css/reset.css';
span{
  color:#000;
}
</style>
