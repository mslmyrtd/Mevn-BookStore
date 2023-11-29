<script setup>
import { onMounted, ref } from "vue";
import BackButton from "@/components/BackButton.vue";
import Spinner from "@/components/Spinner.vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const title = ref("");
const author = ref("");
const publishYear = ref("");
const loading = ref(false);

const userId = route.params.id;

onMounted(async () => {
  loading.value = true;
  try {
    const response = await axios.get(`http://localhost:5000/books/${userId}`);
    const book = response.data;
    title.value = book.title;
    author.value = book.author;
    publishYear.value = book.publishYear;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});

const handleEditBook = async () => {
  const data = {
    title: title.value,
    author: author.value,
    publishYear: publishYear.value,
  };

  loading.value = true;

  try {
    await axios.put(`http://localhost:5000/books/${userId}`, data);
    router.push("/");
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};
</script>
<template>
  <div class="p-4">
    <BackButton />
    <h1 class="text-3xl my-4">Create Book</h1>
    <div v-if="loading">
      <Spinner />
    </div>
    <div
      class="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto"
    >
      <div class="my-4">
        <label class="text-xl mr-4 text-gray-500">Title</label>
        <input
          type="text"
          v-model="title"
          class="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div class="my-4">
        <label class="text-xl mr-4 text-gray-500">Author</label>
        <input
          type="text"
          v-model="author"
          class="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div class="my-4">
        <label class="text-xl mr-4 text-gray-500">Publish Year</label>
        <input
          type="number"
          v-model="publishYear"
          class="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <button class="p-2 bg-sky-300 m-8" @click="handleEditBook">Edit</button>
    </div>
  </div>
</template>
