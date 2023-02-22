<template>
  <div class="w-full">
    <H-Hero></H-Hero>
    <H-Reel></H-Reel>
    <H-Vacuum></H-Vacuum>
    <H-Family></H-Family>
    <H-Touch></H-Touch>
    <H-Footer></H-Footer>
  </div>
</template>

<script setup>
useHead({
  title: "Invac - Home",
});
definePageMeta({
  scrollToTop: true,
  pageTransition: false,
});
</script>
