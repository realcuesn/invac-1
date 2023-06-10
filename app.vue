<template>
  <div class=" w-screen bg-[#1A1A1A] text-white">
    <ClientOnly>
      <NuxtPage />
      <A-Menu v-if="menuState" />
      <A-Cities v-if="citiesState"> </A-Cities>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from "@studio-freight/lenis";
const menuState = useState('menu', () => false)
const citiesState = useState("citiesState", () => false);
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  const lenis = new Lenis()


  function raf(time: any) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  requestAnimationFrame(raf)
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



html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>