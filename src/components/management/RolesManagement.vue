<template>
  <div>
    <el-card>
      <h2 class="role__title">Детали</h2>
      <div class="role">
        <h4 class="role__name">Код</h4>
        <div class="role__text">ptomgr</div>
      </div>
      <div class="role">
        <h4 class="role__name">Наименоваие</h4>
        <div class="role__text">Менеджер ПТО</div>
      </div>

      <h2 class="role__title">Привилегии</h2>
      
      <div class="role__block">
        <div class="role__block__title">Стратегические заявки</div>
        <el-checkbox v-model="checked">Просмотр</el-checkbox>
      </div>
      <div class="role__block">
        <div class="role__block__title">Оперативные заявки</div>
        <el-checkbox v-model="checked">Просмотр</el-checkbox>
      </div>
      <div class="role__block">
        <div class="role__block__title">Материальные заявки</div>
        <el-checkbox v-model="checked">Просмотр</el-checkbox>
      </div>
    </el-card>
    <div class="buttons">
      <el-button type="success" plain>Редактировать</el-button>
      <el-button type="danger" plain>Удалить</el-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
      return {
      };
    },

    methods: {
      ...mapMutations({
        setBreadcrumbs: 'breadcrumb/setBreadcrumbs'
      })
    },

    mounted() {
      this.setBreadcrumbs([
        { title: 'Менеджемент', url: '/management' },
        { title: 'Роли', }
      ])
    }
}
</script>

<style lang="scss" scoped>
  .el-card {
    text-align: left;
  }
  .role {
    display: flex;
    align-items: center;
    color: gray;
    &__name {
      width: 150px;
    }
    &__title {
      text-align: left;
      font-size: 18px;
      border-bottom: 1px solid gray;
      margin-bottom: 15px;
    }
    &__block {
      margin-bottom: 25px;
      &__title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  }
</style>