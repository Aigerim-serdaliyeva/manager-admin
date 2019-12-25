<template>
  <div>
    <h2>Material Application</h2>
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
import Discussion from './Discussion.vue'
import History from './History.vue'
import Materials from './Materials.vue'
import Details from './Details.vue'
import { mapMutations } from 'vuex'

export default {
  components: { 
    Details, 
    Materials, 
    History, 
    Discussion    
  },
  methods: {
    ...mapMutations({
      setBreadcrumbs: 'breadcrumb/setBreadcrumbs'
    })
  },
  mounted() {
    this.setBreadcrumbs([
      { title: 'Заявки', url: '/application' },
      { title: 'Материальные заявки' }
    ])
  }
}
</script>