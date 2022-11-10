<script setup lang="ts">
const { data } = await useFetch('/api/pageview')
const count = useState('count' );
useState('pageviews', () => data ? data.pageview : 0)
</script>

<template>
  <div>
    <span>{{ data?.pageview }}</span>
    page views since {{ data?.startAt }}
    count {{ count }}
  </div>
</template>