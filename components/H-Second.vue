<template>
    <div class="h-screen w-full hidden lg:flex items-center bg-[#1A1A1A] px-24">
        <div class="w-[60%] flex flex-col justify-center">
            <div class="lg:text-2xl xl:text-3xl 2xl:text-7xl">
                <h2 class="font-semibold">It's a great way</h2>
                <div class="flex items-center lg:mt-0.5 xl:mt-2">
                    <h2 class="font-light">to vacuum.</h2>
                    <div class="lg:w-28 xl:w-32 2xl:w-48 ml-5 h-0.5 bg-white lg:mt-4 xl:mt-5 2xl:mt-10"></div>
                    <button
                        class=" lg:text-xs xl:text-xs 2xl:text-base lg:ml-6 xl:ml-10 border-2 lg:px-5 xl:px-12 py-3 tracking-[0.4rem] rounded-xl hover:bg-[#d86d21] active:opacity-70 transition-colors duration-500 border-[#d86d21]">Book
                        A
                        Demo</button>
                </div>
            </div>

            <div>
                <h4 class="font-light text-neutral-400 mt-24 xl:text-base 2xl:text-lg">Product <span
                        class="font-semibold ml-1">Features</span> </h4>
                <div class="flex gap-x-20 lg:mt-12 xl:mt-14 2xl:mt-16">
                    <div class="flex flex-col items-center gap-y-14">
                        <img src="@/assets/icons/fully-auto.svg"
                            class="lg:h-8 xl:h-10 2xl:h-20 p-2 lg:my-6 xl:my-5 2xl:my-6" alt="">
                        <img src="@/assets/icons/super-quite-operations.svg" class="lg:h-[5.30rem] xl:h-20 2xl:h-32" alt="">
                    </div>

                    <div class="flex flex-col items-center gap-y-14">
                        <img src="@/assets/icons/energy-effcient-extended-use.svg" class="lg:h-[5.25rem] xl:h-20 2xl:h-32"
                            alt="">
                        <img src="@/assets/icons/10x-powerful-cyclonic-suction.svg" class="lg:h-[5.30rem] xl:h-20 2xl:h-32"
                            alt="">
                    </div>

                    <div class="flex flex-col items-center gap-y-14">
                        <img src="@/assets/icons/wet-and-dry-waste.svg" class="lg:h-[5.30rem] xl:h-20 2xl:h-32" alt="">
                        <img src="@/assets/icons/pan-india-after-sales-support.svg" class="lg:h-[5.30rem] xl:h-20 2xl:h-32"
                            alt="">
                    </div>

                    <div class="flex flex-col items-center gap-y-14">
                        <img src="@/assets/icons/zero-re-entry-of-dust.svg" class="lg:h-[5.30rem] xl:h-20 2xl:h-32" alt="">
                        <img src="@/assets/icons/accessories-for-all-surfaces.svg" class="lg:h-[5.30rem] xl:h-20 2xl:h-32"
                            alt="">
                    </div>
                </div>

            </div>
        </div>
        <div class="w-[40%] h-full grid place-content-center">
            <img src="@/assets/images/home-static/second-section.png" class="h-[80%] w-fit mt-[20%]" alt="">
        </div>

    </div>

    <div class="h-[30rem] w-full flex lg:hidden">
        <div class="h-full w-[50%] min-w-[50%] flex flex-col items-center justify-center">
            <h3 class="text-xs text-neutral-400">Product <span class="font-semibold">Features</span> </h3>
            <div class="flex justify-evenly mt-8 h-fit gap-x-8">
                <div class="flex flex-col gap-y-7">
                    <img src="@/assets/icons/energy-effcient-extended-use.svg" class="h-16" alt="">
                    <img src="@/assets/icons/wet-and-dry-waste.svg" class="h-16" alt="">
                    <img src="@/assets/icons/10x-powerful-cyclonic-suction.svg" class="h-16" alt="">
                </div>
                <div class="flex flex-col gap-y-7">
                    <img src="@/assets/icons/super-quite-operations.svg" class="h-16" alt="">
                    <img src="@/assets/icons/pan-india-after-sales-support.svg" class="h-16" alt="">
                    <img src="@/assets/icons/zero-re-entry-of-dust.svg" class="h-16" alt="">
                </div>
            </div>
        </div>
        <div class="h-full w-[50%] min-w-[50%] py-20 grid place-content-center">
            <img src="@/assets/images/home-static/second-section.png" class="w-full" alt="">
        </div>
    </div>
</template>

<script setup>

</script>
