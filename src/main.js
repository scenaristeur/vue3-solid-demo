import { createApp } from 'vue'
import App from './App.vue'

import Vue3Solid from 'vue3-solid'
import store from './store'

createApp(App).use(store)
.use(Vue3Solid, {store: store})
.mount('#app')
