<template>
  <Header />
  <NuxtPage />
  <Footer />
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

</style>