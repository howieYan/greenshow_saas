<template>
    <layout>
        <div slot="main" style="position:relative;height:100%;overflow: hidden;">
          <div class="title_team">
              <h1>相册 </h1>
              <Card style="width:220px；">
                <div class="row">
                    <div class="modulImage_img">
                        <Icon type="ios-paper-outline" size="60" color=""></Icon>
                    </div>
                    <div class="col">
                      <p>优仕队9周年庆典</p>
                      <p>文件夹</p>
                    </div>
                </div>
              </Card>
          </div>
        </div>
    </layout>
</template>

<script>
export default {
  name: 'Page2',
  value3: 2,
  data () {
    return {
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

.title_team{
    width: 100%;
    height: 100%;
    background: #ffffff;
}
.title_team>h1 {
    height: 80px;
    font-size: 20px;
    padding-left: 20px;
    line-height: 80px;
    border: 1px solid #eee;
}
.modulImage{
  margin:20px;
  width:150px;
  height:70px;
  box-shadow: 0 0 10px #cac6c6;
}
.modulImage_img{
  width:60px;
  height:60px;
}
.modulImage_img>img{
  width:100%;
  height:100%;
}

</style>
