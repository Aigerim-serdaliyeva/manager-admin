<template>
  <el-card 
    :style="{width: '600px'}"
  >
    <div class="comment__header">
      <span>Имя пользователя</span>
      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </small>
    </div>
    <div class="comment__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo fugit magni iste facere magnam quasi ratione doloremque adipisci qui.
    </div>
  </el-card>
</template>

<style lang="scss">
  .el-card {
    margin-bottom: 20px;
  }
  .comment {
    margin-bottom: 1rem;
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      font-weight: bold;
    }
    &__text {
      white-space: pre-line;
      text-align: left;
    }
  }
</style>