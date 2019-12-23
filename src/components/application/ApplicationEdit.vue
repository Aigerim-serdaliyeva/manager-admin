<template>
  <el-form ref="form" :model="controls" label-width="140px">
    <el-card>
      <h2>Редактирование отправки заявок</h2>

      <el-form-item label="Номер документа">
        <el-input v-model.trim="controls.document"></el-input>
      </el-form-item>

      <el-form-item label="Наименование">
        <el-input v-model="controls.name"></el-input>
      </el-form-item>

      <el-form-item label="Стр заявка">
        <el-select v-model="controls.zhk" placeholder="Введите текст для поиска">
          <el-option label="ЖК 'Алма тау'" value="ЖК 'Алма тау'"></el-option>
          <el-option label="ЖК 'Мега'" value="ЖК 'Мега'"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Пятно">
        <el-select v-model="controls.region" placeholder="">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Заявка на месяц">
        <el-select v-model="controls.month" placeholder="">
          <el-option label="Январь" value="Январь"></el-option>
          <el-option label="Февраль" value="Февраль"></el-option>
        </el-select>
      </el-form-item>
    </el-card>
    
    <el-form-item size="large">
      <el-button>Отмена</el-button>
      <el-button type="primary" plain @click="onSave">Сохранить</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
   data() {
      return {
        controls: {
          number: '',
          document: '',
          name: '',
          zhk: '',
          month: ''
        }
      };
    },
    methods: {
      onSave() {
      }
    }
}
</script>

<style lang="scss" scoped>
  .el-form {
    text-align: left;
    &-item {
      width: 500px;
    }
  }
  .el-card {
    margin-bottom: 25px;
  }
  .el-select {
    width: 100%;
  }
</style>