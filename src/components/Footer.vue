<template lang="">
    <footer id="#footer"
     class="p-5 bg-teal-700 text-white text-base md:text-xl">
      <section class="grid grid-cols-3">
        <section id="info">
            Acme Rocket-Powered Proudcts,Inc
            555 Astro Way
            La Ca 90035
            Email: inquires@acmerockets.com
            Phone: (555)555-5555
        </section>
        <section class="flex flex-col 
                        justify-top items-center gap-2">
            <a href="#rockets">Our Rockets</a>
            <a href="#testimonials">Testimonails</a>
            <a href="#contact-us">Contact Us</a>
        </section>
        <section class="flex flex-col">
            <span>Copyright &copy; {{currentYear}}</span>
            <span>All Rights Reserved</span>
        </section>
      </section>
    </footer>
</template>
<script>
export default {
    data(){
        return{
            currentYear: new Date().getFullYear()
        }
    }
    
}
</script>