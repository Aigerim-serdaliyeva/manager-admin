<template>
  <div>
    <BreadcrumbApplication />
    <el-tabs type="border-card" >
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
        <Discussion />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import BreadcrumbApplication from './BreadcrumbApplication.vue'
import Discussion from './Discussion.vue'
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
      BreadcrumbApplication, Details, Materials, History, Discussion
    },
    methods: {
      
    }
  };
</script>