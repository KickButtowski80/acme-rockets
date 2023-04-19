<template>
  <div>
    <Menu></Menu>
    <div class="absolute -z-40">
      <HelloWorld/>
    </div>
  </div>
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

 
