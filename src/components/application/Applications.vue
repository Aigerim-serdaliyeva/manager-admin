<template>
  <div>
    <Breadcrumb />
    <router-view></router-view>
    
    <ApplicationEdit />
  </div>
</template>


<script>
import ApplicationEdit from './ApplicationEdit.vue'
import Breadcrumb from '../main/Breadcrumb.vue'

  export default {
    components: { 
      Breadcrumb, ApplicationEdit 
    },
    methods: {
      
    }
  };
</script>