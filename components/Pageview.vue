<script setup lang="ts">
const { data } = await useFetch('/api/pageview')

</script>

<template>
  <div text-gray:80>
    <span font-500 text-gray>{{ data.pageview }}</span>
    page views since
  </div>
</template>