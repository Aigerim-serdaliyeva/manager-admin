<template>
  <el-form ref="form" :model="controls" label-width="90px">
    <el-card>
      <h2>Редактирование материала</h2>
      <el-form-item label="Материал">
        <el-select v-model="controls.region" placeholder="Введите текст для поиска">
          <el-option label="Арматура 6" value="Арматура6"></el-option>
          <el-option label="Арматура 7" value="Арматура7"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Количество" prop="number">
        <el-input v-model.trim="controls.number"></el-input>
        <p>Ед.измерения</p>
      </el-form-item>

      <div class="edit">
        <div class="edit__block">
          <div class="edit__title">Цена по смете</div>
          <div class="edit__price">тг</div>
        </div>
        <div class="edit__block">
          <div class="edit__title">Остаток от стр заявки</div>
          <div class="edit__price">Ед.изм</div>
        </div>
        <div class="edit__block">
          <div class="edit__title">Итого</div>
          <div class="edit__price">тг</div>
        </div>
      </div>
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
        }
      };
    },
    methods: {
      onSave() {
      }
    }
  };
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

  .edit {
    &__block {
      display: flex;
      justify-content: space-between;
      width: 300px;
      margin-bottom: 5px;
    }
    &__title {
      text-align: right;
      margin-right: 20px;
      width: 200px;
    }
    &__price {
      text-align: left;
      width: 100px;
      font-weight: bold;
      font-size: 12px;
    }
  }
</style>