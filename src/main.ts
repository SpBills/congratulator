import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// @ts-ignore
import VueConfetti from 'vue-confetti'
import './styles.css'

createApp(App).use(router).mount('#app')
