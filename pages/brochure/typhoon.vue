<template>
  <div class="w-full">
    <B-Header></B-Header>

    <div class="mt-10 w-full flex flex-col gap-y-2 mb-2">
      <NuxtLink
        to="/products/typhoon-d2"
        class="w-full flex items-center justify-between p-10 shadow-lg"
        ><img src="@/assets/typhoon.svg" class="h-7" alt="" />

        <p class="p-1 px-6 rounded-lg border-neutral-900 border-2">D2</p>
      </NuxtLink>
      <NuxtLink
        to="/products/typhoon-d3"
        class="w-full flex items-center justify-between p-10 shadow-lg"
        ><img src="@/assets/typhoon.svg" class="h-7" alt="" />

        <p class="p-1 px-6 rounded-lg border-neutral-900 border-2">D3</p>
      </NuxtLink>
    </div>
    <H-Footer></H-Footer>
  </div>
</template>

<script setup></script>
