<template lang="">    
    <button 
    class="!text-2xl md:text-4xl"
    @click='toggleTheme'
    >
    {{ themeStatus }}
    </button>    
</template>
<script>
export default {
    data() {
        return {
            themeStatus: '☀️'
        }
    },
    mounted() {
        localStorage.theme = 'dark'
    },
    methods: {
        toggleTheme() {
            if (this.themeStatus === '🌙' || (!('theme' in localStorage)
            && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.remove('dark')
                this.themeStatus = '☀️'
                localStorage.theme = 'light'
            } else {
                document.documentElement.classList.add('dark')
                this.themeStatus = '🌙'
                localStorage.theme = 'dark'               
            }       
           
        }
    }
}
</script>
