<template>
  <div class="row" style="margin-bottom: 10px;">
    <div class="col-sm-12 btn btn-success">
        <img  v-bind:src=book.coverUrl  alt="cover url"/>
        <br>
        <span>{{ book.name }}</span>

      </div>

    </div>

  <button @click="updateBook(book.id)">Update</button>
  <button @click="removeBook(book.id)">Delete</button>
</template>

<script>
import BookService from "@/service/BookService";

export default {
name: "Detail",

  data () {
      return {
        book: {},
      }
  },
  created()
  {
    this.getBook(this.$route.params.id);
  },
  methods: {
      getBook(id){
        BookService.getBookById(id).then(response => {
          this.book = response.data;
          console.log(response.data);
        })
            .catch(e => {
              console.log(e);
            });

      },
    removeBook(id){

      if (!confirm("Do You Really Want To Remove this Book?")) {
        return
      }
      BookService.removeBookById(id).then(response => {
        alert("Book Successfully Removed")
        this.$router.push("/")
        console.log(response.data);
      })
          .catch(e => {
            console.log(e);
          });
    },
    updateBook(id){
        this.$router.push({name: "Update Book", params: {id:id}})
    }
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
