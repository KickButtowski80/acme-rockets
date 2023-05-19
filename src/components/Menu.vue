<template>
    <div>
        <div class="flex justify-between bg-green-800
               text-gray-300">

            <div class="flex items-center py-4">
                <img class="w-8 ml-3" src="/favicon.ico" alt="aceme rocket logo">
                <h2 class="text-2xl md:text-3xl font-bold
                            ml-3">
                    <a href="#hero">Acme Rockets</a>
                </h2>
            </div>
            <nav class="hidden m-2
                sm:flex sm:items-center 
                [&>*]:w-32 [&>*]:text-lg
                md:[&>*]:text-xl md:font-semibold
                hover:[&>*]:text-xl hover:[&>*]:border
                hover:[&>*]:border-sky-500
                hover:[&>*]:rounded-2xl hover:[&>*]:p-2 hover:[&>*]:mx-2
                active:[&>*]:bg-blue-700 
                focus:[&>*]:outline-none focus:[&>*]:ring focus:[&>*]:ring-blue-900
                focus:[&>*]:rounded-full focus:[&>*]:p-2     
                [&>*:last-child]:unset-all 
                [&>*:last-child]:ml-5
                hover:[&>*:last-child]:text-base hover:[&>*:last-child]:mx-0
                                     " aria-label="main">
                <a href="#rockets">Our Rocket</a>
                <a href="#testmonials">Testmonials</a>
                <a href="#contact-us">Contact Us</a>
                <ThemeBtn />
            </nav>
            <Transition name="rotate">
                <div v-show="showingMenu" :class="{ hidden: !showingMenu }" 
                 class=" border-2  sm:hidden
                    m-2 rounded-2xl border-red-900
                    [&>*]:bg-blue-400 [&>*]:w-6 [&>*]:h-1
                    [&>*]:m-2 cursor-pointer
                    hover:[&>*]:w-12 " 
                    @click="toggleMenu" aria-label="mobile"
                    >
                    <hr />
                    <hr />
                    <hr />
                    <!-- &#9776;  it is unicode for hambergure icon-->
                </div>
            </Transition >
            <Transition name="negative-rotate">
                <div v-show="!showingMenu" :class="{ hidden: showingMenu }" class=" border-2 sm:hidden
                    m-2 rounded-2xl border-red-900 [&>*]:bg-blue-400
                    [&>*]:w-10 [&>*]:h-1
                    flex items-center relative
                     " @click="toggleMenu"
                     >
                    <hr class="rotate-45 absolute">
                    <hr class="-rotate-45">
                </div>
            </Transition>
        </div>
        <nav :class="{ hidden: showingMenu }" class="absolute right-0 bg-green-800 [&>*]:m-3      
            flex flex-col
            md:font-semibold sm:hidden sm:[&>*]:hidden
            [&>*]:text-lg text-gray-300     
            h-screen
            ">
            <Transition name="fade">
                <a href="#rockets" v-show="!showingMenu"
                style=" transition-delay: 10ms ">Our Rocket</a>        
            </Transition>
            <Transition name="fade">
                <a href="#testmonials" v-show="!showingMenu"
                     style=" transition-delay: 30ms ">Testmonials</a>
            </Transition>
            <Transition name="fade">
                <a href="#contact-us" v-show="!showingMenu"
                style=" transition-delay: 40ms ">Contact Us</a>
            </Transition>
            <ThemeBtn />
        </nav>
    </div>
</template>
<script>

export default {
    props: ['IsOutOfMenu'],
    data() {
        return {
            showingMenu: true,
        }
    },
    watch: {
        IsOutOfMenu(newValue) {
            this.showingMenu = newValue;
        }
    },
    methods: {
        toggleMenu() {
            this.showingMenu = !this.showingMenu
        },
    }
}
</script>

<style>
.negative-rotate-enter-active,
.negative-rotate-leave-active {
    transition: transform 0.5s ease;
}

.negative-rotate-enter-from,
.negative-rotate-leave-to {
    transform: rotate(-90deg);
}


.rotate-enter-active,
.rotate-leave-active {
    transition: transform 0.5s ease;
}

.rotate-enter-from,
.rotate-leave-to {
    transform: rotate(90deg);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
