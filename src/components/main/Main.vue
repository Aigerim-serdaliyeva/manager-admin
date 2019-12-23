<template>
  <el-row :gutter="12">
    <el-col :span="6">
      <el-card shadow="always">
        <h2>Стр заявки</h2>
        <router-link to="/" >Создание стр заявки</router-link> <br>
        <router-link to="/" >Просмотр всех заявок</router-link>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="always">
        <h1>Оперативные заявки</h1>
        <router-link to="/" >Создание оперативной заявки</router-link> <br>
        <router-link to="/" >Просмотр всех заявок</router-link>
      </el-card>
    </el-col> 
    <el-col :span="6">
      <el-card shadow="always">
        <h1>Материальные заявки</h1>
        <router-link to="/" >Создание материальной заявки</router-link> <br>
        <router-link to="/" >Просмотр всех заявок</router-link>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="always">
        <h1>Оплаты</h1>
        <router-link to="/" >Добавление оплаты</router-link> <br>
        <router-link to="/" >Просмотр оплат</router-link>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  
}
</script>