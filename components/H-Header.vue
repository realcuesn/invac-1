<template>
    <div class="h-screen w-screen relative">
        <video playsinline autoplay loop muted src="@/assets/hero.mp4" class="h-full w-full object-cover hidden lg:block"></video>
        <video playsinline autoplay loop muted src="@/assets/hero-mobile.mp4" class="h-full w-full object-cover lg:hidden"></video>
        <div class="h-full w-full flex justify-between flex-col pb-10 lg:pb-20 absolute top-0">
            <A-Nav />
            <div
                class="flex flex-col px-10 text-3xl lg:flex-row lg:px-20 lg:justify-between lg:items-center lg:text-3xl xl:text-4xl 2xl:text-5xl">
                <div>
                    <h3 class="font-bold lg:font-bold xl:font-bold 2xl:font-bold"><span class="font-light">Cleaning</span>
                        Made Easy</h3>
                    <p class="text-sm lg:text-sm xl:text-base 2xl:text-lg tracking-wider font-light mt-4">Central vacuum
                        systems clean dust, allergens, viruses, <br class="hidden lg:block"> and pollutants invisible to the
                        naked eye.</p>
                </div>

                <div class="flex items-center mt-10 gap-x-4 hover:gap-x-6 pr-1 hover:pr-0 cursor-pointer transition-all duration-500">
                    <p
                        class="text-base tracking-[0.6rem] lg:tracking-[0.4rem] xl:tracking-[0.4rem] 2xl:tracking-[0.8rem] lg:text-lg xl:text-xl 2xl:text-2xl font-light">
                        Book A Demo</p>
                    <img src="@/assets/icons/orange-arrow-right.svg" class="h-5 lg:h-6 xl:h-6 2xl:h-8" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>
