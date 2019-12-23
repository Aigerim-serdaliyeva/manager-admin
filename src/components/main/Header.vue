<template>
  <div>
    <div class="header">
      <h2>LOGO</h2>
      <router-link to="/"><small><i class="el-icon-right"></i></small></router-link>      
    </div>
    <Menu />
  </div>
</template>

<script>
import Menu from './Menu.vue'

export default {
  components: { Menu
    
  }
}
</script>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* color: #fff; */
  }
  
</style>