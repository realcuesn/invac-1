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
                    <input type="text" class="w-full outline-none text-lg lg:text-2xl border-neutral-600 border-b-2 pb-3"
                        placeholder="Name*" />
                    <input type="email" class="w-full outline-none text-lg lg:text-2xl border-neutral-600 border-b-2 pb-3"
                        placeholder="Email ID*" />
                    <input type="email" class="w-full outline-none text-lg lg:text-2xl border-neutral-600 border-b-2 pb-3"
                        placeholder="Phone No*" />
                    <div class="lg:flex justify-between">
                        <div class="lg:w-[45%] pb-3 flex text-lg lg:text-2xl justify-between border-b-2 border-black">
                            <select ref="modelRef" name="Model" id="model" class="w-full outline-none">
                                <option value="typhoon-d2">Typhoon D2</option>
                                <option value="typhoon-d3">Typhoon D3</option>
                                <option value="techno-plus-158">TechnoPlus 158</option>
                                <option value="techno-plus-158-booster">
                                    TechnoPlus 158 + Booster
                                </option>
                                <option value="techno-plus-230">TechnoPlus 230</option>
                                <option value="techno-plus-258">TechnoPlus 258</option>
                            </select>
                            <img src="@/assets/icons/chevron-down.svg" class="h-10 w-10" alt="" />
                        </div>

                        <div
                            class="mt-12 lg:mt-0 lg:w-[45%] pb-3 flex text-lg lg:text-2xl justify-between border-b-2 border-black">
                            <input type="text" placeholder="City" class="w-full outline-none" />
                        </div>
                    </div>

                    <input type="name" class="w-full outline-none text-lg lg:text-2xl border-neutral-600 border-b-2 pb-3"
                        placeholder="Type of home" />


                    <div class="lg:flex justify-between">
                        <div class="lg:w-[45%] pb-3 flex text-lg lg:text-2xl justify-between border-b-2 border-black">
                            <select name="Model" id="model" class="w-full outline-none">
                                <option value="size of home">Size of home</option>
                            </select>
                            <img src="@/assets/icons/chevron-down.svg" class="h-10 w-10" alt="" />
                        </div>

                        <div
                            class="mt-12 lg:mt-0 lg:w-[45%] pb-3 flex text-lg lg:text-2xl justify-between border-b-2 border-black">
                            <input type="text" placeholder="Current Stage" class="w-full outline-none" />
                        </div>
                    </div>
                    <div class="flex ml-auto w-fit my-2 lg:my-14">
                        <span class="text-4xl tracking-[0.6rem] opacity-70">Send</span><img src="@/assets/icons/orange-arrow-right.svg"
                            class="h-10 ml-3" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const menuState = useState("menuState");
const selectedProduct = useState("selectedProduct");
const modelRef = ref(null);
onMounted(() => {
    console.log(selectedProduct.value);
    modelRef.value.value =
        selectedProduct.value == 0
            ? "typhoon-d2"
            : selectedProduct.value == 1
                ? "typhoon-d3"
                : selectedProduct.value == 2
                    ? "techno-plus-158"
                    : selectedProduct.value == 3
                        ? "techno-plus-158-booster"
                        : selectedProduct.value == 4
                            ? "techno-plus-258"
                            : selectedProduct.value == 5
                                ? "techno-plus-230"
                                : "typhoon-d2";
    menuState.value = false;
});
useHead({
    title: "Book a Demo",
});

definePageMeta({
    scrollToTop: true,
    pageTransition: {
        name: "rotate",
    },
});
</script>
  
<style scoped>
select {
    appearance: none;
}
</style>