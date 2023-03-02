<template>
  <div class="w-full">
    <B-Header></B-Header>

    <div class="mt-5 w-full flex flex-col italic text-[#686868] gap-y-2 mb-2">
      <NuxtLink
        to="/brochure-products/speedy-vac"
        class="w-full p-10 flex justify-between items-center shadow-lg"
      >
        <h2 class="text-2xl font-semibold">Speedy Vac</h2>
        <img src="@/assets/chevron-down.svg" class="h-7 -rotate-90" alt=""
      /></NuxtLink>

      <NuxtLink
        to="/brochure-products/kick-vac"
        class="w-full p-10 flex justify-between items-center shadow-lg"
      >
        <h2 class="text-2xl font-semibold">KickVac</h2>
        <img src="@/assets/chevron-down.svg" class="h-7 -rotate-90" alt=""
      /></NuxtLink>

      <NuxtLink
        to="/brochure-products/cabinet-vac"
        class="w-full p-10 flex justify-between items-center shadow-lg"
      >
        <h2 class="text-2xl font-semibold">Cabinet Vac</h2>
        <img src="@/assets/chevron-down.svg" class="h-7 -rotate-90" alt=""
      /></NuxtLink>

      <NuxtLink
        to="/brochure-products/retractable-hose"
        class="w-full p-10 flex justify-between items-center shadow-lg"
      >
        <h2 class="text-2xl font-semibold">Retractable Hose</h2>
        <img src="@/assets/chevron-down.svg" class="h-7 -rotate-90" alt=""
      /></NuxtLink>

      <NuxtLink
        to="/brochure-products/drawer-vac"
        class="w-full p-10 flex justify-between items-center shadow-lg"
      >
        <h2 class="text-2xl font-semibold">Drawer Vac</h2>
        <img src="@/assets/chevron-down.svg" class="h-7 -rotate-90" alt=""
      /></NuxtLink>
    </div>
    <H-Footer></H-Footer>
  </div>
</template>

<script setup></script>
