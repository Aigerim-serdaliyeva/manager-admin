<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import Header from './Header.vue'

export default {
  components: { 
    Header
    
  }
}
</script>

<style >
  .el-header {
    height: auto !important;
  }
  .el-container {
    /* height: 100%; */
    min-height: 100vh;
  }
  .el-main {
    flex-grow: 1;
  }
</style>