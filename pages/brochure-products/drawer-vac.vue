<template>
  <div class="w-full">
    <B-Header></B-Header>
    <div class="w-full h-72 mb-10 mt-10">
      <img
        src="@/assets/drawer-vac.png"
        class="h-full w-full object-cover shadow-md"
        alt=""
      />
    </div>
    <div class="px-10 py-5">
      <h2 class="font-semibold text-3xl">
        <span class="text-[#FF7979]">Drawer</span> Vac
      </h2>

      <p class="text-sm mt-5 mb-10">
        Drawervac is a new central vacuum system accessory that simplifies how
        you clean any countertop of vegetable waste and other debris. Every
        countertop can be improvised with a Drawervac and simplify the cleaning
        process of a modern kitchen.

        <span class="my-5 block" ></span>
        Drawervac is a simple tray accessory fixed under the kitchen counter
        that sucks all the kitchen waste right out of your way and drains into
        the sewage directly.
      </p>
    </div>
    <H-Footer></H-Footer>
  </div>
</template>

<script setup>
const menuState = useState("menuState");

useHead({
  title: "Privacy Policy",
});

definePageMeta({
  scrollToTop: true,
  pageTransition: {
    name: "rotate",
  },
});
</script>

