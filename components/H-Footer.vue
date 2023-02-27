<template>
  <section class="w-full">
    <div class="hidden lg:block w-full bg-[#191919] px-20 pt-40 pb-20">
      <div class="flex justify-between items-end w-full">
        <div class="flex items-center">
          <img
            src="@/assets/logo-black.svg"
            class="h-7 sm:h-10 lg:h-16"
            alt=""
          />
          <div class="ml-10">
            <p class="text-white text-2xl">Central</p>
            <p class="text-[#FF7900] text-2xl">Vacuum System</p>
          </div>
        </div>

        <a href="mailto:sales@invac.in" class="text-white text-xl"
          >sales@invac.in</a
        >
      </div>

      <div class="w-full flex justify-between">
        <h5 class="mt-20 text-white">
          Invac India, <br />
          4th floor,Fortune Monarch Towers, <br />
          Road number 36,Jubilee hills,

          <span class="block font-semibold mt-5">Hyderabad-500033.</span>
        </h5>

        <p
          @click="citiesState = true"
          class="flex items-center text-neutral-500 footer-arrow-parent"
        >
          <span class="text-xl min-w-fit cursor-pointer">Cities we are at</span>
          <img src="@/assets/arrow-right.svg" class="ml-5 h-7" alt="" />
        </p>
      </div>
      <h5 class="mt-20 text-white">
        Invac India, <br />
        4th floor,Fortune Monarch Towers, <br />
        Road number 36,Jubilee hills,

        <span class="block font-semibold mt-5">Hyderabad-500033.</span>
      </h5>

      <div class="flex justify-between">
        <a
          href="https://maps.app.goo.gl/vLhdDmhajnQVSmRb9"
          class="flex mt-10 text-white footer-arrow-parent"
        >
          <span class="text-2xl tracking-[0.6rem]">Get Direction</span>
          <img src="@/assets/arrow-right.svg" class="ml-5" alt="" />
        </a>

        <div class="flex items-center">
          <NuxtLink
            to="/shipping-and-cancellation"
            class="flex mt-10 text-neutral-500 footer-arrow-parent"
          >
            <span class="text-xl">Shipping & Cancellation</span>
            <img src="@/assets/arrow-right.svg" class="ml-5" alt="" />
          </NuxtLink>

          <NuxtLink
            to="/terms-of-service"
            class="flex mt-10 ml-20 text-neutral-500 footer-arrow-parent"
          >
            <span class="text-xl">Terms of Service</span>
            <img src="@/assets/arrow-right.svg" class="ml-5" alt="" />
          </NuxtLink>
        </div>
      </div>

      <div class="flex text-lg mt-40">
        <span class="text-neutral-500">©2023-Invac</span>
        <NuxtLink to="/privacy-policy" class="text-neutral-500 ml-20"
          >Privacy Policy</NuxtLink
        >
      </div>
    </div>

    <div class="w-full lg:hidden px-10 bg-[#191919] pt-20 pb-20">
      <div class="flex items-center">
        <img src="@/assets/logo-black.svg" class="h-8 sm:h-10 lg:h-16" alt="" />
        <div class="ml-10">
          <p class="text-white text-base">Central</p>
          <p class="text-[#FF7900] text-base whitespace-nowrap">
            Vacuum Systerm
          </p>
        </div>
      </div>

      <h5 class="mt-20 text-white">
        Invac India, <br />
        4th floor,Fortune Monarch Towers, <br />
        Road number 36,Jubilee hills,

        <span class="block font-semibold mt-5">Hyderabad-500033.</span>
      </h5>

      <p
        @click="citiesState = true"
        class="flex mt-10 text-white items-center footer-arrow-parent"
      >
        <span class="text-lg tracking-[0.6rem]">Locations</span>
        <img src="@/assets/arrow-right.svg" class="ml-5 h-5" alt="" />
      </p>

      <a
        href="https://maps.app.goo.gl/vLhdDmhajnQVSmRb9"
        class="flex mt-10 text-white items-center footer-arrow-parent"
      >
        <span class="text-lg tracking-[0.6rem]">Get Direction</span>
        <img src="@/assets/arrow-right.svg" class="ml-5 h-5" alt="" />
      </a>

      <a
        href="mailto:sales@invac.in"
        class="text-white text-xl mt-14 mb-14 block"
        >sales@invac.in</a
      >

      <NuxtLink to="/terms-of-service" class="text-neutral-500 text-xl block"
        >Terms of Service</NuxtLink
      >

      <NuxtLink
        to="/shipping-and-cancellation"
        class="text-neutral-500 text-xl block mt-5"
        >Shipping & Cancellation</NuxtLink
      >

      <div class="w-full justify-between flex text-lg mt-14">
        <NuxtLink to="/" class="text-neutral-500">©2023-Invac</NuxtLink>
        <NuxtLink to="/privacy-policy" class="text-neutral-500"
          >Privacy Policy</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script setup>
//TODO connect the links to proper routes
const citiesState = useState("citiesState", () => false);
</script>

<style scoped>
.footer-arrow-parent:hover img {
  transform: translateX(+30%);
  transition-duration: 1000ms;
}
</style>
