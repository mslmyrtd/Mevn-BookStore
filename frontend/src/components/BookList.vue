<script setup>
import BookItem from '@/components/BookItem.vue';
</script>

<template>
  <div v-for="i in 4" :key="i" class="flex justify-center">
    <BookItem />
  </div>
</template>

<style scoped></style>
