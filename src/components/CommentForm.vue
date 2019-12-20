<template>
  <el-form
    :model="controls"
    :rules="rules" 
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <el-form-item>
      <el-input 
        v-model="controls.text"
        placeholder="Ваше сообщение" 
        type="textarea"
        :rows="4"
        resize="none"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        plain
        :loading="loading"
        native-type="submit"
      >Отправить</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      controls: {
        text: ''
      },
      rules: {
        text: [
          { required: true, message: 'Введите ваш комментарий', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if(valid) {
          this.loading = true;

          // const formData = {
          //   text: this.controls.text,
          // }
          
          try {
            
            setTimeout(() => {
              this.$emit('created')
              this.$message.success('Комментарий добавлен')
              this.controls.text = ''
              this.loading = false
            }, 1000)
          } catch(e) {
            // throw(e)
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-form {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    &-item {
      &:first-child {
        flex-grow: 1;
        margin-right: 30px;
      }
    }
  }
</style>