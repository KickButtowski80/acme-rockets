import {  createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ThemeBtn from './components/ThemeBtn.vue'
import TitleScection from './components/TitleSection.vue'
const app = createApp(App)
app.component('ThemeBtn',ThemeBtn)
app.component('TitleSction',TitleScection)
app.mount('#app')
