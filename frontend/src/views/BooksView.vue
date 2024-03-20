<script setup>
import BookList from '@/components/BookList.vue';
import Pagination from '@/components/Pagination.vue';
import { ref, computed } from 'vue';

const itemsPerPage = ref(5);
const currentPage = ref(1);

const booksLength = ref(20);

const totalPages = computed(() =>
  Math.ceil(booksLength.value / itemsPerPage.value)
);

const paginatedBooks = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return [];
});
</script>

<template>
  <div class="grid m-5 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
    <BookList />
  </div>
  <Pagination :currentPage="currentPage" :totalPages="totalPages" />
</template>
