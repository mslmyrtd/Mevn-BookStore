<script setup>
defineProps(['books']);
</script>

<template>
  <table class="w-full border-separate border-spacing-2">
    <thead>
      <tr>
        <th class="border border-slate-600 rounded-md">No</th>
        <th class="border border-slate-600 rounded-md">Title</th>
        <th class="border border-slate-600 rounded-md max-md:hidden">Author</th>
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
            <router-link :to="`/books/detail/${book?._id}`">
              Details</router-link
            >
            <router-link :to="`/books/edit/${book?._id}`"> Edit</router-link>
            <router-link :to="`/books/delete/${book?._id}`">
              Delete</router-link
            >
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
