<template>
    <div>
      <div>
        <kendo-menu :items="items">
          <template v-slot:itemRender="{ props }">
              <NuxtLink :to="props.item.link" :class="props.class">
                  {{props.item.text}}
              </NuxtLink>
          </template>
        </kendo-menu>
      </div>
    </div>
  </template>
  
  <script>
  import { Menu } from "@progress/kendo-vue-layout";
  
  export default {
    components: {
      "kendo-menu": Menu
    },
    data: function () {
      return {
        items: [
          {
            text: "Login",
            link: '/login',
            render: "itemRender",
          },
          {
            text: "rules",
            link: '/rules',
            render: "itemRender",
            icon: "heart",
          },
          {
            text: "pageviews",
            link: '/pageviews',
            render: "itemRender",
            icon: "eye",
          },
        ],
      };
    },
  };
  </script>