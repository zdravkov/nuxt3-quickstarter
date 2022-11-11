<template>
    <BottomNavigation :items="items" @select="onSelect" >

    </BottomNavigation>
</template>
<script setup >
import { BottomNavigation } from "@progress/kendo-vue-layout";

const count = useState('count' );

const onSelect = (e) => {
  if(e.itemIndex === 1) {
    count.value = count.value  + 1;
  } else {
    navigateTo(e.itemTarget.data.path)
  }
}
const items =  ref([
        {
          text: "League",
          id: 1,
          data: {
            path: "/",
          },
        },
        {
          text: "Add Note",
          icon: "plus",
          id: 1,
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