<template>
  <div class="d-center">
    <el-form 
      :model="controls" 
      :label-position="labelPosition" 
      :rules="rules" 
      ref="form" 
      label-width="80px" 
      :style="{width: '500px'}"
      @submit.native.prevent="onSubmit"
    >

      <h2 class="el-form__title">Вход</h2>

      <el-form-item label="Email" prop="email">
        <el-input v-model.trim="controls.email"></el-input>
      </el-form-item>

      <el-form-item label="Пароль" prop="password">
        <el-input v-model.trim="controls.password"></el-input>
      </el-form-item>
      
      <el-form-item label="" prop="type">
        <el-checkbox-group v-model="controls.type">
          <el-checkbox label="Запомнить" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button 
          type="primary" 
          :loading="loading"
          native-type="submit"
        >Войти</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        loading: false,
        labelPosition: 'left',
        controls: {
          email: '',
          password: '',
          type: [],
        },
        rules: {
          email: [
            { required: true, message: 'Введите логин', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Введите пароль', trigger: 'blur' },
            { min: 4, message: 'Пароль должен быть не менее 4 символов', trigger: 'blur'}
          ],
          type: [
            { type: 'array', required: true, message: 'Запомнить вас', trigger: 'change' }
          ],
        }
      };
    },
    mounted() {
      const {message} = this.$route.query 

      switch (message) {
        case 'login':
          this.$message.info('Для начала войдите в систему')
          break
        case 'logout':
          this.$message.success('Вы успешно вышли из системы')
      }
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            this.loading = true
            
            try {
              const formData = {
                login: this.controls.login,
                password: this.controls.password
              }
              await this.$store.dispatch('auth/login', formData)
            } catch(e) {
              this.loading = false
            }
          }
        });
      },
    }
  }
</script>

<style lang="scss">
  .d-center {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .el-form {
    text-align: left;
    &__title {
      text-align: center;
    }
  }

  .el-button {
    margin: 5px auto 0;
    display: block;
    width: 100%;
  }
</style>