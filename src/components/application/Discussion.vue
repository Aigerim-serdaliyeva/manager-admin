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
import CommentForm from '../CommentForm.vue'
import Comment from '../Comment.vue'

export default {
  components: { Comment, CommentForm
    
  }
}
</script>