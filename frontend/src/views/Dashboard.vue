<script setup>
import Spinner from '../components/Spinner.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import BooksTable from '../components/home/BooksTable.vue';
import BooksCard from '../components/home/BooksCard.vue';
const books = ref([]);
const loading = ref(false);
const showType = ref('table');
onMounted(() => {
  loading.value = true;
  axios('http://localhost:5000/books')
    .then((res) => {
      books.value = res.data.data;
      loading.value = false;
    })
    .catch((err) => console.log(err));
  loading.value = false;
});
</script>
<template>
  <div class="p-4">
    <div class="flex justify-center items-center gap-x-4">
      <button
        :class="{
          'font-bold bg-sky-300 hover:bg-sky-600 px-4 py-2 rounded-lg':
            showType === 'table'
        }"
        @click="showType = 'table'"
      >
        Table
      </button>
      <button
        :class="{
          'font-bold bg-sky-300 hover:bg-sky-600 px-4 py-2 rounded-lg':
            showType === 'card'
        }"
        @click="showType = 'card'"
      >
        Card
      </button>
    </div>
    <div class="flex justify-center items-center gap-x-4">
      <h1 class="text-3xl my-8">Book List</h1>
    </div>
  </div>
  <div>
    <template v-if="loading">
      <Spinner />
    </template>
    <BooksTable v-if="showType === 'table'" :books="books" />
    <BooksCard v-else :books="books" />
  </div>
</template>
