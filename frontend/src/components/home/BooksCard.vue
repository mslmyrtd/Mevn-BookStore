<script setup>
import { ref } from "vue";

import { RouterLink } from "vue-router";

defineProps(["books"]);
</script>
<template>
  <div
    className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    v-for="book in books"
    :key="book._id"
  >
    <div
      class="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <h2 class="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {{ book.publishYear }}
      </h2>
      <h4 class="my-2 text-gray-500">{{ book._id }}</h4>
      <div class="flex justify-start items-center gap-x-2">
        <h2 class="my-1">Title :{{ book.title }}</h2>
      </div>
      <div class="flex justify-start items-center gap-x-2">
        <h2 class="my-1">Author : {{ book.author }}</h2>
      </div>
      <div class="flex justify-between items-center gap-x-2 mt-4 p-4">
        <RouterLink :to="'/books/detail/' + book._id"> İnfo </RouterLink>
        <RouterLink :to="'/books/edit/' + book._id"> Edit </RouterLink>
        <RouterLink :to="'/books/delete/' + book._id"> Delete </RouterLink>
      </div>
    </div>
  </div>
</template>
