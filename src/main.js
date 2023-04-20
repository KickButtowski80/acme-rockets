import {  createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ThemeBtn from './components/ThemeBtn.vue'

const app = createApp(App)
app.component('ThemeBtn',ThemeBtn)
app.mount('#app')
