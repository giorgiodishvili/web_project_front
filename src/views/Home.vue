<template>
  <div class="home">
    <BookData msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BookData from '@/components/BookData.vue'

export default {
  name: 'Home',
  components: {
    BookData
  }
}
</script>
