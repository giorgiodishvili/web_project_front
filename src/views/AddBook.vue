<template>
  <div class="container">
    <p class="h4 mb-4">წიგნის შენახვა</p>
    <form id="add_book_form" action="#"
          @submit.prevent="addBook"
          method="POST">


      <div class="form-group">

        <label for="name">სახელი</label>
        <input v-model='book.name' type="text" id="name"
               class="form-control mb-4 col-4" placeholder="სახელი">
        <p v-if="book.name.trim().length<=0" style="color: red">გთხოვთ შეიყვანოთ წიგნის დასახელება</p>
      </div>

      <div class="form-group">
        <label for="author">ავტორი</label>
        <input v-model="book.author" type="text" id="author"
               class="form-control mb-4 col-4" placeholder="ავტორი">
        <p v-if="book.author.trim().length<=0" style="color: red">გთხოვთ შეიყვანოთ წიგნის დასახელება</p>

      </div>

      <div class="form-group">
        <label for="publisher">გამომცემლობა</label>
        <input v-model="book.publisher" type="text" id="publisher"
               class="form-control mb-4 col-4" placeholder="გამომცემლობა">


      </div>

      <div class="form-group">
        <label for="lang">ენა</label>
        <select v-model="book.language" class="form-select form-select-sm" aria-label=".form-select-sm example"
                id="lang">
          <option value="ქართული">ქართული</option>
          <option value="ინგლსიური">ინგლსიური</option>
          <option value="იტალიური">იტალიური</option>
          <option value="ფრანგული">ფრანგული</option>
        </select>
      </div>

      <div class="form-group">
        <label for="genre">ჟანრი</label>
        <select v-model="book.genre" class="form-select form-select-sm" aria-label=".form-select-sm example" id="genre">
          <option value="პოემა">პოემა</option>
          <option value="ლირიკა">ლირიკა</option>
          <option value="ეკრნიზაცია">ეკრნიზაცია</option>
          <option value="კომედია">კომედია</option>
          <option value="დეტექტივი">დეტექტივი</option>
          <option value="ფენტეზი">ფენტეზი</option>
          <option value="რომანი">რომანი</option>
        </select>
      </div>

      <div class="form-group">
        <label for="photoUrl">სურათის ლინკი</label>
        <input v-model="book.coverUrl" id="photoUrl"
               class="form-control mb-4 col-4"
               placeholder="სურათის ლინკი"/>
      </div>

      <p v-if="book.coverUrl.trim().length<=0" style="color: red">გთხოვთ შეიყვანოთ სურათის ლინკი</p>


      <div class="form-group">
        <label for="date">თარიღი</label>
        <input v-model="book.date" type="text" id="date"
               class="form-control mb-4 col-4"
               placeholder="თარიღი">

      </div>

      <button type="submit" class="btn btn-info col-2">Save</button>

    </form>

    <hr>

  </div>

</template>

<script>
import BookService from "@/service/BookService";

export default {
  name: "AddBook",

  data() {

    return {
      book: {
        name: ""
        , author: ""
        , coverUrl: ""
        , language: ""
        , genre: ""
        , date: ""
        , publisher: ""
        , quantity: 0
      }
    }
  },
  methods: {
    addBook() {
      this.book.forEach(val => val.trim())
      if (this.book.name.length > 0 && this.book.author.length > 0 && this.book.coverUrl.length > 0) {
        BookService.createBook(
            JSON.stringify(this.book)).then(response => {
          if (response)
            this.books = response.data;
          alert("Book Added SuccessFully")
          this.$router.push("/")
          console.log(response.data);
        })
            .catch(e => {
              alert(e.message)
              console.log(e);
            });
      } else {
        alert("Please Fill In All Required Fields")
      }
    },
  }
}


</script>

<style scoped>

</style>
