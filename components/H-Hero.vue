<template>
  <div
    class="h-[75vh] lg:h-[75vh] w-full flex flex-col justify-between bg-[#191919] text-white pb-20"
  >
    <nav
      class="w-full flex items-center justify-between pt-14 lg:pt-20 px-10 lg:px-20"
    >
      <NuxtLink to="/">
        <img src="@/assets/logo-black.svg" class="h-7 sm:h-7 lg:h-7" alt="" />
      </NuxtLink>

      <div class="hidden lg:flex items-center">
        <div @click="menuState = true" class="flex cursor-pointer items-center">
          <span class="tracking-[0.8rem] text-xl block">Products</span>
          <img src="@/assets/chevron-down.svg" class="h-5 w-5" alt="" />
        </div>

        <NuxtLink
          to="/demo"
          class="text-xl tracking-[0.8rem] ml-20 p-5 rounded-xl px-8 border-2 border-[#FF7900]"
        >
          Book A Demo
        </NuxtLink>
      </div>

      <div @click="menuState = true" class="lg:hidden">
        <img src="@/assets/burger.svg" class="h-8 w-8 sm:h-10 sm:w-10" alt="" />
      </div>
    </nav>

    <div
      class="flex flex-col lg:flex-row w-full justify-between items-center mt-36 lg:mt-0 px-10 lg:px-20 pb-10 sm:pb-20 lg:pb-10"
    >
      <div class="w-full">
        <h3 class="text-4xl sm:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          <span class="block font-light">Cleaning</span>
          <span class="block font-semibold">Made Easy</span>
        </h3>
        <p class="mt-6 lg:mt-10 text-base sm:text-2xl lg:text-2xl">
          Central vacuum systems clean dust, allergens, viruses,
          <br class="hidden 2xl:block" />
          and pollutants invisible to the naked eye.
        </p>
      </div>

      <div
        @click="menuState = true"
        class="cursor-pointer flex w-full items-center mt-14 lg:mt-0 lg:justify-end pr-10 hero-shop-now"
      >
        <span class="text-lg lg:text-2xl tracking-[0.8rem] lg:tracking-[0.9rem]"
          >Shop Now</span
        >
        <span>
          <img
            src="@/assets/arrow-right.svg"
            class="h-10 w-10 ml-5 lg:ml-10"
            alt=""
          />
        </span>
      </div>
    </div>

    <!--     <div class="hidden lg:block"></div> -->
  </div>
</template>

<script setup>
const menuState = useState("menuState");
</script>

<style scoped>
.hero-shop-now:hover span img {
  transform: translateX(+30%);
  transition-duration: 1000ms;
}
</style>
