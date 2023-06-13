<template>
    <div class="w-full">
        <div class="h-screen w-full flex items-center overflow-x-hidden">
            <div class="h-full w-[30%]"></div>
            <div @scroll.prevent class="h-full w-[70%] flex items-center justify-end overflow-clip">
                <Vue3Lottie class="w-[40rem] [transform:rotateY(-15deg)]"  :animationData="HomeJSON" />
            </div>
        </div>
    </div>
</template>

<script setup>
import HomeJSON from '@/assets/Comp_1.json'

const windowHeight = ref(window.innerHeight * 1.5);
</script>
