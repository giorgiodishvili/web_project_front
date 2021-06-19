<template>
  <div class="row" style="margin-bottom: 10px;">
    <div class="col-sm-12 btn btn-success">
      <div class="column" v-for="(f, index) in books" :key="index" @click = "redirect(f.id)">
        <img  v-bind:src=f.coverUrl  alt="cover url"/>
        <br>
        <span>{{ f.name }}</span>
        <div v-bind:id="`container-${index}`"></div>
      </div>
    </div>
  </div>

</template>

<script>
import BookService from "@/service/BookService";
export default {
  name: 'BookList',
  data() {
    return {
      books: [],
    };
  },
  created()
  {
    this.getBooks();
  },

  methods: {
    getBooks() {
      BookService.getAll().then(response => {
        this.books = response.data.content;
        console.log(response.data.content);
      })
          .catch(e => {
            console.log(e);
          });
    },
    redirect(index){
      this.$router.push({name: "Book Detail", params: {id:index}})
    },

  }
}
</script>

<style scoped>

.row {
  margin: 0 auto;
  /*width: 960px;*/
}

.column {
  margin-top: 30px;
  float: left;
  width: 20%;
}
img {
  max-width:300px;
  max-height:300px;
  width: auto;
  height: auto;
  margin-bottom: 15px;
}
</style>
