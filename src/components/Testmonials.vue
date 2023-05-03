<template lang="">
  <TitleSction title="Testmonials"/> 
  <section class='flex flex-col lg:flex-row'>
    <Testominal v-for='t in 4'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, soluta laudantium atque aliquid labore repudiandae? Eveniet placeat cupiditate, repudiandae impedit sed qui quasi quas aut eaque enim nobis quaerat porro.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugit fugiat ab eaque soluta nobis corporis sit, enim maxime molestias architecto vitae officiis aperiam delectus blanditiis libero repellat ipsa nisi.
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