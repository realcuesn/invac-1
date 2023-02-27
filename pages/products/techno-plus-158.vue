<template>
  <div class="w-full lg:flex lg:h-screen">
    <div class="w-[50%] min-w-[50%] hidden lg:flex flex-col h-full px-20">
      <div class="flex items-center justify-between py-10 max-h-fit min-h-fit">
        <NuxtLink to="/">
          <img src="@/assets/logo-white.svg" class="h-7 sm:h-7 lg:h-7" alt="" />
        </NuxtLink>

        <div class="flex items-center">
          <p class="text-base leading-5">
            Any Questions?
            <span class="block font-semibold">Talk to our experts</span>
          </p>

          <img src="@/assets/support.svg" class="h-10 ml-4" alt="" />
        </div>
      </div>

      <div class="h-full w-full flex items-center justify-center">
        <img src="@/assets/product-3.png" class="h-[28rem]" alt="" />
      </div>

      <div class="w-full flex justify-between min-h-fit max-h-fit py-10">
        <div>
          <img
            src="@/assets/bag-less.svg"
            class="h-28 w-28 border-black p-5 rounded-2xl border"
            alt=""
          />
          <p class="text-xs w-full text-center mt-2 font-semibold">
            Bag less System
          </p>
        </div>

        <div>
          <img
            src="@/assets/powerful-suction.svg"
            class="h-28 w-28 border-black p-5 rounded-2xl border"
            alt=""
          />
          <p class="text-xs w-full text-center mt-2 font-semibold">
            Power Suctions
          </p>
        </div>

        <div>
          <img
            src="@/assets/fully-auto.svg"
            class="h-28 w-28 border-black p-5 rounded-2xl border"
            alt=""
          />
        </div>
      </div>
    </div>

    <div
      class="w-[50%] min-w-[50%] h-full px-20 bg-[#191919] hidden lg:grid place-content-between justify-start grid-flow-row"
    >
      <NuxtLink to="/" class="py-20">
        <img src="@/assets/arrow-right.svg" class="rotate-180 h-10" alt="" />
      </NuxtLink>

      <div>
        <span class="block"
          ><img src="@/assets/logo-black.svg" class="h-7" alt=""
        /></span>

        <span class="block"
          ><img src="@/assets/typhoon.svg" class="h-20 mt-6" alt=""
        /></span>
      </div>

      <div>
        <p class="text-neutral-500 text-2xl">Pick a model</p>
        <div class="flex mt-4 gap-x-8 items-center">
          <div
            class="p-3 px-8 text-3xl items-center font-semibold text-white flex justify-center gap-x-6 border border-[#FF7900] rounded-2xl"
          >
            <span>158</span>

            <img src="@/assets/selected.svg" class="h-6 w-6" alt="" />
          </div>

          <NuxtLink
            to="/products/techno-plus-230"
            class="p-3 px-8 text-3xl items-center font-semibold text-white flex justify-center gap-x-6 border border-neutral-500 rounded-2xl"
          >
            <span>230</span>

            <img src="@/assets/selected.svg" class="h-6 w-6 opacity-0" alt="" />
          </NuxtLink>

          <NuxtLink
            to="/products/techno-plus-258"
            class="p-3 px-8 text-3xl items-center font-semibold text-white flex justify-center gap-x-6 border border-neutral-500 rounded-2xl"
          >
            <span>258</span>

            <img src="@/assets/selected.svg" class="h-6 w-6 opacity-0" alt="" />
          </NuxtLink>

          <NuxtLink
            to="/products/techno-plus-booster-158"
            class="flex ml-4 items-center"
          >
            <div
              @click="boosterState = true"
              class="h-7 w-7 rounded-md border border-white"
            ></div>
            <span class="text-white text-2xl font-semibold ml-5"
              >Add Booster</span
            >
          </NuxtLink>
        </div>
      </div>

      <div class="text-white text-2xl font-medium pt-10 w-full pr-[10%]">
        Most powerful machine in the range. Automatically sucks up liquids and
        drains directly to the sewage. Self-flushing system also provides
        infinite capacity and simple operation. Water injectors turn dust into
        sludge.
      </div>

      <NuxtLink
        @click="selectedProduct = 2"
        to="/demo"
        class="flex px-10 border-neutral-500 border rounded-2xl py-10 justify-between w-full"
      >
        <span
          class="text-white lg:text-lg xl:text-xl 2xl:text-2xl font-semibold"
          >₹4,98,305</span
        >
        <div class="flex items-center justify-center text-white">
          <span class="lg:text-xs 2xl:text-sm tracking-[0.5rem]"
            >Get A quote</span
          >
          <img src="@/assets/arrow-right.svg" class="h-7 ml-2" alt="" />
        </div>
      </NuxtLink>

      <p class="text-sm text-neutral-500">
        *This pricing is only for the Product. Installation and piping are
        <br />
        charged Separately.Please Request for more information.
      </p>
    </div>

    <div class="w-full px-10 pt-20 pb-10 lg:hidden">
      <div class="flex justify-between items-end w-full">
        <div>
          <img src="@/assets/logo-white.svg" class="h-5" alt="" />
          <img src="@/assets/typhoon.svg" class="h-12 mt-2" alt="" />
        </div>

        <div>
          <NuxtLink to="/">
            <img
              src="@/assets/x.svg"
              class="h-10 w-10 sm:h-14 sm:w-14"
              alt=""
            />
          </NuxtLink>
        </div>
      </div>

      <div class="w-full flex justify-between h-fit mt-20">
        <div class="w-full sm:flex sm:justify-center">
          <img src="@/assets/product-3.png" class="h-80 sm:h-[28rem]" alt="" />
        </div>

        <div class="flex flex-col justify-between sm:gap-y-7 h-full">
          <div class="flex scale-75 sm:scale-100 flex-col items-center">
            <img
              src="@/assets/bag-less.svg"
              class="h-24 w-24 border-black p-5 rounded-2xl border"
              alt=""
            />
            <p class="text-[0.60rem] w-full text-center mt-2 font-semibold">
              Bag less System
            </p>
          </div>

          <div class="flex scale-75 sm:scale-100 flex-col items-center">
            <img
              src="@/assets/powerful-suction.svg"
              class="h-24 w-24 border-black p-5 rounded-2xl border"
              alt=""
            />
            <p class="text-[0.60rem] w-full text-center mt-2 font-semibold">
              Power Suctions
            </p>
          </div>

          <div class="flex scale-75 sm:scale-100 flex-col items-center">
            <img
              src="@/assets/semi-auto.svg"
              class="h-24 w-24 border-black p-5 rounded-2xl border"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="flex items-center mt-10">
        <p class="text-sm leading-4">
          Any Questions?
          <span class="block font-semibold">Talk to our experts</span>
        </p>

        <img src="@/assets/support.svg" class="h-8 ml-2" alt="" />
      </div>
    </div>

    <div class="w-full px-10 pt-20 pb-10 bg-[#191919] lg:hidden">
      <h3 class="text-neutral-500 text-lg">Pick a model</h3>
      <div class="flex justify-start mt-4 gap-x-2">
        <div
          class="border-[#ff7900] border p-3 px-6 text-white flex items-center gap-x-6 text-lg rounded-xl"
        >
          <span>158</span>
          <img src="@/assets/selected.svg" class="h-5 w-5" alt="" />
        </div>
        <NuxtLink
          to="/products/techno-plus-230"
          class="border-neutral-500 border p-3 px-6 text-white flex items-center gap-x-6 text-lg rounded-xl"
        >
          <span>230</span>

          <img src="@/assets/selected.svg" class="h-5 w-5 opacity-0" alt="" />
        </NuxtLink>

        <NuxtLink
          to="/products/techno-plus-258"
          class="border-neutral-500 border p-3 px-6 text-white flex items-center gap-x-6 text-lg rounded-xl"
        >
          <span>258</span>

          <img src="@/assets/selected.svg" class="h-5 w-5 opacity-0" alt="" />
        </NuxtLink>
      </div>

      <p class="text-white mt-10 leading-6 text-lg">
        Most powerful machine in the range. Automatically sucks up liquids and
        drains directly to the sewage. Self-flushing system also provides
        infinite capacity and simple operation. Water injectors turn dust into
        sludge.
      </p>

      <h3 class="mt-14 text-white font-semibold text-xl text-left">
        ₹4,98,305
      </h3>

      <NuxtLink
        @click="selectedProduct = 2"
        to="/demo"
        class="w-full flex p-3 mt-10 border-neutral-500 border text-white rounded-xl justify-evenly sm:justify-center sm:gap-x-10 items-center text-sm tracking-[0.6rem]"
      >
        <span>Get A Quote</span>

        <img src="@/assets/arrow-right.svg" class="h-7" alt="" />
      </NuxtLink>

      <p class="text-sm mt-14 text-neutral-500">
        *This pricing is only for the Product. Installation and piping are
        charged Separately.Please Request for more information.
      </p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const boosterState = ref(false);
const selectedProduct = useState("selectedProduct");

useHead({
  title: "Techno Plus 158",
});

onMounted(() => {
  console.log(route.path.includes("products"));
});
</script>
