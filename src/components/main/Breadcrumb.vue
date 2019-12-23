<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">Главная</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/application' }">Заявки</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('items', {
      setItems: "breadcrumb/setItems",
      pushItem: "breadcrumb/pushItem",
      popItem: "breadcrumb/popItem",
      replaceItem: "breadcrumb/replaceItem",
      emptyItems: "breadcrumb/emptyItems"
    })
  }
}
</script>

<style lang="scss">
  .el-breadcrumb {
    margin-bottom: 20px;
  }
</style>