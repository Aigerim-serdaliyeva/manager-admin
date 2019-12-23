<template>
  <div>
    <Comment 
      v-for="comment in 3" 
      :key="comment"
    />
    
    <CommentForm />
  </div>
</template>

<script>
import CommentForm from '../main/CommentForm.vue'
import Comment from '../main/Comment.vue'

export default {
  components: { Comment, CommentForm  }
}
</script>