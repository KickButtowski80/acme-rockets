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
        <nav class="hidden m-2
                    sm:flex sm:items-center 
                    [&>*]:w-32 [&>*]:text-lg
                    md:[&>*]:text-xl md:font-semibold
                    hover:[&>*]:text-xl hover:[&>*]:border hover:[&>*]:border-sky-500
                    hover:[&>*]:rounded-2xl hover:[&>*]:p-2 hover:[&>*]:mx-2
                    active:[&>*]:bg-blue-700 
                    focus:[&>*]:outline-none focus:[&>*]:ring focus:[&>*]:ring-blue-900
                    focus:[&>*]:rounded-full focus:[&>*]:p-2
                  "
                  >
            <button >Our Rockets</button>
            <button>Testmonials</button>
            <button>Contact Us</button>
        </nav>
        <div  :class="`${showingHamburger}`"
        class=" border-2  sm:hidden
                m-2 rounded-2xl border-red-900
                [&>*]:bg-blue-400 [&>*]:w-6 [&>*]:h-1
                [&>*]:m-2
                hover:[&>*]:w-12 " @click="toggleMenu">
            <hr/>
            <hr/>
            <hr/>
        </div>
       <div  :class="`${showingCross}`"
       class=" border-2 sm:hidden
                m-2 rounded-2xl border-red-900 [&>*]:bg-blue-400
                [&>*]:w-10 [&>*]:h-1
                flex items-center relative
                 "
                @click="toggleMenu">
        <hr class="rotate-45 absolute">
        <hr class="-rotate-45">
       </div>
    </div>    
    <nav :class="`${showingMenu}`"
        class=" bg-green-800 float-right
            h-screen overflow-hidden
            flex flex-col 
            md:font-semibold sm:hidden sm:[&>*]:hidden
            [&>*]:m-1 [&>*]:text-lg text-gray-300
            hover:[&>*]:text-xl hover:[&>*]:border hover:[&>*]:border-sky-500
            hover:[&>*]:rounded-2xl hover:[&>*]:p-2 hover:[&>*]:mx-2
            active:[&>*]:bg-blue-700 
            focus:[&>*]:outline-none focus:[&>*]:ring focus:[&>*]:ring-blue-900
            focus:[&>*]:rounded-full focus:[&>*]:p-2
            ">
        <button >Our Rockets</button>
        <button >Testmonials</button>
        <button >Contact Us</button>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            showingMenu: 'hidden',
            showingHamburger: 'block',
            showingCross:'hidden',
        }
    },
    methods: {
        toggleMenu() {
            this.showingMenu = this.showingMenu === 'hidden' ? 'block' : 'hidden'
            this.showingHamburger = this.showingHamburger === 'hidden' ? 'block' : 'hidden'
            this.showingCross = this.showingCross !== 'block' ? 'block' : 'hidden'
        }

    }
}
</script>
