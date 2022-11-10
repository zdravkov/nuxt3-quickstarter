<template>
    <BottomNavigation :items="items" />
</template>
<script setup >
import { BottomNavigation } from "@progress/kendo-vue-layout";
useState('count', () => 11 );
const items =  ref([
        {
          text: "League",
          id: 1,
          data: {
            path: "/",
          },
        },
        {
          text: "login",
          id: 2,
          icon: "user",
          data: {
            path: "/login",
          },
        },
      ]);
</script>