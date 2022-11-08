<template>
    <BottomNavigation :items="items" />
</template>
<script setup >
import { BottomNavigation } from "@progress/kendo-vue-layout";
const items =  ref([
        {
          text: "Inbox",
          id: 1,
          icon: "email",
          data: {
            path: "/",
          },
          selected: true,
        },
        {
          text: "Calendar",
          id: 2,
          icon: "calendar",
          data: {
            path: "/calendar",
          },
        },
        {
          text: "Profile",
          id: 3,
          icon: "user",
          data: {
            path: "/profile",
          },
        },
      ]);
</script>