import { createApp } from './app'

// import PolygonDemo from './components/PolygonDemo.vue';

// client-specific bootstrapping logic...

const { app } = createApp()

// this assumes App.vue template root element has `id="app"`
app.$mount('#app')
