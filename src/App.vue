<template>
  <div id="app">
    <b-container fluid class="bv-example-row">
      <b-img-lazy fluid :src="require('./assets/logo.png')"></b-img-lazy>
      <book-list></book-list>
    </b-container>
  </div>
</template>

<script>
import BookList from './components/BookList';

export default {
  name: 'app',
  components: {
    BookList,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
