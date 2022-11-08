<template>
    <AppBar>
      <AppBarSection>
        <KButton :icon="'menu'" :fill-mode="'flat'" />
      </AppBarSection>
  
      <AppBarSpacer :width="4" />
  
      <AppBarSection>
        <h1 class="title">
          <NuxtLink :to="'/'">
            Fifa 2022 Fiends League
            </NuxtLink></h1>
      </AppBarSection>
  
      <AppBarSpacer :width="32" />
  
      <AppBarSection>
        <HeaderMenu />
      </AppBarSection>
  
      <AppBarSpacer />
  
      <AppBarSection class="actions">
        <KButton :fill-mode="'flat'">
          <BadgeContainer
            :shape="'dot'"
            :themeColor="'info'"
            :size="'small'"
            :position="'inside'"
          >
            <span class="k-icon k-i-bell" />
          </BadgeContainer>
        </KButton>
      </AppBarSection>
  
      <AppBarSection>
        <span class="k-appbar-separator" />
      </AppBarSection>
  
      <AppBarSection>
        <KAvatar type="image">
          <img :src="kendokaAvatar" />
        </KAvatar>
      </AppBarSection>
    </AppBar>
  </template>
  <script>
  import {
    AppBar,
    AppBarSection,
    AppBarSpacer,
    Avatar as KAvatar,
  } from '@progress/kendo-vue-layout';
  import { Button } from '@progress/kendo-vue-buttons';
  import { BadgeContainer } from '@progress/kendo-vue-indicators';
  let kendokaAvatar = 'https://www.telerik.com/kendo-vue-ui/components/layout/assets/appbar/kendoka-vue.png';
  
  
  export default {
    components: {
      AppBar,
      AppBarSection,
      AppBarSpacer,
      KAvatar,
      BadgeContainer,
      KButton: Button,
    },
    data() {
      return {
        kendokaAvatar,
      };
    },
  };
  </script>
  
  <style scoped>
  body {
    background: #dfdfdf;
  }
  
  .title {
    font-size: 18px;
    margin: 0;
  }
  
  ul {
    font-size: 14px;
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  
  li {
    margin: 0 10px;
  }
  
  li:hover {
    cursor: pointer;
    color: #84cef1;
  }
  
  .k-button.k-button-md.k-rounded-md.k-button-solid.k-button-solid-base {
    padding: 0;
  }
  </style>