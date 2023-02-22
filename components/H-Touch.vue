<template>
  <div class="w-full px-10 lg:px-20 pb-20 mt-24 lg:mt-0">
    <div class="w-full flex justify-between items-end">
      <h2 class="text-5xl lg:text-7xl">
        <span class="block font-normal">Let's</span>
        <span class="block font-semibold mt-2">Get in touch</span>
      </h2>

      <button class="hidden lg:flex items-center">
        <span class="text-2xl tracking-[0.6rem]">Contact Us</span>
        <img src="@/assets/arrow-right.svg" class="h-10 w-10 ml-5" alt="" />
      </button>
    </div>

    <div class="mt-20 flex items-center gap-x-10">
      <img src="@/assets/facebook.svg" class="h-7 w-7 lg:h-10 lg:w-10" alt="" />
      <img
        src="@/assets/instagram.svg"
        class="h-7 w-7 lg:h-10 lg:w-10"
        alt=""
      />
      <img src="@/assets/twitter.svg" class="h-7 w-7 lg:h-10 lg:w-10" alt="" />
      <img
        src="@/assets/linkedin.svg"
        class="h-7 w-7 lg:h-10 lg:w-10 mb-1 lg:mb-2"
        alt=""
      />
    </div>

    <button class="flex lg:hidden items-center mt-20">
      <span class="text-lg tracking-[0.6rem]">Contact Us</span>
      <img src="@/assets/arrow-right.svg" class="h-7 w-7 ml-1" alt="" />
    </button>
  </div>
</template>

<script setup></script>
