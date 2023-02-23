<template>
  <div class="w-full px-10 lg:px-20 pb-20 mt-24 lg:mt-0">
    <div class="w-full flex justify-between items-end">
      <h2 class="text-5xl lg:text-7xl">
        <span class="block font-normal">Let's</span>
        <span class="block font-semibold mt-2">Get in touch</span>
      </h2>

      <button class="hidden lg:flex items-center touch-arrow-parent">
        <span class="text-2xl tracking-[0.6rem]">Contact Us</span>
        <img src="@/assets/arrow-right.svg" class="h-10 w-10 ml-5" alt="" />
      </button>
    </div>

    <div class="mt-20 flex items-center gap-x-10">
      <a href="https://www.facebook.com/Invacindia">
        <img src="@/assets/facebook.svg" class="h-7 w-7 lg:h-10 lg:w-10" alt=""
      /></a>
      <a href="https://instagram.com/invac_india">
        <img
          src="@/assets/instagram.svg"
          class="h-7 w-7 lg:h-10 lg:w-10"
          alt=""
      /></a>
      <a href="https://twitter.com/IndiaInvac">
        <img src="@/assets/twitter.svg" class="h-7 w-7 lg:h-10 lg:w-10" alt=""
      /></a>
      <a href="https://www.linkedin.com/company/invac-india/">
        <img
          src="@/assets/linkedin.svg"
          class="h-7 w-7 lg:h-10 lg:w-10 mb-1 lg:mb-2"
          alt=""
      /></a>
    </div>

    <button class="flex lg:hidden items-center mt-16 touch-arrow-parent">
      <span class="text-lg tracking-[0.6rem]">Contact Us</span>
      <img src="@/assets/arrow-right.svg" class="h-7 w-7 ml-1" alt="" />
    </button>
  </div>
</template>

<script setup></script>

<style scoped>
.touch-arrow-parent:hover img {
  transform: translateX(+30%);
  transition-duration: 1000ms;
}
</style>
