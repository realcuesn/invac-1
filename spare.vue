<template>
  <div class="fixed top-0 w-full flex flex-col">
    <div class="hidden lg:block w-full min-h-fit bg-white pb-20">
      <nav
        class="w-full flex items-center justify-between pt-14 lg:pt-20 px-10 lg:px-20"
      >
        <NuxtLink to="/">
          <img src="@/assets/logo-white.svg" class="h-7 sm:h-7 lg:h-7" alt="" />
        </NuxtLink>

        <div class="hidden lg:flex items-center">
          <div class="flex items-center">
            <span class="tracking-[0.8rem] text-xl block">Products</span>
            <img src="@/assets/chevron-down.svg" class="h-5 w-5" alt="" />
          </div>

          <button
            class="text-xl tracking-[0.8rem] ml-20 p-3 rounded-xl px-8 border-2 border-[#FF7900]"
          >
            Book A Demo
          </button>
        </div>

        <div class="lg:hidden">
          <img
            src="@/assets/burger.svg"
            class="h-8 w-8 sm:h-10 sm:w-10"
            alt=""
          />
        </div>
      </nav>

      <div class="px-10 lg:px-20 flex items-end mt-14">
        <div
          class="lg:h-72 xl:h-80 2xl:h-96 flex flex-col items-start justify-between min-w-fit"
        >
          <img
            @click="menuState = false"
            src="@/assets/arrow-right.svg"
            class="h-7 rotate-180 cursor-pointer"
            alt=""
          />

          <h3 class="lg:text-xl xl:text-[1.7rem] 2xl:text-4xl min-w-fit mb-10">
            For The <span class="font-semibold">Homes</span>
          </h3>
        </div>

        <div class="w-full flex justify-end gap-x-10">
          <div
            class="lg:w-80 xl:w-[22rem] h-60 2xl:w-[29rem] 2xl:h-96 flex justify-evenly items-center relative"
          >
            <img
              src="@/assets/typhoon.svg"
              class="lg:h-7 lg:mt-28 xl:h-10 xl:mt-28 2xl:h-16 2xl:mt-48 z-10"
              alt=""
            />

            <img
              src="@/assets/product-1.png"
              class="lg:h-52 xl:h-60 2xl:h-80 z-10"
              alt=""
            />

            <div
              class="w-full h-[50%] absolute bg-white rounded-lg shadow-2xl bottom-0"
            ></div>
          </div>

          <div
            class="lg:w-80 xl:w-[22rem] h-60 2xl:w-[29rem] 2xl:h-96 flex justify-evenly items-center relative"
          >
            <img
              src="@/assets/typhoon.svg"
              class="lg:h-7 lg:mt-28 xl:h-10 xl:mt-28 2xl:h-16 2xl:mt-48 z-10"
              alt=""
            />

            <img
              src="@/assets/product-1.png"
              class="lg:h-52 xl:h-60 2xl:h-80 z-10"
              alt=""
            />

            <div
              class="w-full h-[50%] absolute bg-white rounded-lg shadow-2xl bottom-0"
            ></div>
          </div>

          <!--    <div class="w-[29rem] h-96 flex justify-evenly items-center relative">
              <img
                src="@/assets/techno-plus.svg"
                class="h-16 mt-48 z-10"
                alt=""
              />
  
              <img src="@/assets/product-3.png" class="h-80 z-10" alt="" />
  
              <div
                class="w-full h-[50%] absolute bg-white rounded-lg shadow-2xl bottom-0"
              ></div>
            </div> -->
        </div>
      </div>
    </div>

    <div class="h-screen w-full lg:hidden"></div>
  </div>
</template>

<script setup>
const menuState = useState("menuState");
</script>
