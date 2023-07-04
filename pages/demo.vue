<template>
    <div class="w-full">
        <div class="w-full lg:h-screen lg:flex">
            <div class="lg:w-[50%] lg:min-w-[50%] lg:h-full px-10 pb-20 lg:pb-0 lg:px-20 pt-20 text-white">
                <NuxtLink to="/">
                    <img src="@/assets/images/logo.svg" class="h-7" alt="" />
                </NuxtLink>

                <p class="tracking-[0.6rem] text-xl mt-20 lg:mt-44">Contact Us</p>

                <h2 class="lg:mt-44 text-4xl mt-20 lg:text-6xl font-semibold">
                    <span class="text-[#FF7900]">Product</span>
                    <span class="block font-medium mt-3">Enquiry / Demo</span>
                </h2>
            </div>
            <div class="lg:w-[50%] bg-white text-black lg:min-w-[50%] h-full pt-14 pb-10 px-10 lg:px-20 grid">
                <div class="w-full flex justify-between items-center place-self-start min-h-fit max-h-fit">
                    <div @click="menuState = true" class="hidden opacity-0 lg:flex cursor-pointer items-center">
                        <span class="tracking-[0.8rem] text-xl block">Products</span>
                        <img src="@/assets/icons/chevron-down.svg" class="h-5 w-5" alt="" />
                    </div>

                    <NuxtLink class="hidden lg:block" to="/">
                        <img src="@/assets/icons/x.svg" class="h-10 w-10" alt="" />
                    </NuxtLink>
                </div>

                <div class="place-self-end w-full flex flex-col gap-y-14">
                    <input v-model="name" type="text"
                        class="w-full outline-none text-lg lg:text-2xl border-neutral-600 border-b-2 pb-3"
                        placeholder="Name*" />
                    <input v-model="email" type="email"
                        class="w-full outline-none text-lg lg:text-2xl border-neutral-600 border-b-2 pb-3"
                        placeholder="Email ID*" />
                    <input v-model="phone" type="text"
                        class="w-full outline-none text-lg lg:text-2xl border-neutral-600 border-b-2 pb-3"
                        placeholder="Phone No*" />

                    <div class="lg:flex justify-between">
                        <div class="lg:w-[45%] pb-3 flex text-lg lg:text-2xl justify-between border-b-2 border-black">
                            <select v-model="selectedProduct" class="w-full outline-none">
                                <option value="typhoon-d2">Typhoon D2</option>
                                <option value="typhoon-d3">Typhoon D3</option>
                                <option value="techno-plus-158">TechnoPlus 158</option>
                                <option value="techno-plus-158-booster">TechnoPlus 158 + Booster</option>
                                <option value="techno-plus-230">TechnoPlus 230</option>
                                <option value="techno-plus-258">TechnoPlus 258</option>
                            </select>
                            <img src="@/assets/icons/chevron-down.svg" class="h-10 w-10" alt="" />
                        </div>

                        <div
                            class="mt-12 lg:mt-0 lg:w-[45%] pb-3 flex text-lg lg:text-2xl justify-between border-b-2 border-black">
                            <input v-model="city" type="text" placeholder="City" class="w-full outline-none" />
                        </div>
                    </div>

                    <div class="lg:w-full pb-3 flex text-lg lg:text-2xl justify-between border-b-2 border-black">
                        <select v-model="typeOfHome" class="w-full outline-none">
                            <option value="apartment">Apartment</option>
                            <option value="independent-house">Independent Home</option>
                        </select>
                        <label for="model">
                            <img src="@/assets/icons/chevron-down.svg" class="h-10 w-10" alt="" />
                        </label>
                    </div>

                    <div class="lg:flex justify-between">
                        <div class="lg:w-[45%] pb-3 flex text-lg lg:text-2xl justify-between border-b-2 border-black">
                            <select v-model="sizeOfHome" class="w-full outline-none">
                                <option value="2000-sft">&lt; 2000 Sft Built Up Area</option>
                                <option value="2000-3000-sft">2000 - 3000 Sft Built Up Area</option>
                                <option value="3000-5000-sft">3000 - 5000 Sft Built Up Area</option>
                                <option value="5000-10000-sft">5000 - 10000 Sft Built Up Area</option>
                                <option value="10000-sft">&gt; 10000 Sft Built Up Area</option>
                            </select>
                            <label for="model">
                                <img src="@/assets/icons/chevron-down.svg" class="h-10 w-10" alt="" />
                            </label>
                        </div>

                        <div
                            class="lg:w-[45%] mt-12 lg:mt-0 pb-3 flex text-lg lg:text-2xl justify-between border-b-2 border-black">
                            <select v-model="currentStage" class="w-full outline-none">
                                <option value="under-construction">Under Construction</option>
                                <option value="interior-under-construction">Interior Under Construction</option>
                                <option value="fully-constructed">Fully Constructed</option>
                            </select>
                            <label for="model">
                                <img src="@/assets/icons/chevron-down.svg" class="h-10 w-10" alt="" />
                            </label>
                        </div>
                    </div>

                    <div class="flex ml-auto w-fit my-2 lg:my-14">
                        <span @click="submitForm" class="text-4xl tracking-[0.6rem] opacity-70 cursor-pointer">Send</span>
                        <img src="@/assets/icons/orange-arrow-right.svg" class="h-10 ml-3" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const selectedProduct = ref("typhoon-d2");
const city = ref("");
const typeOfHome = ref("apartment");
const sizeOfHome = ref("2000-sft");
const currentStage = ref("under-construction");

const submitForm = async () => {
    const formData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        selectedProduct: selectedProduct.value,
        city: city.value,
        typeOfHome: typeOfHome.value,
        sizeOfHome: sizeOfHome.value,
        currentStage: currentStage.value,
        clientId: localStorage.getItem('clientId')
    };
    try {
        await postDemo(formData);
        console.log(formData)
    } catch (error) {
        console.log(error.message)
    }

};
</script>
  
<style scoped>
select {
    appearance: none;
}
</style>
  