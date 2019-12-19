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
      label="Автор"
      width="350">
    </el-table-column>
    <el-table-column
      property="action"
      label="Действие"
      width="300">
    </el-table-column>
    <el-table-column
      property="comment"
      label="Комментарий">
    </el-table-column>
    <el-table-column
      property="time"
      label="Время действия">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            name: 'Василий Пупкин',
            action: 'Отправка заявки на согласование в ПТО',
            comment: 'Заявка готова к согласованию',
            time: '02.09.2020'
          } 
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