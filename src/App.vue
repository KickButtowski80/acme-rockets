<template>
  <div class="dark">
    <div class="sticky top-0">
      <Menu>
      </Menu>
    </div>
    <main>
      <Hero id="rockets" />
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
import HelloWorld from './components/HelloWorld.vue';
import Hero from './components/Hero.vue';

export default {
  components: {
    Menu,
    Hero,
    HelloWorld,
  }
}

</script>

 
