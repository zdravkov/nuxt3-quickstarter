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
        <div>
          <BadgeContainer
          :themeColor="'info'"
            :size="'small'"
           :rounded="'full'" :content="'content'">
            <span class="k-icon k-i-bell" />
            <template v-slot:content> {{count}}</template>
          </BadgeContainer>
        </div>  
      </AppBarSection>
  
      <AppBarSection>
        <span class="k-appbar-separator" />
      </AppBarSection>
  
      <AppBarSection>
        <KAvatar type="image" :rounded="'full'">
          <img :src="kendokaAvatar" />
        </KAvatar>
      </AppBarSection>
    </AppBar>
  </template>

<script setup>
  import {
    AppBar,
    AppBarSection,
    AppBarSpacer,
    Avatar as KAvatar,
  } from '@progress/kendo-vue-layout';
  import { Button as KButton } from '@progress/kendo-vue-buttons';
  import { BadgeContainer } from '@progress/kendo-vue-indicators';

const count = useState('count', () => 1 );
  const kendokaAvatar = 'https://www.telerik.com/kendo-vue-ui/components/layout/assets/appbar/kendoka-vue.png';
  
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