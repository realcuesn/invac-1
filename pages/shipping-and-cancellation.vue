<template>
  <div class="w-full">
    <div class="bg-[#191919] text-white pb-20 lg:px-4">
      <nav
        class="w-full flex items-center justify-between pt-14 lg:pt-20 px-10 lg:px-20"
      >
        <NuxtLink to="/">
          <img src="@/assets/logo-black.svg" class="h-7 sm:h-7 lg:h-7" alt="" />
        </NuxtLink>

        <div class="hidden lg:flex items-center">
          <div
            @click="menuState = true"
            class="flex items-center cursor-pointer"
          >
            <span class="tracking-[0.8rem] text-xl block">Products</span>
            <img src="@/assets/chevron-down.svg" class="h-5 w-5" alt="" />
          </div>

          <NuxtLink to="/demo"
            class="text-xl tracking-[0.8rem] ml-20 p-3 rounded-xl px-8 border-2 border-[#FF7900]"
          >
            Book A Demo
          </NuxtLink>
        </div>

        <div class="lg:hidden">
          <img
            src="@/assets/burger.svg"
            class="h-8 w-8 sm:h-10 sm:w-10"
            alt=""
          />
        </div>
      </nav>

      <NuxtLink to="/" class="flex items-center px-10 lg:px-20 gap-x-5 mt-20">
        <img src="@/assets/arrow-right.svg" class="-rotate-180 h-4" alt="" />
        <p class="tracking-[0.6rem]">Home</p>
      </NuxtLink>

      <h2 class="pl-10 lg:pl-20 mt-10 text-4xl font-semibold">
        Shipping And <br />
        Cancellation Policy
      </h2>

      <div
        class="py-20 w-full text-black font-semibold bg-white mt-40 px-10 lg:px-20 text-base"
      >
        <h2>Shipping Policy</h2>
        <p class="font-medium">
          We usually ship the product within 7 working days after reciving the
          order and try and de-liver them within 15 working days.
        </p>

        <h2 class="mt-10">Cancellation Policy</h2>
        <p class="font-medium">
          As per our policy no cancellation of orders is allowed after placing
          the orders. However re- turns are accepted as per our return policy.
          Refunds, if applicable, shall be initiated within 10 working days from
          the date of acceptance of the returns of goods as per standard policy.
          The returns it will be processed through same mode within 10 working
          days.
        </p>
      </div>
      <H-Footer></H-Footer>
    </div>
  </div>
</template>

<script setup>
const menuState = useState("menuState");

useHead({
  title: "Shipping & Cancellation",
});

definePageMeta({
  scrollToTop: true,
  pageTransition: {
    name: "rotate",
  },
});
</script>
