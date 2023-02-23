<template>
  <div class="w-full flex flex-col items-center pt-20">
    <h2 class="text-4xl px-10 lg:text-5xl text-center">
      It's a great way to vacuum.
    </h2>
    <NuxtLink to="/demo"
      class="text-xs lg:text-2xl mt-14 tracking-[0.6rem] p-3 px-7 lg:p-4 rounded-2xl lg:px-7 border-2 border-[#FF7900] pl-10 lg:pl-12"
    >
      Book A Demo
    </NuxtLink>
  </div>

  <div
    ref="vacWrapper"
    class="flex justify-center overflow-clip w-full items-start mt-20 px-3 overflow-y-clip"
  >
    <!-- first section  strats here-->
    <div ref="sectionOne" class="h-full lg:mb-32">
      <div
        class="w-[30vw] h-[42vw] min-w-[30vw] min-h-[42vw] lg:min-w-[15vw] lg:min-h-[20vw] lg:w-[15vw] lg:h-[20vw]  lg:shadow-md border-black rounded-2xl flex flex-col pb-0 lg:pb-[5vw]"
      >
        <img
          src="@/assets/powerful-suction.svg"
          class="h-full w-full p-[5vw] lg:p-[4.5vw]"
          alt=""
        />
        <p class="w-full text-center text-xs lg:text-lg xl:text-xl 2xl:text-xl">
          Powerful <br />
          Suction
        </p>
      </div>

      <div
        class="w-[30vw] h-[42vw] min-w-[30vw] min-h-[42vw] lg:min-w-[15vw] lg:min-h-[20vw] lg:w-[15vw] lg:h-[20vw]  lg:shadow-md border-black mt-3 lg:mt-10 rounded-2xl flex flex-col pb-0 lg:pb-[5vw]"
      >
        <img
          src="@/assets/accessories.svg"
          class="h-full w-full p-[5vw] lg:p-[4.5vw]"
          alt=""
        />
        <p class="w-full text-center text-xs lg:text-lg xl:text-xl 2xl:text-xl">
          Accesories for<br />
          all Surfaces
        </p>
      </div>
    </div>

    <!--  first section ends here -->

    <!-- second section starts here -->
    <div ref="sectionTwo" class="h-full mx-3 lg:mx-10">
      <div
        class="min-w-[20vw] min-h-[35vw] w-[25vw] h-[15vw] lg:min-h-[15vw] lg:min-w-[12vw] lg:w-[12vw] lg:h-[15vw]  lg:shadow-md border-black rounded-2xl mt-3 lg:mt-10 flex flex-col pb-[5vw]"
      >
        <img
          src="@/assets/energy-effcient.svg"
          class="h-full w-full p-[6vw] lg:p-[3vw]"
          alt=""
        />
        <p
          class="w-full text-center text-[0.60rem] lg:text-lg xl:text-xl 2xl:text-xl"
        >
          Energy Effienct <br />
          Extended Use
        </p>
      </div>

      <div
        class="min-w-[20vw] min-h-[35vw] w-[25vw] h-[15vw] lg:min-h-[15vw] lg:min-w-[12vw] lg:w-[12vw] lg:h-[15vw]  lg:shadow-md border-black rounded-2xl mt-3 lg:mt-10 flex flex-col pb-[5vw]"
      >
        <img
          src="@/assets/wet-dry.svg"
          class="h-full w-full p-[6vw] lg:p-[3vw]"
          alt=""
        />
        <p
          class="w-full text-center text-[0.60rem] lg:text-lg xl:text-xl 2xl:text-xl"
        >
          Wet & Dry <br />
          Waste
        </p>
      </div>
    </div>
    <!-- second section ends here -->
    <div class="">
      <img
        src="@/assets/product-1.png"
        class="min-h-[65vw] min-w-[35vw] h-[65vw] w-[30vw] object-cover lg:min-h-[70vh] lg:min-w-[40vh] lg:h-[70vh] lg:w-[40vh]"
        alt=""
      />
    </div>
    <!-- first section  strats here-->
    <div ref="sectionThree" class="h-full mx-3 lg:mx-10">
      <div
        class="min-w-[20vw] min-h-[35vw] w-[25vw] h-[15vw] lg:min-h-[15vw] lg:min-w-[12vw] lg:w-[12vw] lg:h-[15vw]  lg:shadow-md border-black rounded-2xl mt-3 lg:mt-10 flex flex-col pb-[5vw]"
      >
        <img
          src="@/assets/simultaneous-use.svg"
          class="h-full w-full p-[6vw] lg:p-[3vw]"
          alt=""
        />
        <p
          class="w-full text-center text-[0.60rem] lg:text-lg xl:text-xl 2xl:text-xl"
        >
          Simultaneous <br />
          Use
        </p>
      </div>

      <div
        class="min-w-[20vw] min-h-[35vw] w-[25vw] h-[15vw] lg:min-h-[15vw] lg:min-w-[12vw] lg:w-[12vw] lg:h-[15vw]  lg:shadow-md border-black rounded-2xl mt-3 lg:mt-10 flex flex-col pb-[5vw]"
      >
        <img
          src="@/assets/zero-re-entry.svg"
          class="h-full w-full p-[6vw] lg:p-[3vw]"
          alt=""
        />
        <p
          class="w-full text-center text-[0.60rem] lg:text-lg xl:text-xl 2xl:text-xl"
        >
          Zero Re-entry<br />
          of Dust
        </p>
      </div>
    </div>

    <!--  first section ends here -->
    <!-- second section starts here -->
    <div ref="sectionFour" class="h-full lg:mb-32">
      <div
        class="w-[30vw] h-[42vw] min-w-[30vw] min-h-[42vw] lg:min-w-[15vw] lg:min-h-[20vw] lg:w-[15vw] lg:h-[20vw]  lg:shadow-md border-black rounded-2xl flex flex-col pb-0 lg:pb-[5vw]"
      >
        <img
          src="@/assets/energy-effcient.svg"
          class="h-full w-full p-[6vw] lg:p-[4.5vw]"
          alt=""
        />
        <p class="w-full text-center text-xs lg:text-lg xl:text-xl 2xl:text-xl">
          Direct to <br />
          Sewage
        </p>
      </div>

      <div
        class="w-[30vw] h-[42vw] min-w-[30vw] min-h-[42vw] lg:min-w-[15vw] lg:min-h-[20vw] lg:w-[15vw] lg:h-[20vw]  lg:shadow-md border-black rounded-2xl mt-3 lg:mt-10 flex flex-col pb-0 lg:pb-[5vw]"
      >
        <img
          src="@/assets/pan-india.svg"
          class="h-full w-full p-[6vw] lg:p-[4.5vw]"
          alt=""
        />
        <p class="w-full text-center text-xs lg:text-lg xl:text-xl 2xl:text-xl">
          Pan-India After<br />
          Sales Support
        </p>
      </div>
    </div>
    <!-- second section ends here -->
  </div>
</template>

<script setup>
import gsap from "gsap";
const vacWrapper = ref(null);
const sectionOne = ref(null);
const sectionTwo = ref(null);
const sectionThree = ref(null);
const sectionFour = ref(null);

onMounted(() => {
  gsap.from(sectionOne.value, {
    y: "50%",
    scrollTrigger: {
      trigger: vacWrapper.value,
      scrub: 7,
    },
  });

  gsap.from(sectionTwo.value, {
    y: "50%",
    scrollTrigger: {
      trigger: vacWrapper.value,
      scrub: 3,
    },
  });

  gsap.from(sectionThree.value, {
    y: "50%",
    scrollTrigger: {
      trigger: vacWrapper.value,
      scrub: 3,
    },
  });

  gsap.from(sectionFour.value, {
    y: "50%",
    scrollTrigger: {
      trigger: vacWrapper.value,
      scrub: 7,
    },
  });
});
</script>
