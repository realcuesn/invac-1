<template>
    <div class="w-full px-10 lg:px-20 pt-20 pb-20">
        <h2 class="text-5xl lg:text-7xl">Let's
            <span class="block mt-3 font-bold">Get in touch</span>
        </h2>

        <div class="lg:flex items-center justify-between mt-10">
            <div class="flex gap-x-16 items-center lg:w-[50%]">
                <img src="@/assets/icons/facebook.svg" class="h-8" alt="">
                <img src="@/assets/icons/instagram.svg" class="h-8" alt="">
                <img src="@/assets/icons/twitter.svg" class="h-8" alt="">
                <img src="@/assets/icons/linkdin.svg" class="h-8" alt="">
            </div>

            <div
                class="items-center mt-20 lg:mt-0 grid-flow-col gap-x-10 lg:w-[50%] flex lg:grid lg:place-content-center lg:pl-[15%]">
                <p class="text-lg">Contact us</p>
                <img class="h-10 lg:h-24" src="@/assets/icons/orange-arrow-right.svg" alt="">
            </div>

            <div class="w-full bg-neutral-500 rounded-sm h-1 mt-10 lg:hidden"></div>
        </div>


        <div class="mt-10 lg:mt-20">
            <div class="flex items-center">
                <img src="@/assets/images/logo.svg" class="h-7" alt="">
                <div class="flex flex-col text-sm ml-4 min-w-fit">
                    <p class="">Central</p>
                    <p class="text-[#f16012]">Vacuum System</p>
                </div>

                <div class="h-1 w-full bg-white ml-40 rounded-sm hidden lg:block"></div>
            </div>
        </div>

        <div class="w-full lg:grid lg:grid-cols-2 mt-20">
            <div>
                <h4 class="text-2xl font-semibold">Find Us</h4>
                <div class="text-lg mt-10">
                    Invac India,
                    <br>
                    4th floor,Fortune Monarch Towers,
                    <br>
                    Road No.36, Jubilee Hills,
                </div>

                <div class="text-lg mt-5 flex gap-x-14">
                    <span>Hyderabad - 500033</span> <img src="@/assets/icons/orange-arrow-right.svg" class="h-6" alt="">
                </div>

                <div class="w-full hidden lg:flex gap-x-24 text-xl mt-24">
                    <a href="mailto:sales@invac.in">sales@invac.in</a>
                    <a href="tel:+91 8798 779 778">+91 8798 779 778</a>
                </div>
            </div>

            <div class="w-full h-0.5 bg-neutral-400 mt-10 lg:hidden"></div>

            <div class="lg:pl-[20%] mt-10 lg:mt-0">
                <div class="text-2xl font-semibold">Be Part of Invac Family</div>
                <p class="text-base mt-5 text-neutral-300">
                    Keep up to Date with <br> exclusive projects
                </p>
                <input type="text" placeholder="Your Name"
                    class="bg-transparent mt-12 text-xl lg:text-2xl border-b border-white pb-3 w-full outline-none">
                <input type="text" placeholder="Email Address"
                    class="bg-transparent mt-10 text-xl lg:text-2xl border-b border-white pb-3 w-full outline-none">

                <div class="text-lg font-semibold  flex gap-x-4 mt-8"> <span class="border-b"> Subscribe</span> <img
                        src="@/assets/icons/chevron-right.svg" alt=""> </div>
            </div>
        </div>

        <div class="mt-10 h-0.5 w-full bg-neutral-500 lg:hidden"></div>
        <div class="flex items-center justify-between mt-14 lg:mt-24">
            <div class="hidden lg:flex gap-x-20 text-neutral-400 text-sm">
                <span>© 2023 - Invac</span>

                <p>Privacy Policy</p>
            </div>

            <div class="flex text-xl flex-col lg:flex-row gap-y-14 lg:gap-y-0 lg:items-center lg:gap-x-20">
                <div class="flex items-center gap-x-4 text-neutral-400"> <span>Terms of service</span> <img
                        src="@/assets/icons/orange-arrow-right.svg" class="h-6" alt=""> </div>

                <div class="flex items-center gap-x-4 text-neutral-400"> <span>Shipping & Cancellation</span> <img
                        src="@/assets/icons/orange-arrow-right.svg" class="h-6" alt=""> </div>

                <div class="flex items-center gap-x-4 text-neutral-400"> <span>Cities we are at</span> <img
                        src="@/assets/icons/orange-arrow-right.svg" class="h-6" alt=""> </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
//TODO change out collection images to white images no more blm
</script>
