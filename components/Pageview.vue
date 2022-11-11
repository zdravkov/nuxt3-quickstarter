<script setup lang="ts">
const { data } = await useFetch('/api/pageview')

</script>

<template>
  <div text-gray:80>
    <span font-500 text-gray>{{ data ? data.pageview : 'no' }}</span>
    page views since {{data ? data.startAt : 'no'}}
  </div>
</template>