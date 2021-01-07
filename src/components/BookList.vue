<template>
  <div>
    <h1>{{title}}</h1>
    <input type="text" placeholder="Search Books" v-model="searchInput">
    <b-card>
    <b-list-group>
      <BookItem v-for='book in searchedBooks' :key='book.id' :book='book'></BookItem>
    </b-list-group>
    </b-card>
    <hr><h2>Filtered Books By Ownership</h2>
    <select v-model="holding">
      <option v-for="filter in filters" :key="filter.id">{{ filter }}</option>
    </select>
    <b-card>
      <b-list-group>
        <BookItem v-for='book in filteredBooks' :key='book.id' :book='book'></BookItem>
      </b-list-group>
    </b-card>
    <br><hr>
    <b-card>
      <BookForm @addBook='addBookToBackend'></BookForm>
    </b-card>
    <br><hr>
    <br><hr>
    <b-card>
      <BackendTest></BackendTest>
    </b-card>
  </div>
</template>

<script>
import _ from "lodash";
import axios from 'axios';
import BookItem from "./BookItem";
import BookForm from "./BookForm";
import BackendTest from "./BackendTest";

export default {
  name: "BookList",
  data() {
    return {
      title: "All Books",
      states: ["Want to Read", "Read", "Reading"],
      filters: ["bought", "borrowed"],
      holding: "bought",
      searchInput: "",
      books: this.getBooksFromBackend()
      /*books: [
        { title: "Self-Reliance", author: "Ralph Waldo Emerson", finishedReading: true, ownership: "borrowed"},
        { title: "American Gods", author: "Neil Gaiman", finishedReading: false, ownership: "bought"},
        { title: "Amusing Ourselves to Death", author: "Neil Postman", finishedReading: true, ownership: "borrowed"}
      ]
      */
    };
  },
  components: {
    BookItem,
    BookForm,
    BackendTest
  },
  computed: {
    filteredBooks() {
      return _.filter(this.books, ["ownership", this.holding]);
    },
    searchedBooks() {
      const searchFilter = book => {
        return book.title.toLowerCase().match(this.searchInput.toLowerCase());
      };
      return _.filter(this.books, searchFilter);
    }
  },
  methods: {
    appendBook(bookData) {
      this.books.push({ title: bookData.bookTitle, author: bookData.bookAuthor, finishedReading: bookData.finishedReading, ownership: bookData.ownership });
    },
    getBooksFromBackend () {
    const path = `http://localhost:5000/api/books`
    axios.get(path)
    .then(response => {
      this.books = response.data.books
    })
    .catch(error => {
      console.log(error)
    })
    },
    addBookToBackend(bookData) {
      const path = `http://localhost:5000/api/books`;
      const params = {
        title: bookData.bookTitle,
        author: bookData.bookAuthor,
        finishedReading: bookData.finishedReading,
        ownership: bookData.ownership
        };
      axios.post(path, params)
      .then(response => {
        console.log('added');
      })
      .catch(error => {
        console.log(error);
      })
    },
  }
};
</script>

<style>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}
</style>
