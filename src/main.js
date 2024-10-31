import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import { router} from './routes/routes'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const pinia = createPinia()
const app = createApp(App)
pinia.use(piniaPluginPersistedstate)

app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })

app.use(pinia)
app.use(router)

app.mount('#app')
