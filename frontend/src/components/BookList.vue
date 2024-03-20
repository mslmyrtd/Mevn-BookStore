<script setup>
import BookItem from '@/components/BookItem.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div v-for="i in 4" :key="i" class="flex justify-center">
    <RouterLink :to="'/books/' + i">
      <BookItem />
    </RouterLink>
  </div>
</template>

<style scoped></style>
