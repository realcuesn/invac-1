<template>
  <div class="h-screen w-full">
    <video
      src="@/assets/reel.mp4"
      autoplay
      playsinline
      loop
      muted
      class="hidden lg:block h-full w-full object-cover"
    ></video>

    <video
      src="@/assets/reel-mobile.mp4"
      autoplay
      playsinline
      loop
      muted
      class="block lg:hidden h-full w-full object-cover"
    ></video>
  </div>
</template>

<script setup></script>
