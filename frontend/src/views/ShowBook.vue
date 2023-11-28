<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import BackButton from "@/components/BackButton.vue";
import Spinner from "@/components/Spinner.vue";

const book = ref({});
const loading = ref(false);
const route = useRoute();

onMounted(async () => {
  loading.value = true;
  try {
    const response = await axios.get(
      `http://localhost:5000/books/${route.params.id}`
    );
    book.value = response.data;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="p-4">
    <BackButton />
    <h1 class="text-3xl my-4">Show Book</h1>
    <div v-if="loading">
      <Spinner />
    </div>
    <div
      v-else
      class="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4"
    >
      <div class="my-4">
        <span class="text-xl mr-4 text-gray-500">Id</span>
        <span>{{ book._id }}</span>
      </div>
      <div class="my-4">
        <span class="text-xl mr-4 text-gray-500">Title</span>
        <span>{{ book.title }}</span>
      </div>
      <div class="my-4">
        <span class="text-xl mr-4 text-gray-500">Author</span>
        <span>{{ book.author }}</span>
      </div>
      <div class="my-4">
        <span class="text-xl mr-4 text-gray-500">Publish Year</span>
        <span>{{ book.publishYear }}</span>
      </div>
      <div class="my-4">
        <span class="text-xl mr-4 text-gray-500">Create Time</span>
        <span>{{ new Date(book.createdAt).toString() }}</span>
      </div>
      <div class="my-4">
        <span class="text-xl mr-4 text-gray-500">Last Update Time</span>
        <span>{{ new Date(book.updatedAt).toString() }}</span>
      </div>
    </div>
  </div>
</template>
