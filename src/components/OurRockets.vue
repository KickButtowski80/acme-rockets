<template lang="">
 <TitleSction title="Our Rockets"/> 
 <section class='flex flex-col items-center
                 sm:flex-row  sm:justify-evenly my-20'>
    <div v-for='{img,name,price} in rocketsInfo' :key='price'
    class=" border-2 border-gray-500 rounded-3xl
          shadow-xl
          flex flex-col items-center 
           mx-5 my-5 w-2/3 p-2">   
              
         <img :src='img' :alt='name' class="w-1/3">
         <h5>{{name}}</h5> 
         <p  class='md:hidden'>{{price.amount}}</p>    
         <p  class='hidden md:block'>{{price.explanation}}</p>          
    </div>
   
 </section>
</template>
<script>
export default {
     data() {
          return {
               rocketsInfo: [
                    {
                         img: '/imgs/rocketman.png',
                         name: 'Explorer',
                         price: { amount: '$', explanation: 'Affordable Exploration' }
                    },
                    {
                         img: '/imgs/rocketride.png',
                         name: 'Advanturer',
                         price: { amount: '$$', explanation: 'Best Selling Rockets!' }
                    },
                    {
                         img: '/imgs/rocketlaunch.png',
                         name: 'Infinity',
                         price: { amount: '$$$', explanation: 'Luxury Starship' }
                    },
               ]
          }
     }
}
</script>
<style lang="">
    
</style>