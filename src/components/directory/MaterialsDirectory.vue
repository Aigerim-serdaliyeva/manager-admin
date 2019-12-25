<template>
  <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    style="width: 100%">
    <el-table-column
      label="id"
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      property="name"
      label="Наименование"
      width="350">
    </el-table-column>
    <el-table-column
      property="measurement"
      label="Единица измерения"
      width="350">
    </el-table-column>
    <el-table-column
      property="category"
      label="Категория"
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
            name: 'Арматура A1',
            category: 'Арматура',
            measurement: 'кг'
          },  
          {
            name: 'Бетон В25',
            category: 'Бетон',
            measurement: 'м3'
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
        { title: 'Материалы' }
      ])
    }
  }
</script>