<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">Главная</el-breadcrumb-item>
    <el-breadcrumb-item
      v-for="item in breadcrumbs"
      :key="item.title"
      :to="item.url ? { path: item.url } : undefined">{{item.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    breadcrumbs: 'breadcrumb/breadcrumbs',
  }),
}
</script>

<style lang="scss">
  .el-breadcrumb {
    margin-bottom: 20px;
  }
</style>