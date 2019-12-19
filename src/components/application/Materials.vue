<template>
  <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange"
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
      property="size"
      label="Объем"
      width="300">
    </el-table-column>
    <el-table-column
      property="sum"
      label="Сумма">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            name: 'Арматура А1 5',
            size: '3,6 м3',
            sum: '3,500 000тг'
          }, 
          {
            name: 'Арматура А1 6',
            size: '2,3 м3',
            sum: '3,500 000тг'
          }, 
          {
            name: 'Арматура Б1 5',
            size: '3,6 м3',
            sum: '2,500 000тг'
          }, 
        ],
        currentRow: null
      }
    },

    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    }
  }
</script>