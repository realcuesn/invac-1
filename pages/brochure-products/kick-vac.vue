<template>
  <div class="w-full">
    <B-Header></B-Header>
    <div class="w-full h-72 mb-10 mt-10">
      <img
        src="@/assets/kick-vac.png"
        class="h-full w-full object-cover shadow-md"
        alt=""
      />
    </div>
    <div class="px-10 py-5">
      <h2 class="font-semibold text-3xl">
        <span class="text-[#FF7979]">Kick</span> Vac
      </h2>

      <p class="text-sm mt-5 mb-10">
        Keeping your kitchen cleaner just got a lot easier with Kickvac – a
        simple, powerful always available vacuum to suck away floor sweepings.
        Conveniently placed in the kitchen, requires no setup or put away time.
        Kickvac makes your life easier by reducing manual cleaning process.
        simply dispose of your floor sweeping in 3 seconds flat.
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

