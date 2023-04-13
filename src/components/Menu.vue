<template>
    <div class="flex justify-between bg-green-800
                text-gray-300">
        <div class="flex items-center py-4">
            <img class="w-8 ml-3" src="/favicon.ico" alt="aceme rocket logo">
            <h2 class="text-base md:text-2xl font-bold
                        ml-3">
                Aceme Rockets
            </h2>
        </div>
        <ol class=" hidden m-2
                    sm:flex sm:items-center 
                    [&>*]:w-32 [&>*]:text-xs
                    md:[&>*]:text-base md:font-semibold">
            <li>Our Rockets</li>
            <li>Testmonials</li>
            <li>Contact Us</li>
        </ol>
        <div class="block border-2 sm:hidden
                    m-2 rounded-2xl border-red-900" @click="toggleMenu">
            <hr class="w-6 h-1 m-2 bg-blue-400" />
            <hr class="w-6 h-1 m-2 bg-blue-400" />
            <hr class="w-6 h-1 m-2 bg-blue-400" />
        </div>

    </div>
    <ol :class="`${showingStatus}`" 
        class=" bg-green-800 float-right
                h-screen overflow-x-hidden
                flex flex-col items-end 
                [&>*]:m-1 xs:[&>*]:text-lg
                md:font-semibold xs:hidden sm:[&>*]:hidden">
        <li>Our Rockets</li>
        <li>Testmonials</li>
        <li>Contact Us</li>
    </ol>
</template>
<script>
export default {
    data() {
        return {
            showingStatus: 'hidden',
        }
    },
    methods: {
        toggleMenu() {
            this.showingStatus = this.showingStatus === 'hidden' ? 'block' : 'hidden'
        }

    }
}
</script>
