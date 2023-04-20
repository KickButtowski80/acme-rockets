<template lang="">    
    <button 
    @click='toggleTheme'
    >
    {{ themeStatus }}
    </button>    
</template>
<script>
export default {
    data() {
        return {
            themeStatus: 'light'
        }
    },
    mounted() {
        localStorage.theme = 'dark'

    },
    methods: {
        toggleTheme() {
            if (this.themeStatus === 'dark' || (!('theme' in localStorage)
            && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.remove('dark')
                this.themeStatus = 'light'
                localStorage.theme = 'light'
            } else {
                document.documentElement.classList.add('dark')
                this.themeStatus = 'dark'
                localStorage.theme = 'dark'
               
            }
       
           
        }
    }
}
</script>
