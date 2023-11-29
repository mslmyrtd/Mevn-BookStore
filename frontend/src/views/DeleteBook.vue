<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import BackButton from "@/components/BackButton.vue";
import Spinner from "@/components/Spinner.vue";
const router = useRouter();
const route = useRoute();
const loading = ref(false);

const handleDeleteBook = async () => {
  loading.value = true;
  try {
    await axios.delete(`http://localhost:5000/books/${route.params.id}`);
    loading.value = false;
    router.push("/");
  } catch (error) {
    loading.value = false;
    console.log(error);
  }
};
const handleCancel = () => router.push("/");
</script>
<template>
  <div class="p-4">
    <BackButton />
    <h1 class="text-3xl my-4">Delete Book</h1>
    <div v-if="loading">
      <Spinner />
    </div>
    <div
      class="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto"
    >
      <h3 class="text-2xl">Are you sure you want to delete this book?</h3>

      <button
        class="p-4 bg-red-600 text-white m-8 w-full"
        @click="handleDeleteBook"
      >
        Yes, delete it
      </button>
      <button
        class="p-4 bg-green-600 text-white m-8 w-full"
        @click="handleCancel"
      >
        Cancel
      </button>
    </div>
  </div>
</template>
