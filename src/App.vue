<template>
  <div class="dark">
    <div class="sticky top-0">
      <Menu>
      </Menu>
    </div>
    <main>
      <Hero id="hero" />
      <hr  id="rockets"
      class=" dark:bg-gray-300 
                w-1/2 h-1 rounded mx-auto">

      <OurRockets />
      <hr id="testmonials" class=" dark:bg-gray-300 
                                   w-1/2 h-1 rounded mx-auto
                                  ">

      <HelloWorld />
    </main>
  </div>
  <!-- do not forget to define global fonts  -->
</template>

<script>
import Menu from './components/Menu.vue'
import OurRockets from './components/OurRockets.vue';
import HelloWorld from './components/Testmonials.vue';
import Hero from './components/Hero.vue';

export default {
  components: {
    Menu,
    Hero,
    OurRockets,
    HelloWorld,
  }
}

</script>

 
