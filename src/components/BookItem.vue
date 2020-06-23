<template>
  <b-list-group-item>
    {{book.title}} : {{book.author}}
    <span v-if="book.finishedReading">Read</span>
    <span v-else>Not Read</span>
  </b-list-group-item>
</template>

<script>
export default {
  name: 'BookItem',
  props: ['book'],
};
</script>

<style>
li {
  display: block;
  margin: 0 10px;
}
</style>