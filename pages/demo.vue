<template>
  <div class="w-full">
    <div class="w-full lg:h-screen lg:flex">
      <div
        class="lg:w-[50%] lg:min-w-[50%] lg:h-full px-10 pb-20 lg:pb-0 lg:px-20 pt-20 bg-[#191919] text-white"
      >
        <NuxtLink to="/">
          <img src="@/assets/logo-black.svg" class="h-7" alt=""
        /></NuxtLink>

        <p class="tracking-[0.6rem] text-xl mt-20 lg:mt-44">Contact Us</p>

        <h2 class="lg:mt-44 text-4xl mt-20 lg:text-6xl font-semibold">
          <span class="text-[#FF7900]">Product</span>
          <span class="block font-medium mt-3">Enquiry / Demo</span>
        </h2>
      </div>
      <div
        class="lg:w-[50%] lg:min-w-[50%] h-full pt-14 pb-10 px-10 lg:px-20 grid"
      >
        <div
          class="w-full flex justify-between items-center place-self-start min-h-fit max-h-fit"
        >
          <div
            @click="menuState = true"
            class="hidden lg:flex cursor-pointer items-center"
          >
            <span class="tracking-[0.8rem] text-xl block">Products</span>
            <img src="@/assets/chevron-down.svg" class="h-5 w-5" alt="" />
          </div>
        </div>

        <div class="place-self-end w-full flex flex-col gap-y-14">
          <input
            type="text"
            class="w-full outline-none text-lg lg:text-2xl border-neutral-600 border-b-2 pb-3"
            placeholder="Name*"
          />
          <input
            type="email"
            class="w-full outline-none text-lg lg:text-2xl border-neutral-600 border-b-2 pb-3"
            placeholder="Email ID*"
          />
          <input
            type="email"
            class="w-full outline-none text-lg lg:text-2xl border-neutral-600 border-b-2 pb-3"
            placeholder="Phone No*"
          />
          <div class="lg:flex justify-between">
            <div
              class="lg:w-[45%] pb-3 flex text-lg lg:text-2xl justify-between border-b-2 border-black"
            >
              <input
                type="text"
                placeholder="Model"
                class="w-full outline-none"
              />
              <img src="@/assets/chevron-down.svg" class="h-10 w-10" alt="" />
            </div>

            <div
              class="mt-12 lg:mt-0 lg:w-[45%] pb-3 flex text-lg lg:text-2xl justify-between border-b-2 border-black"
            >
              <input
                type="text"
                placeholder="Qty"
                class="w-full outline-none"
              />
              <img src="@/assets/chevron-down.svg" class="h-10 w-10" alt="" />
            </div>
          </div>

          <div class="flex ml-auto w-fit my-2 lg:my-14">
            <span class="text-4xl tracking-[0.6rem] opacity-70">Send</span
            ><img src="@/assets/arrow-right.svg" class="h-10 ml-3" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const menuState = useState("menuState");

useHead({
  title: "Book a Demo",
});

definePageMeta({
  scrollToTop: true,
  pageTransition: {
    name: "rotate",
  },
});
</script>
