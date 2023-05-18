<template>
  <div class="dark" @click="IsOutOfMenuClicked">
    <div class="sticky top-0">
      <Menu :IsOutOfMenu="WhetherOutOfMenu">
      </Menu>
    </div>
    <main>
      <Hero id="hero" />
      <hr id="rockets" class=" dark:bg-gray-300 
                w-1/2 h-1 rounded mx-auto">

      <OurRockets />
      <hr id="testmonials" class=" dark:bg-gray-300 
                                   w-1/2 h-1 rounded mx-auto
                                  ">

      <Testmonials />
      <hr id="contact-us" class=" dark:bg-gray-300 
                                   w-1/2 h-1 rounded mx-auto
                                  ">
      <Contact />
    </main>
    <Footer></Footer>
  </div>
  <!-- do not forget to define global fonts  -->
</template>

<script>
import Menu from './components/Menu.vue'
import Hero from './components/Hero.vue';
import OurRockets from './components/OurRockets.vue';
import Testmonials from './components/Testmonials.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Menu,
    Hero,
    OurRockets,
    Testmonials,
    Contact,
    Footer,
  },
  data() {
    return {
      WhetherOutOfMenu: false,
    }
  },
  methods: {
    IsOutOfMenuClicked(e) {
      //  debugger;
      console.log(e.target.getAttribute('aria-label'))
      console.log(e.target.parentNode.getAttribute('aria-label'))
      const locMenu = e.target.getAttribute('aria-label')
      const parentLocMenu = e.target.parentNode.getAttribute('aria-label')
      if (locMenu === 'mobile' || parentLocMenu === 'mobile')
       this.WhetherOutOfMenu = false
      else
        this.WhetherOutOfMenu = true
    }
  }
}

</script>

 
