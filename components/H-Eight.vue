<template>
    <h2 class="pl-10 lg:px-20 text-neutral-400 text-base lg:text-3xl mt-20 lg:mt-32 2xl:mt-40">Frequently Asked Question
    </h2>
    <div class="w-full px-10 lg:px-20 flex flex-col gap-y-10 sm:gap-y-10 3xl:py-40 pb-10 mt-10 lg:mt-28 lg:pr-[25vw]">

        <!-- About InVac Section -->
        <div class="w-full border-b-2 border-white pb-4 border-opacity-20">
            <div @click="triggerAbout = !triggerAbout" class="flex cursor-pointer items-end justify-between">
                <h2 class="text-lg sm:text-2xl lg:text-2xl 2xl:text-3xl  font-semibold">About InVac
                </h2>
                <img src="@/assets/icons/chevron-down.svg"
                    class="h-8 lg:h-8 2xl:h-9 3xl:h-10 mb-2 transition-all duration-1000"
                    :class="{ 'rotate-90': triggerAbout }" alt="">
            </div>
            <AB-DropDownItem :content="aboutContent" v-if="triggerAbout" />
        </div>

        <!-- Product Features Section -->
        <div class="w-full border-b-2 border-white pb-4 border-opacity-20">
            <div @click="triggerFeatures = !triggerFeatures" class="flex cursor-pointer items-end justify-between">
                <h2 class="text-lg sm:text-2xl lg:text-2xl 2xl:text-3xl  font-semibold">Product
                    Features</h2>
                <img src="@/assets/icons/chevron-down.svg"
                    class="h-8 lg:h-8 2xl:h-9 3xl:h-10 mb-2 transition-all duration-1000"
                    :class="{ 'rotate-90': triggerFeatures }" alt="">
            </div>
            <AB-DropDownItem :content="featuresContent" v-if="triggerFeatures" />
        </div>

        <!-- Maintenance and Care Section -->
        <div class="w-full border-b-2 border-white pb-4 border-opacity-20">
            <div @click="triggerMaintenance = !triggerMaintenance" class="flex cursor-pointer items-end justify-between">
                <h2 class="text-lg sm:text-2xl lg:text-2xl 2xl:text-3xl  font-semibold">Maintenance and
                    Care</h2>
                <img src="@/assets/icons/chevron-down.svg"
                    class="h-8 lg:h-8 2xl:h-9 3xl:h-10 mb-2 transition-all duration-1000"
                    :class="{ 'rotate-90': triggerMaintenance }" alt="">
            </div>
            <AB-DropDownItem :content="maintenanceContent" v-if="triggerMaintenance" />
        </div>

        <!-- Customer Support Section -->
        <div class="w-full border-b-2 border-white pb-4 border-opacity-20">
            <div @click="triggerSupport = !triggerSupport" class="flex cursor-pointer items-end justify-between">
                <h2 class="text-lg sm:text-2xl lg:text-2xl 2xl:text-3xl  font-semibold">Customer
                    Support</h2>
                <img src="@/assets/icons/chevron-down.svg"
                    class="h-8 lg:h-8 2xl:h-9 3xl:h-10 mb-2 transition-all duration-1000"
                    :class="{ 'rotate-90': triggerSupport }" alt="">
            </div>
            <AB-DropDownItem :content="supportContent" v-if="triggerSupport" />
        </div>

        <!-- New Section: Cleaning Tips -->
        <div class="w-full border-b-2 border-white pb-4 border-opacity-20">
            <div @click="triggerTips = !triggerTips" class="flex cursor-pointer items-end justify-between">
                <h2 class="text-lg sm:text-2xl lg:text-2xl 2xl:text-3xl  font-semibold">Cleaning Tips
                </h2>
                <img src="@/assets/icons/chevron-down.svg"
                    class="h-8 lg:h-8 2xl:h-9 3xl:h-10 mb-2 transition-all duration-1000"
                    :class="{ 'rotate-90': triggerTips }" alt="">
            </div>
            <AB-DropDownItem :content="tipsContent" v-if="triggerTips" />
        </div>

    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const triggerAbout = ref(false);
const aboutContent = ref(`Discover the story behind InVac and our commitment to providing exceptional vacuum solutions.`);

const triggerFeatures = ref(false);
const featuresContent = ref(`Explore the advanced features of our vacuum products, designed to make cleaning effortless and effective.`);

const triggerMaintenance = ref(false);
const maintenanceContent = ref(`Learn how to properly maintain and care for your InVac vacuum to ensure optimal performance and longevity.`);

const triggerSupport = ref(false);
const supportContent = ref(`Our dedicated customer support team is here to assist you with any inquiries, troubleshooting, or product information.`);

const triggerTips = ref(false);
const tipsContent = ref(`Get valuable cleaning tips and techniques to achieve the best results with your InVac vacuum, tailored to different cleaning needs.`);
</script>
  