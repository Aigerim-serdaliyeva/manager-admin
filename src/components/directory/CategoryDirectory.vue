<template>
  <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    style="width: 100%">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      property="name"
      label="Наименование"
      width="350">
    </el-table-column>
    <el-table-column
      property="parent"
      label="Родительская категория"
      width="350">
    </el-table-column>
    <el-table-column>

    </el-table-column>
  </el-table>
</template>


<script>
import { mapMutations } from 'vuex'

  export default {
    data() {
      return {
        tableData: [
          {
            name: 'Арматура',
            parent: ''
          },  
          {
            name: 'Бетон',
            parent: ''
          },  
        ],
        currentRow: null
      }
    },

    methods: {
      ...mapMutations({
        setBreadcrumbs: 'breadcrumb/setBreadcrumbs'
      })
    },
    mounted() {
      this.setBreadcrumbs([
        { title: 'Справочники', url: '/directory' },
        { title: 'Категории материалов' }
      ])
    }
  }
</script>