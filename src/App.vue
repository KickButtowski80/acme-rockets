<template>
  <div >
    <div class="sticky top-0">
      <Menu></Menu>
    </div>
    <div >
      <HelloWorld/>
    </div>
  </div>
  <!-- do not forget to define global fonts  -->
</template>

<script>
import Menu from './components/Menu.vue'
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    Menu,
    HelloWorld,
  }
}

</script>

 
