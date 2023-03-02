<template>
  <div class="w-full">
    <B-Header></B-Header>

    <div class="mt-10 w-full flex flex-col gap-y-2 mb-2">
      <NuxtLink
        to="/products/techno-plus-158"
        class="w-full flex items-center justify-between p-10 shadow-lg"
        ><img src="@/assets/techno-plus.svg" class="h-7" alt="" />

        <p class="p-1 px-6 rounded-lg border-neutral-900 border-2">158</p>
      </NuxtLink>
      <NuxtLink
      to="/products/techno-plus-230"
        class="w-full flex items-center justify-between p-10 shadow-lg"
        ><img src="@/assets/techno-plus.svg" class="h-7" alt="" />

        <p class="p-1 px-6 rounded-lg border-neutral-900 border-2">230</p>
      </NuxtLink>

      <NuxtLink
      to="/products/techno-plus-258"
        class="w-full flex items-center justify-between p-10 shadow-lg"
        ><img src="@/assets/techno-plus.svg" class="h-7" alt="" />

        <p class="p-1 px-6 rounded-lg border-neutral-900 border-2">258</p>
      </NuxtLink>

      <NuxtLink
      to="/products/techno-plus-booster-158"
        class="w-full flex items-center justify-between p-10 shadow-lg"
        ><img src="@/assets/techno-plus.svg" class="h-7" alt="" />
        <p class="text-xl font-semibold">+</p>
        <img src="@/assets/typhoon.svg" alt="" class="h-7" />
      </NuxtLink>
    </div>
    <H-Footer></H-Footer>
  </div>
</template>

<script setup></script>
