<template>
  <el-menu class="el-menu-demo" mode="horizontal" background-color="gray" text-color="white" 
    active-text-color="yellow"
    router
    :default-active="$route.path"
  >
    <el-menu-item index="/">Главная</el-menu-item>    
    <!-- <el-menu-item index="/application">Заявки</el-menu-item> -->
    <el-submenu index="/application">
      <template slot="title">Заявки</template>
      <el-menu-item index="/application/strategic">Стратегические заявки</el-menu-item>
      <el-menu-item index="/application/operating">Оперативные заявки</el-menu-item>
      <el-menu-item index="/application/material">Материальные заявки</el-menu-item>
      <el-menu-item index="/application/payment">Оплаты</el-menu-item>
    </el-submenu>
    <!-- <el-submenu index="2">
      <template slot="title">Заявки</template>
      <el-menu-item index="2-1">Материальные заявки</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-submenu>
    </el-submenu> -->
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