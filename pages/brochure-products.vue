<template>
    <div>
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
  