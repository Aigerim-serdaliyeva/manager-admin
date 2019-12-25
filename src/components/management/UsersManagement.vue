<template>
  <el-form 
      :model="controls" 
      :label-position="labelPosition" 
      :rules="rules" 
      ref="form" 
      label-width="140px" 
      :style="{width: '800px'}"
      @submit.native.prevent="onSubmit"
    >

      <el-card>
        <div class="form__content">
          <el-form-item label="ФИО" prop="name">
            <el-input v-model.trim="controls.name"></el-input>
          </el-form-item>

          <el-form-item label="Номер телефона" prop="phone">
            <el-input v-model.trim="controls.password"></el-input>
          </el-form-item>

          <el-form-item label="Роль">
            <el-select v-model="controls.role" placeholder="">
              <el-option label="Менеджер ПТО" value="Менеджер ПТО"></el-option>
              <el-option label="Менеджер" value="Менеджер"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-card>

     <div class="buttons">
        <el-button type="success" native-type="submit" plain>Сохранить</el-button>
        <el-button type="danger" native-type="submit" plain>Отменить</el-button>
     </div>
    </el-form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
      return {
        loading: false,
        labelPosition: 'left',
        controls: {
          name: '',
          phone: '',
          role: ''
        },
        rules: {
          name: [
            { required: true, message: 'Введите ФИО', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      ...mapMutations({
        setBreadcrumbs: 'breadcrumb/setBreadcrumbs'
      }),
      onSubmit() {
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            this.loading = true
            
          }
        });
      },
    },
    mounted() {
      this.setBreadcrumbs([
        { title: 'Менеджемент', url: '/management' },
        { title: 'Пользователи' }
      ])
    }
  }
</script>

<style lang="scss" >
  .form__content {
    max-width: 500px;
    width: 100%;
  }

  .buttons {
    display: flex;
    max-width: 250px;
    justify-content: space-between;
    text-align: right;
    margin: 20px 0 0 auto;
  }

  .el-select {
    width: 100%;
  }
</style>