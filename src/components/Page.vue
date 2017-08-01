<template>
    <layout>
        <div slot="main">
            <div style="margin:20px;">
                <h1>球队基本信息</h1>
                <editor content="" :height="500" :z-index="1000" :auto-height="true" :show-module-name="false"></editor>
            </div>
        </div>
        <iframe slot="preview" src="http://devwx.golfgreenshow.com/#/team/CEDE230F-3FFB-4F30-9966-B4E6F236EEDA" id="show" width="100%" height="99%" marginheight="0" marginwidth="0" frameborder="0" scrolling="auto"></iframe>
    </layout>
</template>

<script>
export default {
  name: 'Page',
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
h1 {
    height: 80px;
    font-size: 20px;
    padding-left: 20px;
    line-height: 80px;
    border: 1px solid #eee;
}
@import '../../font-awesome-4.7.0/css/font-awesome.min.css'
</style>
