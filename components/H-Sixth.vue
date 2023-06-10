<template>
    <div ref="container" class="w-full relative px-10 lg:px-20 py-10 lg:py-24">
        <h3 class="text-lg 2xl:text-3xl overflow-y-clip">

            <span ref="dontKnow" class="block translate-y-[100%]">Don't Know</span>
        </h3>
        <h4 class=" text-4xl 2xl:text-8xl mt-4 lg:mt-10 font-semibold">
            <div class="overflow-y-clip">
                <span ref="whatProduct" class="block translate-y-[100%]"> What product </span>
            </div>

            <div class="overflow-y-clip">
                <span ref="toChoose" class="block translate-y-[100%]">to choose?</span>
            </div>
        </h4>

        <h3 class="text-lg 2xl:text-3xl mt-14 overflow-y-clip">
            <span ref="letUsHelpYou" class="block translate-y-[100%]">Let Us Help You</span>
        </h3>




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
                <div class="overflow-y-clip">
                    <img ref="arrowRight" src="@/assets/icons/orange-arrow-right.svg"
                        class="h-12 lg:h-24 translate-y-[100%]" alt="">
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import gsap from 'gsap';
const whatProduct = ref(null);
const toChoose = ref(null);
const dontKnow = ref(null);
const container = ref(null);
const arrowRight = ref(null);
const letUsHelpYou = ref(null);

onMounted(() => {

    gsap.to(dontKnow.value, {
        y: 0,
        scrollTrigger: {
            trigger: container.value,
            start: "top center",
            end: "top end"
        },
        duration: 1
    })
    gsap.to(whatProduct.value, {
        y: 0,
        scrollTrigger: {
            trigger: container.value,
            start: "top center",
            end: "top end"
        },
        delay: 0.2,
        duration: 1
    })
    gsap.to(toChoose.value, {
        y: 0,
        scrollTrigger: {
            trigger: container.value,
            start: "top center",
            end: "top end"
        },
        delay: 0.4,
        duration: 1
    })

    gsap.to(letUsHelpYou.value, {
        y: 0,
        scrollTrigger: {
            trigger: container.value,
            start: "top center",
            end: "top end"
        },
        delay: 0.4,
        duration: 1
    })

    gsap.to(arrowRight.value, {
        y: 0,
        scrollTrigger: {
            trigger: container.value,
            start: "top center",
            end: "top end"
        },
        delay: 0.4,
        duration: 1
    })
})
</script>

<style>
select {
    appearance: none;
}
</style>
