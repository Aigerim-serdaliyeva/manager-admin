<template>
  <el-menu class="el-menu-demo" mode="horizontal" background-color="gray" text-color="white" 
    active-text-color="yellow"
    router
    :default-active="$route.path"
  >
    <el-menu-item index="/">Главная</el-menu-item>    
    <el-submenu index="/application">
      <template slot="title">Заявки</template>
      <el-menu-item index="/application/strategic">Стратегические заявки</el-menu-item>
      <el-menu-item index="/application/operating">Оперативные заявки</el-menu-item>
      <el-menu-item index="/application/material">Материальные заявки</el-menu-item>
      <el-menu-item index="/application/payment">Оплаты</el-menu-item>
    </el-submenu>
    <el-submenu index="/management">
      <template slot="title" >Менеджемент</template>
      <el-menu-item index="/management/users">Пользователи</el-menu-item>
      <el-menu-item index="/management/roles">Роли</el-menu-item>
    </el-submenu>
    <el-submenu index="/directory">
      <template slot="title" >Справочники</template>
      <el-menu-item index="/directory/object">Объекты</el-menu-item>
      <el-menu-item index="/directory/materials">Материалы</el-menu-item>
      <el-menu-item index="/directory/category-materials">Категории материалов</el-menu-item>
      <el-menu-item index="/directory/cities">Города</el-menu-item>
      <el-menu-item index="/directory/suppliers">Поставщики</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    },
    methods: {
      
    }
  }
</script>