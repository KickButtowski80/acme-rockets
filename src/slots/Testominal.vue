<template lang="">
    <figure class='mt-20 w-[90%] md:w-[50%] 
                   mx-auto flex flex-col gap-2'>
        <blockquote class="border-2 border-green-600 bg-green-500
                text-slate rounded-3xl pl-10 pr-8 py-12
                text-2xl
                before:content-['“'] 
                after:content-['”']">
        <slot></slot>
        </blockquote>
        <footer class='text-4xl flex justify-end
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