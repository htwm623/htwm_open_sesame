<template>
  <div>
    <el-button @click="testClick">测试按钮</el-button>

    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name:'parkingMain',

  methods: {
    testClick () {
      let currentPath = this.$router.currentRoute.fullPath
      console.log(currentPath)
    }
  },

}
</script>