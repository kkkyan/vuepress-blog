<template>
  <div class="home">
    <PostsList />
  </div>
</template>

<script>
import PostsList from '../PostsList.vue'

export default {
  name: 'Home',

  components: {
    PostsList,
  },
}
</script>
