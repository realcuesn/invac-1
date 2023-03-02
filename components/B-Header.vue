<template>
  <div class="px-10 py-10">
    <div class="flex items-center justify-between w-full">
      <NuxtLink to="/">
        <img src="@/assets/logo-white.svg" class="h-5 ml-1" alt=""
      /></NuxtLink>
        <img v-if="$route.name != 'digital-brochure'" @click="$router.go(-1)" src="@/assets/arrow-right.svg" class="rotate-180 h-5" alt="">
    </div>

    <div class="flex justify-between items-end pt-5">
      <div class="text-3xl">
        <span class="block font-light">Digital</span>
        <span class="block font-semibold">Brochure</span>
      </div>

      <div class="flex items-center mb-1 scale-75 -mr-6">
        <a href="tel:+919248009941" class="text-sm leading-4">
          Any Questions?
          <span class="block font-semibold">Talk to our experts</span>
        </a>

        <img src="@/assets/support.svg" class="h-8 ml-2" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>
