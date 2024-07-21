import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import './style.css';
import App from '@/App.vue';

import HomeView from '@/views/HomeView.vue';
import SettingsView from '@/views/SettingsView.vue';
import TrackerView from '@/views/TrackerView.vue';

const pinia = createPinia()
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '', component: TrackerView },
        { path: '/home', component: HomeView },
        { path: '/settings', component: SettingsView },
    ]
})

createApp(App).use(router).use(pinia).mount('#app')
