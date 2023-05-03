<template lang="">
  <TitleSction title="Testmonials"/> 
  <section class='flex flex-col 
                  lg:grid lg:grid-cols-2            
                 '>
    <Testominal>
        Acme
        has always been three-linefor me. Their Exploer rocket arrived in a wooden
        crate as expected.
        Lif-long Customer! A++ shopping experince 
     </Testominal>
    <Testominal v-for='t in 4'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, soluta laudantium atque aliquid labore repudiandae? 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugit fugiat ab eaque soluta nobis corporis sit.enim kiko
      <template v-slot:author>
        Izak T
      </template>
    </Testominal> 
  </section>
</template>
<script>
import Testominal from '../slots/Testominal.vue';
export default {
  components: {
    Testominal,
  }
}
</script>
<style lang="">
  
</style>