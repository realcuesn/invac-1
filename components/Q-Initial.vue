<template>
    <form @submit.prevent="triggerSubmit" class="lg:flex items-center mt-10" ref="container">

        <div class="flex flex-col lg:w-[55%]">
            <div
                class="pb-2 flex text-lg lg:text-2xl 2xl:text-3xl justify-between text-neutral-500 border-b-2 border-neutral-500">
                <select v-model="typeState" @click="triggerHoseSelect" required name="Model" id="model"
                    class="w-full outline-none bg-transparent">
                    <option v-if="triggerHoseSelectState" value="default-state">Type of Home</option>
                    <option value="apartment">Aparatment</option>
                    <option value="independent-house">Independent Home</option>
                </select>
                <img src="@/assets/icons/chevron-down.svg" class="h-8 w-8" alt="" />
            </div>

            <div class="lg:flex mt-7 lg:mt-16 justify-between gap-x-16">
                <div
                    class="pb-2 flex text-lg lg:text-2xl 2xl:text-3xl justify-between text-neutral-500 border-b-2 w-full border-neutral-500">
                    <select v-model="sizeState" @click="triggerSize" required name="Model" id="model"
                        class="w-full outline-none bg-transparent">
                        <option v-if="triggerSizeSelect" value="default-state">Size of Home</option>
                        <option value="2000-sft"> {{ '< 2000 Sft Built Up Area' }} </option>
                        <option value="2000-3000-sft"> {{ '2000 - 3000 Sft Built Up Area' }} </option>
                        <option value="3000-5000-sft"> {{ '3000 - 5000 Sft Built Up Area' }} </option>
                        <option value="5000-10000-sft"> {{ '5000 - 10000 Sft Built Up Area' }} </option>
                        <option value="10000-sft"> {{ '> 10000 Sft Built Up Area' }} </option>

                    </select>
                    <img src="@/assets/icons/chevron-down.svg" class="h-8 w-8" alt="" />
                </div>
                <div
                    class="pb-2 flex mt-7 text-lg lg:text-2xl 2xl:text-3xl justify-between text-neutral-500 border-b-2 w-full border-neutral-500">
                    <select v-model="currentType" @click="triggerCurrentStage" required name="Model" id="model"
                        class="w-full outline-none bg-transparent">
                        <option v-if="triggerCurrentStageState" value="default-state">Current Stage</option>
                        <option value="under-construction">Under Construction</option>
                        <option value="interior-under-construction">Interior Under Construction</option>
                        <option value="fully-constructed">Fully Constructed</option>

                    </select>
                    <img src="@/assets/icons/chevron-down.svg" class="h-8 w-8" alt="" />
                </div>
            </div>

            <div
                class="pb-2 mt-7 lg:mt-16 flex text-lg lg:text-2xl 2xl:text-3xl justify-between text-neutral-500 border-b-2 border-neutral-500">
                <select v-model="maintenanceType" @click="triggerMaintenanceSelect" required name="Model" id="model"
                    placeholder="Maintiance" class="w-full outline-none bg-transparent">
                    <option v-if="triggerMaintenanceSelectState" value="default-state">Maintenace</option>
                    <option value="manual">Manual</option>
                    <option value="fully-auto">Fully Auto</option>
                </select>
                <img src="@/assets/icons/chevron-down.svg" class="h-8 w-8" alt="" />
            </div>


        </div>

        <div class=" w-full lg:w-[45%] grid place-content-center h-full pt-14 lg:py-0">
            <button type="submit" class="overflow-y-clip">
                <img ref="arrowRight" src="@/assets/icons/orange-arrow-right.svg" class="h-12 lg:h-24 translate-y-[100%]"
                    alt="">
            </button>
        </div>
    </form>
</template>

<script setup>
import gsap from 'gsap';
const quizState = useState("quizState")
const container = ref(null);
const arrowRight = ref(null);
const triggerSizeSelect = ref(true);
const triggerHoseSelectState = ref(true);
const triggerCurrentStageState = ref(true);
const triggerMaintenanceSelectState = ref(true);
const typeState = ref('default-state');
const sizeState = ref('default-state');
const currentType = ref('default-state');
const maintenanceType = ref('default-state');





const triggerSubmit = () => {
    const quizOptions = {
        typeState: typeState.value,
        sizeState: sizeState.value,
        currentType: typeState.value,
        maintenanceType: typeState.value
    }

    localStorage.setItem('quiz', JSON.stringify(quizOptions))
    quizState.value = 2

}

const triggerMaintenanceSelect = () => {
    triggerMaintenanceSelectState.value = false
}

const triggerCurrentStage = () => {
    triggerCurrentStageState.value = false
}

const triggerSize = () => {
    triggerSizeSelect.value = false
}

const triggerHoseSelect = () => {
    triggerHoseSelectState.value = false
}


onMounted(() => {
    gsap.to(arrowRight.value, {
        y: 0,
        scrollTrigger: {
            trigger: container.value,
        },

        duration: 1
    })
})
</script>
