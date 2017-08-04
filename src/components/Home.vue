<template>
    <layout>
        <div slot="main">
            <div style="margin:20px;">
              <a href="http://wx.golfgreenshow.com/#/">
                  我的球队
              </a>
            </div>   
        </div>
    </layout>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      open: true
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    openInput () {
      this.open = false
    },
    closeInput () {
      this.open = true
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
