<template>
  <div class="w-full">
    <div class="w-full lg:hidden">
      <B-Header></B-Header>

      <div class="mt-10 w-full flex flex-col gap-y-2 mb-2">
        <NuxtLink to="/brochure/typhoon" class="block w-full p-10 shadow-lg"
          ><img src="@/assets/typhoon.svg" class="h-7" alt=""
        /></NuxtLink>
        <NuxtLink to="/brochure/techno-plus" class="block w-full p-10 shadow-lg"
          ><img src="@/assets/techno-plus.svg" class="h-8" alt=""
        /></NuxtLink>

        <NuxtLink
          to="/more-products"
          class="w-full p-10 flex justify-between items-center shadow-lg"
        >
          <h2 class="text-2xl font-medium italic text-[#686868]">
            More Products
          </h2>
          <img src="@/assets/arrow-right.svg" class="h-4" alt=""
        /></NuxtLink>

        <NuxtLink
          to="/brochure-accessories"
          class="w-full p-10 flex justify-between items-center shadow-lg"
        >
          <h2 class="text-2xl font-medium italic text-[#686868]">
            Accessories
          </h2>
          <img src="@/assets/arrow-right.svg" class="h-4" alt=""
        /></NuxtLink>
      </div>
      <H-Footer></H-Footer>
    </div>

    <div class="hidden h-screen text-xl lg:grid place-content-center">
      <h4>Please access this page on a smartphone.</h4>
    </div>
  </div>
</template>

<script setup></script>
