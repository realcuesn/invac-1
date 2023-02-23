<template>
  <div class="w-full overflow-x-clip">
    <NuxtPage></NuxtPage>
    <A-Menu v-if="menuState && !$route.fullPath.includes('products')"></A-Menu>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);

const menuState = useState("menuState", () => false);
const homeMenuState = useState("homeMenuState", () => false);
const selectedProduct = useState("selectedProduct", () => 0);
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
  lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
    /*   console.log({ scroll, limit, velocity, direction, progress }); */
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0px;
}

body,
html {
  width: 100%;
  font-family: "Biennale" !important;
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
