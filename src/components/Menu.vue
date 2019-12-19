<template>
  <el-menu class="el-menu-demo" mode="horizontal" background-color="gray" text-color="white" 
    active-text-color="yellow"
    router
    :default-active="$route.path"
  >
    <el-menu-item index="/">Главная</el-menu-item>    
    <el-menu-item index="/application">Заявки</el-menu-item>
    <el-menu-item index="/management">Менеджемент</el-menu-item>
    <el-menu-item index="/directory">Справочники</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      
    }
  }
</script>