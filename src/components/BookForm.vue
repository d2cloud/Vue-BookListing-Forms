<template>
  <b-form v-on:submit.prevent="bookSubmit(bookData)" class="" action="#" method="post">
    <b-form-input v-model="bookData.bookTitle" type="text" name="title" value="" placeholder="Book Title"></b-form-input>
    <b-form-input v-model="bookData.bookAuthor" type="text" name="author" value="" placeholder="Book Author"></b-form-input>
    <b-form-checkbox v-model="bookData.finishedReading" type="checkbox" id="finishedReading">
      <label for="finishedReading">Finished Reading</label>
    </b-form-checkbox>
    <b-form-radio v-model="bookData.ownership" type="radio" value="borrowed">
      <label for="borrowed">borrowed</label>
    </b-form-radio>
    <b-form-radio v-model="bookData.ownership" type="radio" value="bought">
      <label for="bought">bought</label>
    </b-form-radio>
    <b-button type="submit" name="button">Add Book</b-button>
  </b-form>
</template>

<script>
export default {
  name: "BookForm",
  props: ["books"],
  data() {
    return {
      bookData: {
        bookTitle: "",
        bookAuthor: "",
        finishedReading: false,
        ownership: []
      }
    };
  },
  methods: {
    bookSubmit(bookData) {
      this.$emit("addBook", bookData);
    }
  }
};
</script>

<style>
</style>
