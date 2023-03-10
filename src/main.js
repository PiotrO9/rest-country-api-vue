import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import cors from 'cors';
library.add(fas)

createApp(App)
.component('fa', FontAwesomeIcon)
.use(router)
.use(cors)
.mount('#app')
