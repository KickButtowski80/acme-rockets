<template lang="">
    <footer id="#footer"
     class="p-5 bg-teal-700 text-white text-base md:text-xl">
      <section class="md:grid md:grid-cols-3">
        <address>
            <h2> Acme Rocket-Powered Proudcts,Inc</h2> 
            555 Astro Way
            La Ca 90035 <br>
            Email: 
            <a href="mailto:inquires@acmerockets.com">inquires@acmerockets.com</a>
            <br>
            Phone:
            <a href="tel:+15555555555">(555)555-5555</a> 
        </address>
        
        <nav class="hidden
                    md:flex md:flex-col 
                    md:justify-top md:items-center gap-2"
              aria-label="footer">
            <a href="#rockets" class="hover:opacity-90">Our Rockets</a>
            <a href="#testmonials" class="hover:opacity-90">Testimonails</a>
            <a href="#contact-us" class="hover:opacity-90">Contact Us</a>
        </nav>
        
        <section class="flex flex-col items-end">
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