<template>
    <div>
    <h1> Hi, {{ name }}!</h1>
    <KButton>
        <NuxtLink
        to="/"
      >
        Back
      </NuxtLink>
    </KButton>
    <h2 :style="{'color': appConfig?.theme.primaryColor}">
        theme: {{appConfig?.theme.primaryColor}}
    </h2>
</div>
</template>
<script setup lang="ts">
import { Button as KButton} from '@progress/kendo-vue-buttons'
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})
const route = useRoute()
const appConfig = useAppConfig()

const name = route.params.id;
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - of ${name}` : 'Site Title';
    },
  meta: [
    { name: 'description', content: 'Amazing -' + name }
  ],
})
</script>