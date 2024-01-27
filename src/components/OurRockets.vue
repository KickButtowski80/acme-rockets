<template lang="">
<div class="h-auto  md:h-[50%] mt-20">
   <TitleSction title="Our Rockets"/>
   <section id='cards' class='flex flex-col items-center 
      sm:flex-row sm:justify-center md:my-20'>
      <div v-for='{img,name,price,info} in rocketsInfo' :key='price'
         class="group"
         >
          <div 
           class=" border-2 border-gray-500 rounded-3xl
            shadow-xl
            flex flex-col items-center 
            mx-5 my-5 w-2/3 p-2 card         
            ">
            <img :src='img' :alt='name'
             class="w-1/3">
            <h1>{{name}}</h1>
            <p  class=''>{{price.amount}}</p>
            <p  class='hidden md:block group-hover:hidden             
            '>{{price.explanation}}</p>            
            <hr class=" bg-blue-700 
               w-1/2 h-1 rounded mx-auto
               "/>            
         </div>
         <div class="hidden group-hover:block -z-50 rounded-3xl
          bg-gray-900 opacity-70  text-white
          text-center font-medium p-2 mx-5 last:my-15">
            <p>{{info}}</p>
         </div>
      </div>
   </section>
</div>
</template>
<script>
export default {
     data() {
          return {
               rocketsInfo: [
                    {
                         img: "/imgs/rocketman.png",
                         name: "Explorer",
                         price: {
                              amount: "$",
                              explanation: "Affordable Exploration",
                         },
                         info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.   ",
                    },
                    {
                         img: "/imgs/rocketride.png",
                         name: "Advanturer",
                         price: {
                              amount: "$$",
                              explanation: "Best Selling Rockets!",
                         },
                         info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.   ",
                    },
                    {
                         img: "/imgs/rocketlaunch.png",
                         name: "Infinity",
                         price: {
                              amount: "$$$",
                              explanation: "Luxury Starship",
                         },
                         info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.   ",
                    },
               ],
          };
     },
};
</script>
<style lang="">
</style>