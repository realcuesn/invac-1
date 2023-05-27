<template>
  <div class=" w-screen bg-[#1A1A1A] text-white">
    <NuxtPage />
    <A-Menu v-if="menuState" />
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from "@studio-freight/lenis";
const menuState = useState('menu', () => false)
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: "vertical", // vertical, horizontal
    gestureDirection: "vertical", // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  //get scroll value
  lenis.on("scroll", ({ }) => {
    /*   console.log({ scroll, limit, velocity, direction, progress }); */
  });

  function raf(time:any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

</script>

 
<style>
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}

.no-scroll {
  overflow: hidden;
}

html,
body {
  width: 100%;
  overflow-x: clip;
  font-family: 'Biennale', 'Biennale Book';
}
</style>