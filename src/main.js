import { createApp } from 'vue'
import App from './App.vue'

import plugin from 'vue3-solid'

createApp(App)
.use(plugin)
.mount('#app')
