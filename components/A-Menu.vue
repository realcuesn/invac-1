<template>
  <div class="fixed top-0 w-full flex flex-col">
    <div
      class="h-screen flex flex-col lg:h-fit lg:block w-full lg:min-h-fit bg-white pb-10 lg:pb-20"
    >
      <nav
        class="w-full max-h-fit min-h-fit flex items-center justify-between pt-14 lg:pt-20 px-10 lg:px-20"
      >
        <NuxtLink to="/">
          <img src="@/assets/logo-white.svg" class="h-7 sm:h-7 lg:h-7" alt="" />
        </NuxtLink>

        <div class="hidden lg:flex items-center">
          <div class="flex items-center">
            <span class="tracking-[0.8rem] text-xl block">Products</span>
            <img src="@/assets/chevron-down.svg" class="h-5 w-5" alt="" />
          </div>

          <NuxtLink
            to="/demo"
            class="text-xl tracking-[0.8rem] ml-20 p-4 rounded-xl px-11 border-2 border-[#FF7900]"
          >
            Book A Demo
          </NuxtLink>
        </div>

        <div class="opacity-0 lg:hidden">
          <img
            src="@/assets/burger.svg"
            class="h-8 w-8 sm:h-10 sm:w-10"
            alt=""
          />
        </div>
      </nav>

      <div
        v-if="homeMenuState"
        class="px-10 justify-between h-full lg:px-20 flex flex-col lg:flex-row items-end mt-14"
      >
        <div
          class="lg:h-72 xl:h-80 2xl:h-96 flex flex-row w-full items-center lg:w-fit lg:flex-col lg:items-start lg:justify-between min-w-fit"
        >
          <img
            @click="homeMenuState = false"
            src="@/assets/arrow-right.svg"
            class="h-5 lg:h-7 rotate-180 cursor-pointer"
            alt=""
          />

          <h3
            class="hidden lg:block lg:text-xl xl:text-[1.7rem] 2xl:text-4xl min-w-fit mb-10"
          >
            For The <span class="font-semibold">Homes</span>
          </h3>

          <h3
            class="lg:hidden tracking-[0.6rem] ml-5 lg:text-xl xl:text-[1.7rem] 2xl:text-4xl min-w-fit"
          >
            Back
          </h3>
        </div>

        <div
          class="w-full flex flex-col sm:gap-y-5 lg:gap-y-0 lg:flex-row justify-end gap-x-10"
        >
          <h4 class="text-2xl sm:text-4xl -mb-10 mt-10 lg:hidden">
            For The <span class="font-semibold block">Homes</span>
          </h4>

          <NuxtLink
            to="/products/typhoon-d2"
            class="w-[100%] h-52 sm:h-80 lg:w-80 xl:w-[22rem] lg:h-60 2xl:w-[29rem] 2xl:h-96 flex justify-evenly items-center relative"
          >
            <img
              src="@/assets/typhoon.svg"
              class="h-7 sm:h-16 sm:mt-40 mt-24 lg:h-7 lg:mt-28 xl:h-10 xl:mt-28 2xl:h-16 2xl:mt-48 z-10"
              alt=""
            />

            <img
              src="@/assets/product-1.png"
              class="h-40 sm:h-72 lg:h-52 xl:h-60 2xl:h-80 z-10"
              alt=""
            />

            <div
              class="w-full h-[50%] absolute bg-white rounded-lg shadow-2xl bottom-0"
            ></div>
          </NuxtLink>

          <NuxtLink
            to="/products/techno-plus-158"
            class="w-[100%] h-52 sm:h-80 lg:w-80 xl:w-[22rem] lg:h-60 2xl:w-[29rem] 2xl:h-96 flex justify-evenly items-center relative"
          >
            <img
              src="@/assets/techno-plus.svg"
              class="h-9 sm:h-20 sm:mt-40 mt-24 lg:h-7 lg:mt-28 xl:h-10 xl:mt-28 2xl:h-16 2xl:mt-48 z-10"
              alt=""
            />

            <img
              src="@/assets/product-3.png"
              class="h-40 sm:h-72 lg:h-52 xl:h-60 2xl:h-80 z-10"
              alt=""
            />

            <div
              class="w-full h-[50%] absolute bg-white rounded-lg shadow-2xl bottom-0"
            ></div>
          </NuxtLink>
        </div>
      </div>

      <div
        v-else
        class="px-10 justify-between h-full lg:px-20 flex flex-col lg:flex-row items-end mt-14"
      >
        <div
          class="lg:h-72 xl:h-80 2xl:h-96 flex flex-row w-full items-center lg:w-fit lg:flex-col lg:items-start lg:justify-between min-w-fit"
        >
          <img
            @click="menuState = false"
            src="@/assets/arrow-right.svg"
            class="h-5 lg:h-7 rotate-180 cursor-pointer"
            alt=""
          />

          <h3
            class="hidden lg:block lg:text-xl xl:text-[1.7rem] 2xl:text-4xl min-w-fit mb-10"
          >
            We've Got your homes <br />
            and offices <span class="font-semibold">covered</span>
          </h3>

          <h3
            class="lg:hidden tracking-[0.6rem] ml-5 lg:text-xl xl:text-[1.7rem] 2xl:text-4xl min-w-fit"
          >
            Back
          </h3>
        </div>

        <div
          class="w-full h-full lg:h-72 xl:h-80 2xl:h-96 lg:items-end flex flex-col gap-y-3 justify-evenly sm:gap-y-5 lg:gap-y-0 lg:flex-row lg:justify-end gap-x-10"
        >
          <h4 class="text-lg sm:text-4xl mt-10 lg:hidden">
            We've got your homes <br />
            and offices <span class="font-semibold">covered</span>
          </h4>

          <div
            @click="homeMenuState = true"
            class="w-[100%] rounded-2xl h-52 sm:h-80 lg:w-80 xl:w-[22rem] lg:h-60 2xl:w-[29rem] 2xl:h-72 relative"
          >
            <img
              src="@/assets/home-thumbnail.png"
              class="rounded-2xl h-full w-full object-cover"
              alt=""
            />

            <p
              class="absolute left-5 top-5 text-2xl sm:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-black font-semibold"
            >
              For Homes
            </p>
          </div>

          <div
            class="w-[100%] rounded-2xl h-52 sm:h-80 lg:w-80 xl:w-[22rem] lg:h-60 2xl:w-[29rem] 2xl:h-72 relative"
          >
            <img
              src="@/assets/industrial-thumbnail.png"
              class="h-full w-full rounded-2xl object-cover"
              alt=""
            />

            <p
              class="absolute left-5 top-5 text-2xl sm:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white font-semibold"
            >
              Industrial
            </p>
            <p
              class="absolute bottom-5 left-5 text-sm sm:text-base lg:text-base text-white tracking-[0.6rem]"
            >
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const menuState = useState("menuState");
const homeMenuState = ref(false);
</script>
