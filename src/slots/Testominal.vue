<template lang="">
    <figure class='mt-20 md:w-4/5 max-w-md 
                    mx-auto relative -z-40'>
        <blockquote class="border-2 border-green-600 bg-green-500
                text-slate rounded-3xl pl-14 pr-8 py-12
                text-2xl
                before:content-['“'] 
                after:content-['”']">
        <slot></slot>
        </blockquote>
        <footer class='text-4xl absolute right-0
                    text-gray-600 font-semibold'>
            --<slot name='author'></slot>
        </footer>    
    </figure>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>