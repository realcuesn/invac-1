<template>
  <div class="w-full lg:h-screen lg:flex items-center pb-20 lg:pb-0">
    <div class="w-full lg:w-[65%] mt-20">
      <img src="@/assets/family.webp" class="w-full" alt="" />
    </div>
    <div
      class="w-full lg:w-[35%] mt-10 lg:h-full flex flex-col justify-center px-10"
    >
      <h4 class="text-5xl lg:text-7xl">
        <span class="block">Our</span>
        <span class="block font-semibold">Product</span>
        <span class="block font-semibold">Family</span>
      </h4>

      <button @click="menuState = true"
        class="flex w-fit items-center p-4 px-10 lg:px-16 justify-center rounded-2xl border-[#FF7900] border-2 mt-10 lg:mt-20 family-shop-now"
      >
        <span class="text-lg lg:text-xl tracking-[0.6rem]">Shop Now</span>
        <img
          src="@/assets/arrow-right.svg"
          class="h-7 w-7 lg:h-10 lg:ml-10"
          alt=""
        />
      </button>
    </div>
  </div>
</template>

<script setup>
const menuState = useState("menuState");
</script>


<style scoped>
.family-shop-now:hover img {
  transform: translateX(+30%);
  transition-duration: 1000ms;
}
</style>
