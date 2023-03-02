<template>
  <div class="w-full">
    <B-Header></B-Header>
    <div class="w-full h-72 mb-10 mt-10">
      <img
        src="@/assets/retractable-hose.png"
        class="h-full w-full object-cover shadow-md"
        alt=""
      />
    </div>
    <div class="px-10 py-5">
      <h2 class="font-semibold text-3xl">
        <span class="text-[#FF7979]">Retractable</span> Hose
      </h2>

      <p class="text-sm mt-5 mb-10">
        No more messy cables lying around in your beautiful homes , no more
        tripping hazards for children. With the retractable hose, cleaning up
        after a party gets done in a Jiffy simply by pulling out the hose, suck
        the mess out and let the hose retract automatically.
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

