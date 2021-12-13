import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// @ts-ignore
import './styles.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAugbFK7R-IVMq3e_L7VKfO-SJp0wigxao",
  authDomain: "congratulator.firebaseapp.com",
  projectId: "congratulator",
  storageBucket: "congratulator.appspot.com",
  messagingSenderId: "941042919469",
  appId: "1:941042919469:web:e21eef1c5a3e57768cb0a4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
