<template lang="">
  <TitleSction title="Testmonials"/> 
  <section class='flex flex-col 
                  lg:grid lg:grid-cols-2               
                 '>
    <Testominal v-for='t in 4'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, soluta laudantium atque aliquid labore repudiandae? 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugit fugiat ab eaque soluta nobis corporis sit, enim
      <template v-slot:author>
        Izak T
      </template>
    </Testominal> 
  </section>
</template>
<script>
import Testominal from '../slots/Testominal.vue';
export default {
  components:{
    Testominal,
  }
}
</script>
<style lang="">
  
</style>