<script setup>
import Spinner from "../components/Spinner.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

const books = ref([]);
const loading = ref(false);
onMounted(() => {
  loading.value = true;
  axios("http://localhost:5000/books")
    .then((res) => {
      console.log(res.data);
      books.value = res.data.data;
      loading.value = false;
    })
    .catch((err) => console.log(err));
  loading.value = false;
});
</script>

<template>
  <div class="p-4">
    <div className="flex justify-center items-center gap-x-4">
      <h1 class="text-3xl my-8">Book List</h1>
    </div>
  </div>
  <div>
    <template v-if="loading">
      <Spinner />
    </template>
    <template v-else>
      <table class="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th class="border border-slate-600 rounded-md">No</th>
            <th class="border border-slate-600 rounded-md">Title</th>
            <th class="border border-slate-600 rounded-md max-md:hidden">
              Author
            </th>
            <th class="border border-slate-600 rounded-md max-md:hidden">
              Publish Year
            </th>
            <th class="border border-slate-600 rounded-md">Operations</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in books" :key="book._id" class="h-8">
            <td class="border border-slate-700 rounded-md text-center">
              {{ index + 1 }}
            </td>
            <td class="border border-slate-700 rounded-md text-center">
              {{ book?.title }}
            </td>
            <td
              class="border border-slate-700 rounded-md text-center max-md:hidden"
            >
              {{ book?.author }}
            </td>
            <td
              class="border border-slate-700 rounded-md text-center max-md:hidden"
            >
              {{ book?.publishYear }}
            </td>
            <td class="border border-slate-700 rounded-md text-center">
              <div class="flex justify-center gap-x-4">
                <router-link :to="`/books/details/${book?._id}`"> </router-link>
                <router-link :to="`/books/edit/${book?._id}`"> </router-link>
                <router-link :to="`/books/delete/${book?._id}`"> </router-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>
