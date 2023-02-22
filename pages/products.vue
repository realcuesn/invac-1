<template>
  <div class="w-full">
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
definePageMeta({
  scrollToTop: true,
  pageTransition: {
    name: "rotate",
  },
});
</script>
