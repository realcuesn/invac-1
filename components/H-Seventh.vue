<template>
    <div class="w-full my-20">
        <div class="lg:flex items-end gap-x-4 px-10 lg:px-20  lg:gap-x-10">
            <h3 class="text-4xl lg:text-7xl font-semibold">Blogs & Media</h3>
            <NuxtLink to="/blogs" class="text-[#d86d21] text-base block mt-5 lg:mt-0">Show all</NuxtLink>
        </div>

        <div class="w-full hidden lg:grid grid-cols-2 px-10 lg:px-20  gap-x-10 2xl:gap-x-14 mt-20">
            <div class="w-full cursor-pointer">
                <div class="h-[calc(60vh+2.5rem)] w-full rounded-md bg-neutral-800"></div>
                <div class="text-3xl mt-10">
                    Lorem ipsum dolor sit amet consectetur
                    Lorem ipsum dolor sit amet consectetur
                </div>

                <div class="text-neutral-600 mt-10 font-semibold text-xl">View More</div>
            </div>
            <div class="w-full">
                <div class="space-y-10">
                    <NuxtLink class="grid grid-cols-2">
                        <div class="h-[30vh] w-full bg-neutral-800 rounded-md"></div>
                        <div class="h-[30vh] flex flex-col justify-evenly overflow-clip p-5">
                            <div class="w-full text-xl font-semibold">
                                Lorem ipsum dolor sit amet consectetur
                            </div>

                            <div class="text-neutral-600 font-semibold text-lg">View More</div>
                        </div>
                    </NuxtLink>

                    <div class="grid grid-cols-2">
                        <div class="h-[30vh] w-full bg-neutral-800 rounded-md"></div>
                        <div class="h-[30vh] flex flex-col justify-evenly overflow-clip p-5">
                            <div class="w-full text-xl font-semibold">
                                Lorem ipsum dolor sit amet consectetur
                            </div>

                            <div class="text-neutral-600 font-semibold text-lg">View More</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full overflow-x-clip">
            <div class="w-full flex overflow-x-auto gap-x-7 lg:hidden mt-10 pl-10">
                <div class="w-[85%] min-w-[85%]">
                    <div class="w-full h-64 rounded-md bg-neutral-800"></div>
                    <h3 class="mt-7 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <div class="text-neutral-600 font-semibold text-lg mt-5">View More</div>
                </div>

                <div class="w-[85%] min-w-[85%]">
                    <div class="w-full h-64 rounded-md bg-neutral-800"></div>
                    <h3 class="mt-7 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <div class="text-neutral-600 font-semibold text-lg mt-5">View More</div>
                </div>


                <div class="w-[85%] min-w-[85%]">
                    <div class="w-full h-64 rounded-md bg-neutral-800"></div>
                    <h3 class="mt-7 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <div class="text-neutral-600 font-semibold text-lg mt-5">View More</div>
                </div>

                <div class="w-[85%] min-w-[85%]">
                    <div class="w-full h-64 rounded-md bg-neutral-800"></div>
                    <h3 class="mt-7 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <div class="text-neutral-600 font-semibold text-lg mt-5">View More</div>
                </div>

               
            </div>
        </div>

    </div>
</template>

<script setup>

</script>
