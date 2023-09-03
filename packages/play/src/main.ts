import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HZ_UI from '@hz-ui/components'

const app = createApp(App)

app.use(HZ_UI)

app.mount('#app')
