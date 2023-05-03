<template lang="">
    <figure class='mt-20 w-[90%] md:w-[50%] 
                   mx-auto flex flex-col gap-2
                   relative -z-50'>
        <blockquote class="border-2 border-green-600 bg-green-500
                text-slate rounded-3xl pl-10 pr-8 
                text-2xl
                before:content-['\201C'] 
                before:font-bold
                before:text-9xl
                before:text-slate-500
                after:content-['\201D']
                after:font-bold
                after:text-9xl
                after:flex
                after:justify-end
                after:text-slate-500
              ">
                
        <slot></slot>
        </blockquote>
        <figcaption class='italic 
                    text-4xl flex justify-end
                    text-black font-semibold
                    dark:text-white
                    '>
            &#8212<slot name='author'>Unknown</slot>
        </figcaption>    
    </figure>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>