<template lang="">
    <footer id="#footer"
     class="p-5 bg-teal-700 text-white text-base md:text-xl">
      <section class="md:grid md:grid-cols-3">
        <address>
            Acme Rocket-Powered Proudcts,Inc
            555 Astro Way
            La Ca 90035 <br>
            Email: 
            <a href="mailto:inquires@acmerockets.com">inquires@acmerockets.com</a>
            <br>
            Phone:
            <a href="tel:+15555555555">(555)555-5555</a> 
        </address>
        <hr class="md:hidden">
        <section class="flex
                        md:flex md:flex-col 
                        md:justify-top md:items-center gap-2">
            <a href="#rockets">Our Rockets</a>
            <a href="#testmonials">Testimonails</a>
            <a href="#contact-us">Contact Us</a>
        </section>
        <hr class="md:hidden">
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