<template>
  <div>
    <span class="title">{{title}}</span>
    <ul class="breadcrumb">
      <li v-for="(item,index) in brumblist" :key="index">
        <router-link :to="item.path">{{item.meta.breadcrumbName}}</router-link>
        <span class="separator" v-if="index !== brumblist.length-1">{{separator}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    created () {
      this.getBreadcrumb()
    },
    data () {
      return {
        title: '',
        brumblist: ''
      }
    },
    props: ['separator'],
    methods: {
      getBreadcrumb () {
        this.brumblist = this.$route.matched
        this.$route.matched.forEach((item, index) => {
          item.meta.breadcrumbName === '首页' ? item.path = '/' : this.$route.path === item.path ? this.title = item.meta.breadcrumbName : ''
        })
      }
    },
    watch: {
      $route () {
        this.getBreadcrumb()
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    clear: both;
    li {
      float: left;
    }
    a {
      text-decoration: none;
      color: #333;
      &:hover {
        color: #20a0ff;
        text-decoration: underline;
      }
    }
  }

  .separator {
    display: inline-block;
    padding: 0 5px;
  }

  .title {
    display: inline-block;
    font-weight: 700;
    font-size: 20px;
  }

  .breadcrumb {
    float: right;
    padding: 5px;
  }
</style>
