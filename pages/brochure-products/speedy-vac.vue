<template>
  <div class="w-full">
    <B-Header></B-Header>
    <div class="w-full h-72 mb-10 mt-10">
      <img
        src="@/assets/speedy-vac.png"
        class="h-full w-full object-cover shadow-md"
        alt=""
      />
    </div>
    <div class="px-10 py-5">
      <h2 class="font-semibold text-3xl">
        <span class="text-[#FF7979]">Speedy</span> Vac
      </h2>

      <p class="text-sm mt-5 mb-10">
        Speedyvac is an essential, practical and very convienient central vacuum
        attachment. It's an innovative auxiliary hose for central vacuum for
        immediate use. Speedyvac’s design makes cleaning extremely easy and
        installation simple, suggested for bathrooms, car garages and wardrobe
        areas.
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

