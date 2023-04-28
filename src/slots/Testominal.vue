<template lang="">
    <figure class='mt-20 max-w-md w-4/5
                    mx-auto relative -z-40'>
    <p class="border-2 border-green-600 bg-green-500
              text-slate    rounded-3xl p-2
              text-2xl
               before:content-['“'] 
               after:content-['”']">
      <slot></slot>
    </p>
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