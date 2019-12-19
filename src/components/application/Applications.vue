<template>
  <el-tabs type="border-card" @tab-click="handleClick">
    <el-tab-pane label="Детали">
      <Details />
    </el-tab-pane>
    <el-tab-pane label="Материалы">
      <Materials />
    </el-tab-pane>
    <el-tab-pane label="История изменении">
      <History />
    </el-tab-pane>
    <el-tab-pane label="Обсуждения">
      
    </el-tab-pane>
  </el-tabs>
</template>


<script>
import History from './History.vue'
import Materials from './Materials.vue'
import Details from './Details.vue'

  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    components: { 
      Details, Materials, History
    },
    methods: {
      // handleClick(tab, event) {
      //   console.log(tab, event);
      // }
    }
  };
</script>