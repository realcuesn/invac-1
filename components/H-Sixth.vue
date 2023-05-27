<template>
    <div class="w-full relative px-10 lg:px-20 py-10 lg:py-24">
        <h3 class="text-lg 2xl:text-3xl">Don't Know</h3>
        <h4 class=" text-4xl 2xl:text-8xl mt-4 lg:mt-10 font-semibold">What product <br> to choose?</h4>

        <h3 class="text-lg 2xl:text-3xl mt-14">Let Us Help You</h3>




        <div class="lg:flex mt-10">

            <div class="flex flex-col lg:w-[55%]">
                <div
                    class="pb-2 flex text-lg lg:text-2xl 2xl:text-3xl justify-between text-neutral-500 border-b-2 border-neutral-500">
                    <select ref="modelRef" name="Model" id="model" class="w-full outline-none bg-transparent">
                        <option value="typhoon-d2">Typhoon D2</option>
                        <option value="typhoon-d3">Typhoon D3</option>
                        <option value="techno-plus-158">TechnoPlus 158</option>
                        <option value="techno-plus-158-booster">
                            TechnoPlus 158 + Booster
                        </option>
                        <option value="techno-plus-230">TechnoPlus 230</option>
                        <option value="techno-plus-258">TechnoPlus 258</option>
                    </select>
                    <img src="@/assets/icons/chevron-down.svg" class="h-8 w-8" alt="" />
                </div>

                <div class="lg:flex mt-7 lg:mt-16 justify-between gap-x-16">
                    <div
                        class="pb-2 flex text-lg lg:text-2xl 2xl:text-3xl justify-between text-neutral-500 border-b-2 w-full border-neutral-500">
                        <select ref="modelRef" name="Model" id="model" class="w-full outline-none bg-transparent">
                            <option value="typhoon-d2">Size of Home</option>
                            <option value="typhoon-d3">Typhoon D3</option>
                            <option value="techno-plus-158">TechnoPlus 158</option>
                            <option value="techno-plus-158-booster">
                                TechnoPlus 158 + Booster
                            </option>
                            <option value="techno-plus-230">TechnoPlus 230</option>
                            <option value="techno-plus-258">TechnoPlus 258</option>
                        </select>
                        <img src="@/assets/icons/chevron-down.svg" class="h-8 w-8" alt="" />
                    </div>
                    <div
                        class="pb-2 flex mt-7 text-lg lg:text-2xl 2xl:text-3xl justify-between text-neutral-500 border-b-2 w-full border-neutral-500">
                        <select ref="modelRef" name="Model" id="model" class="w-full outline-none bg-transparent">
                            <option value="typhoon-d2">Current Stage</option>
                            <option value="typhoon-d3">Typhoon D3</option>
                            <option value="techno-plus-158">TechnoPlus 158</option>
                            <option value="techno-plus-158-booster">
                                TechnoPlus 158 + Booster
                            </option>
                            <option value="techno-plus-230">TechnoPlus 230</option>
                            <option value="techno-plus-258">TechnoPlus 258</option>
                        </select>
                        <img src="@/assets/icons/chevron-down.svg" class="h-8 w-8" alt="" />
                    </div>
                </div>
            </div>

            <div class=" w-full lg:w-[45%] grid place-content-center h-full pt-14 lg:py-0">
                <img src="@/assets/icons/orange-arrow-right.svg" class="h-12 lg:h-24" alt="">
            </div>
        </div>


    </div>
</template>

<script setup>

</script>

<style>
select {
    appearance: none;
}
</style>
