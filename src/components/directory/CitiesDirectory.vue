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
    <el-table-column>

    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            name: 'Алматы',
          },  
          {
            name: 'Астана',
          },  
        ],
        currentRow: null
      }
    },

    methods: {
      
    }
  }
</script>