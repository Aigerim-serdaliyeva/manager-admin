<template>
  <div>
    <Breadcrumb />
    <router-view></router-view>    
  </div>
</template>

<script>
import Breadcrumb from '../main/Breadcrumb.vue'

export default {
  components: { 
    Breadcrumb 
    
  }
}
</script>