<template>
    <div class="h-screen w-full relative hidden lg:block">
        <div class="h-full w-full relative">
            <img ref="imageOne" src="@/assets/images/home-static/hero-kickvac.png"
                class="h-full w-full object-cover absolute top-0" alt="">
            <img ref="imageTwo" src="@/assets/images/home-static/drawer-vac.png"
                class="h-full w-full object-cover absolute top-0" alt="">
            <img ref="imageThree" src="@/assets/images/home-static/cabinet-vac.png"
                class="h-full w-full object-cover absolute top-0" alt="">
            <img ref="imageFour" src="@/assets/images/home-static/speedy-vac.png"
                class="h-full w-full object-cover absolute top-0" alt="">
            <img ref="imageFive" src="@/assets/images/home-static/retra-vac.png"
                class="h-full w-full object-cover absolute top-0" alt="">
        </div>
        <div class="absolute h-full w-full top-0 bg-black bg-opacity-20 flex px-20">
            <div class="h-full w-[60%] flex flex-col justify-between py-28">
                <h2 class="text-2xl">Product <span class="font-semibold">Accessories</span> </h2>

                <div class="flex flex-col gap-y-6">
                    <div @mouseover="triggerHover(1)"
                        class="flex items-center text-xl w-fit fourth-item-one cursor-pointer opacity-40 hover:opacity-100">
                        <p class="h-0.5  bg-white"></p>
                        <h2 class="ml-5">Kickvac</h2>
                    </div>

                    <div @mouseover="triggerHover(2)"
                        class="flex items-center text-xl w-fit fourth-item-two cursor-pointer opacity-40 hover:opacity-100">
                        <p class="h-0.5  bg-white"></p>
                        <h2 class="ml-5">Drawervac</h2>
                    </div>

                    <div @mouseover="triggerHover(3)"
                        class="flex items-center text-xl w-fit fourth-item-three cursor-pointer opacity-40 hover:opacity-100">
                        <p class="h-0.5  bg-white"></p>
                        <h2 class="ml-5">Cabinetvac</h2>
                    </div>

                    <div @mouseover="triggerHover(4)"
                        class="flex items-center text-xl w-fit fourth-item-four cursor-pointer opacity-40 hover:opacity-100">
                        <p class="h-0.5  bg-white"></p>
                        <h2 class="ml-5">Speedyvac</h2>
                    </div>

                    <div @mouseover="triggerHover(5)"
                        class="flex items-center text-xl w-fit fourth-item-five cursor-pointer opacity-40 hover:opacity-100">
                        <p class="h-0.5  bg-white"></p>
                        <h2 class="ml-5">Retrovac</h2>
                    </div>
                </div>
            </div>

            <div class="h-full w-[40%] flex flex-col justify-between py-28">
                <div></div>

                <div class="flex flex-col">
                    <div @click="triggerToggle" class="flex items-center gap-x-44 border-b-2 border-white w-fit pb-1">
                        <span class=" text-lg">More Info</span>
                        <img ref="chevron" src="@/assets/icons/chevron-up.svg" class="h-4 w-4 rotate-180" alt="">
                    </div>

                    <div ref="heightContainer" class="w-full overflow-y-clip h-0">
                        <div v-if="toggle && toggleNum == 1" class="pt-10">
                            <p> Keeping your kitchen cleaner just got a lot easier with
                                Kickvac – a simple, powerful always available vacuum to suck
                                away floor sweepings. Conveniently placed in the kitchen,
                                requires no setup or put away time. Kickvac makes your life
                                easier by reducing manual cleaning process.</p>

                            <p class="mt-10">simply dispose of your floor sweeping in 3 seconds flat.</p>
                        </div>


                        <div v-if="toggle && toggleNum == 2" class="pt-10">
                            <p> Keeping your kitchen cleaner just got a lot easier with
                                Kickvac – a simple, powerful always available vacuum to suck
                                away floor sweepings. Conveniently placed in the kitchen,
                                requires no setup or put away time. Kickvac makes your life
                                easier by reducing manual cleaning process.</p>

                            <p class="mt-10">simply dispose of your floor sweeping in 3 seconds flat.</p>
                        </div>

                        <div v-if="toggle && toggleNum == 3" class="pt-10">
                            <p> Keeping your kitchen cleaner just got a lot easier with
                                Kickvac – a simple, powerful always available vacuum to suck
                                away floor sweepings. Conveniently placed in the kitchen,
                                requires no setup or put away time. Kickvac makes your life
                                easier by reducing manual cleaning process.</p>

                            <p class="mt-10">simply dispose of your floor sweeping in 3 seconds flat.</p>
                        </div>

                        <div v-if="toggle && toggleNum == 4" class="pt-10">
                            <p> Keeping your kitchen cleaner just got a lot easier with
                                Kickvac – a simple, powerful always available vacuum to suck
                                away floor sweepings. Conveniently placed in the kitchen,
                                requires no setup or put away time. Kickvac makes your life
                                easier by reducing manual cleaning process.</p>

                            <p class="mt-10">simply dispose of your floor sweeping in 3 seconds flat.</p>
                        </div>

                        <div v-if="toggle && toggleNum == 5" class="pt-10">
                            <p> Keeping your kitchen cleaner just got a lot easier with
                                Kickvac – a simple, powerful always available vacuum to suck
                                away floor sweepings. Conveniently placed in the kitchen,
                                requires no setup or put away time. Kickvac makes your life
                                easier by reducing manual cleaning process.</p>

                            <p class="mt-10">simply dispose of your floor sweeping in 3 seconds flat.</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>


    <div ref="container" class="h-screen w-full lg:hidden relative">
        <div class="h-full w-full relative">
            <img ref="imgOne" src="@/assets/images/home-static/hero-kickvac.png"
                class="h-full w-full object-cover absolute top-0" alt="">
            <img ref="imgTwo" src="@/assets/images/home-static/drawer-vac.png"
                class="h-full w-full object-cover absolute top-0" alt="">
            <img ref="imgThree" src="@/assets/images/home-static/cabinet-vac.png"
                class="h-full w-full object-cover absolute top-0" alt="">
            <img ref="imgFour" src="@/assets/images/home-static/speedy-vac.png"
                class="h-full w-full object-cover absolute top-0" alt="">
            <img ref="imgFive" src="@/assets/images/home-static/retra-vac.png"
                class="h-full w-full object-cover absolute top-0" alt="">
        </div>

        <div
            class="absolute h-full w-full top-0 bg-black bg-opacity-20 flex flex-col items-center justify-between px-10 py-20">
            <h2 class="text-lg flex items-center">Product <span class="font-semibold pl-2">Attachments</span> </h2>
            <div class="w-full flex flex-col items-center">
                <h3 class="flex"> <img src="@/assets/icons/chevron-left.svg" alt=""> <span>{{ name }}</span> <img
                        src="@/assets/icons/chevron-right.svg" alt=""> </h3>
                <div @click="triggerToggle" class="flex items-center gap-x-28 border-b-2 border-white w-fit pb-1 mt-10">
                    <span class=" text-base">More Info</span>
                    <img ref="chevron" src="@/assets/icons/chevron-up.svg" class="h-4 w-4 rotate-180" alt="">
                </div>
                <p v-if="toggle" class="mt-10 text-sm">{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
const toggle = ref(false);
const chevron = ref(null);
const heightContainer = ref(null);
const toggleNum = ref(1);
const imageOne = ref(null);
const imageTwo = ref(null);
const imageThree = ref(null);
const imageFour = ref(null);
const imageFive = ref(null);
const name = ref("Kickvac");
const count = ref(1);
const container = ref(null);
let touchStartX = 0;
let touchEndX = 0;
const SWIPE_THRESHOLD = 50; // The number of pixels that the user must move their finger by before it is considered a swipe.
const imgOne = ref(null);
const imgTwo = ref(null);
const imgThree = ref(null);
const imgFour = ref(null);
const imgFive = ref(null);
const description = ref("Keeping your kitchen cleaner just got a lot easier with Kickvac – a simple, powerful always available vacuum to suck away floor sweepings. Conveniently placed in the kitchen, requires no setup or put away time. Kickvac makes your life easier by reducing manual cleaning process. simply dispose of your floor sweeping in 3 seconds flat.");
const triggerToggle = () => {
    toggle.value = !toggle.value;
    if (toggle.value) {
        gsap.to(chevron.value, { rotate: 0, duration: 0.3 })
        gsap.to(heightContainer.value, { height: 'fit-content', duration: 0.3 })
    } else {
        gsap.to(chevron.value, { rotate: 180, duration: 0.3 })
        gsap.to(heightContainer.value, { height: '0', duration: 0.3 })
    }
}





const swipeHandler = (direction) => {
    console.log(count.value)
    if (direction == "left") {
        count.value++;
    }
    if (direction == "right") {
        count.value--;
    }

    if (count.value > 5) {
        count.value = 1;
    }
    if (count.value < 1) {
        count.value = 5;
    }


    if (count.value == 1) {
        name.value = "Kickvac";
        description.value = "Keeping your kitchen cleaner just got a lot easier with Kickvac – a simple, powerful always available vacuum to suck away floor sweepings. Conveniently placed in the kitchen, requires no setup or put away time. Kickvac makes your life easier by reducing manual cleaning process. simply dispose of your floor sweeping in 3 seconds flat.";
        gsap.to(imgOne.value, { opacity: 1, duration: 0.3 })
        gsap.to(imgTwo.value, { opacity: 0, duration: 0.3 })
        gsap.to(imgThree.value, { opacity: 0, duration: 0.3 })
        gsap.to(imgFour.value, { opacity: 0, duration: 0.3 })
        gsap.to(imgFive.value, { opacity: 0, duration: 0.3 })
    }

    if (count.value == 2) {
        name.value = "Drawervac";
        description.value = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        gsap.to(imgOne.value, { opacity: 0, duration: 0.3 })
        gsap.to(imgTwo.value, { opacity: 1, duration: 0.3 })
        gsap.to(imgThree.value, { opacity: 0, duration: 0.3 })
        gsap.to(imgFour.value, { opacity: 0, duration: 0.3 })
        gsap.to(imgFive.value, { opacity: 0, duration: 0.3 })
    }

    if (count.value == 3) {
        name.value = "Cabinetvac";
        description.value = "Keeping your kitchen cleaner just got a lot easier with Kickvac – a simple, powerful always available vacuum to suck away floor sweepings. Conveniently placed in the kitchen, requires no setup or put away time. Kickvac makes your life easier by reducing manual cleaning process. simply dispose of your floor sweeping in 3 seconds flat.";
        gsap.to(imgOne.value, { opacity: 0, duration: 0.3 })
        gsap.to(imgTwo.value, { opacity: 0, duration: 0.3 })
        gsap.to(imgThree.value, { opacity: 1, duration: 0.3 })
        gsap.to(imgFour.value, { opacity: 0, duration: 0.3 })
        gsap.to(imgFive.value, { opacity: 0, duration: 0.3 })
    }

    if (count.value == 4) {
        name.value = "Speedyvac";
        description.value = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        gsap.to(imgOne.value, { opacity: 0, duration: 0.3 })
        gsap.to(imgTwo.value, { opacity: 0, duration: 0.3 })
        gsap.to(imgThree.value, { opacity: 0, duration: 0.3 })
        gsap.to(imgFour.value, { opacity: 1, duration: 0.3 })
        gsap.to(imgFive.value, { opacity: 0, duration: 0.3 })

    }


    if (count.value == 5) {
        name.value = "Retrovac";
        description.value = "lorem asd dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        gsap.to(imgOne.value, { opacity: 0, duration: 0.3 })
        gsap.to(imgTwo.value, { opacity: 0, duration: 0.3 })
        gsap.to(imgThree.value, { opacity: 0, duration: 0.3 })
        gsap.to(imgFour.value, { opacity: 0, duration: 0.3 })
        gsap.to(imgFive.value, { opacity: 1, duration: 0.3 })
    }
}

const triggerHover = (num) => {

    if (num == 1) {
        toggleNum.value = 1;
        gsap.to('.fourth-item-one p', { width: '3.5rem', opacity: 1, duration: 0.3 })
        gsap.to('.fourth-item-two p', { width: '0rem', duration: 0.3 })
        gsap.to('.fourth-item-three p', { width: '0rem', duration: 0.3 })
        gsap.to('.fourth-item-four p', { width: '0rem', duration: 0.3 })
        gsap.to('.fourth-item-five p', { width: '0rem', duration: 0.3 })

        gsap.to(imageOne.value, { opacity: 1, duration: 0.3 })
        gsap.to(imageTwo.value, { opacity: 0, duration: 0.3 })
        gsap.to(imageThree.value, { opacity: 0, duration: 0.3 })
        gsap.to(imageFour.value, { opacity: 0, duration: 0.3 })
        gsap.to(imageFive.value, { opacity: 0, duration: 0.3 })

    }

    if (num == 2) {
        toggleNum.value = 2;
        gsap.to('.fourth-item-one p', { width: '0rem', duration: 0.3 })
        gsap.to('.fourth-item-two p', { width: '3.5rem', opacity: 1, duration: 0.3 })
        gsap.to('.fourth-item-three p', { width: '0rem', duration: 0.3 })
        gsap.to('.fourth-item-four p', { width: '0rem', duration: 0.3 })
        gsap.to('.fourth-item-five p', { width: '0rem', duration: 0.3 })

        gsap.to(imageOne.value, { opacity: 0, duration: 0.3 })
        gsap.to(imageTwo.value, { opacity: 1, duration: 0.3 })
        gsap.to(imageThree.value, { opacity: 0, duration: 0.3 })
        gsap.to(imageFour.value, { opacity: 0, duration: 0.3 })
        gsap.to(imageFive.value, { opacity: 0, duration: 0.3 })
    }

    if (num == 3) {
        toggleNum.value = 3;
        gsap.to('.fourth-item-one p', { width: '0rem', duration: 0.3 })
        gsap.to('.fourth-item-two p', { width: '0rem', duration: 0.3 })
        gsap.to('.fourth-item-three p', { width: '3.5rem', opacity: 1, duration: 0.3 })
        gsap.to('.fourth-item-four p', { width: '0rem', duration: 0.3 })
        gsap.to('.fourth-item-five p', { width: '0rem', duration: 0.3 })

        gsap.to(imageOne.value, { opacity: 0, duration: 0.3 })
        gsap.to(imageTwo.value, { opacity: 0, duration: 0.3 })
        gsap.to(imageThree.value, { opacity: 1, duration: 0.3 })
        gsap.to(imageFour.value, { opacity: 0, duration: 0.3 })
        gsap.to(imageFive.value, { opacity: 0, duration: 0.3 })
    }

    if (num == 4) {
        toggleNum.value = 4;
        gsap.to('.fourth-item-one p', { width: '0rem', duration: 0.3 })
        gsap.to('.fourth-item-two p', { width: '0rem', duration: 0.3 })
        gsap.to('.fourth-item-three p', { width: '0rem', duration: 0.3 })
        gsap.to('.fourth-item-four p', { width: '3.5rem', opacity: 1, duration: 0.3 })
        gsap.to('.fourth-item-five p', { width: '0rem', duration: 0.3 })

        gsap.to(imageOne.value, { opacity: 0, duration: 0.3 })
        gsap.to(imageTwo.value, { opacity: 0, duration: 0.3 })
        gsap.to(imageThree.value, { opacity: 0, duration: 0.3 })
        gsap.to(imageFour.value, { opacity: 1, duration: 0.3 })
        gsap.to(imageFive.value, { opacity: 0, duration: 0.3 })
    }

    if (num == 5) {
        toggleNum.value = 5;
        gsap.to('.fourth-item-one p', { width: '0rem', duration: 0.3 })
        gsap.to('.fourth-item-two p', { width: '0rem', duration: 0.3 })
        gsap.to('.fourth-item-three p', { width: '0rem', duration: 0.3 })
        gsap.to('.fourth-item-four p', { width: '0rem', duration: 0.3 })
        gsap.to('.fourth-item-five p', { width: '3.5rem', opacity: 1, duration: 0.3 })

        gsap.to(imageOne.value, { opacity: 0, duration: 0.3 })
        gsap.to(imageTwo.value, { opacity: 0, duration: 0.3 })
        gsap.to(imageThree.value, { opacity: 0, duration: 0.3 })
        gsap.to(imageFour.value, { opacity: 0, duration: 0.3 })
        gsap.to(imageFive.value, { opacity: 1, duration: 0.3 })
    }

}

onMounted(() => {
    triggerHover(1)


    function handleTouchStart(event) {
        touchStartX = event.touches[0].clientX;
    }

    function handleTouchEnd(event) {
        touchEndX = event.changedTouches[0].clientX;
        const swipeDistance = touchEndX - touchStartX;
        if (Math.abs(swipeDistance) < SWIPE_THRESHOLD) {
            swipeHandler('none');
        } else if (swipeDistance > 0) {
            swipeHandler('right');
        } else {
            swipeHandler('left');
        }
    }

    container.value.addEventListener('touchstart', handleTouchStart);
    container.value.addEventListener('touchend', handleTouchEnd);
})

</script>


<style>
.fourth-item-one:hover p {
    animation: incWidth 0.3s linear forwards;
}

@keyframes incWidth {
    0% {
        width: 0rem;
    }


    100% {
        width: 3.5rem;
    }
}
</style>