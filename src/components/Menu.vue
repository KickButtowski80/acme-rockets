<template>
    <div class="flex justify-between bg-green-800
                    text-gray-300">
        <div class="flex items-center py-4">
            <img class="w-8 ml-3" src="/favicon.ico" alt="aceme rocket logo">
            <h2 class="text-2xl md:text-3xl font-bold
                            ml-3">
                Aceme Rockets
            </h2>
        </div>
         <!-- all the elements are not focusabl. we need to redsign the menu with nav element -->
        <ol class=" hidden m-2
                    sm:flex sm:items-center 
                    [&>*]:w-32 [&>*]:text-lg
                    md:[&>*]:text-xl md:font-semibold
                    hover:[&>*]:text-xl hover:[&>*]:border hover:[&>*]:border-sky-500
                    hover:[&>*]:rounded-2xl hover:[&>*]:p-2 hover:[&>*]:mx-2
                    active:[&>*]:bg-blue-700 
                    focus:[&>*]:outline-none focus:[&>*]:ring-2 focus:[&>*]:ring-blue-900
                  "
                  >
            <li>Our Rockets</li>
            <li>Testmonials</li>
            <li>Contact Us</li>
        </ol>
        <div class="block border-2 sm:hidden
                    m-2 rounded-2xl border-red-900
                    [&>*]:bg-blue-400 [&>*]:w-6 [&>*]:h-1
                    [&>*]:m-2" @click="toggleMenu">
            <hr/>
            <hr/>
            <hr/>
        </div>

    </div>
    <!-- all the elements are not focusabl. we need to redsign the menu with nav element -->
    <ol :class="`${showingStatus}`"
        class=" bg-green-800 float-right
            h-screen overflow-hidden
            flex flex-col items-end 
            [&>*]:m-1 text-sm text-white 
            hover:[&>*]:text-xl hover:[&>*]:border hover:[&>*]:border-sky-500
            hover:[&>*]:rounded-2xl hover:[&>*]:p-2
            md:font-semibold sm:hidden sm:[&>*]:hidden
                    ">
        <li >Our Rockets</li>
        <li >Testmonials</li>
        <li >Contact Us</li>
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
