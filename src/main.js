import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue3 from 'bootstrap-vue-3'
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import 'primevue/resources/themes/saga-blue/theme.css'; // Theme
import 'primevue/resources/primevue.min.css';           // Core styles
import 'primevue/resources/themes/aura-light-green/theme.css'

const app = createApp(App)
app.use(PrimeVue);
app.use(ConfirmationService);
app.use(ToastService);
app.use(BootstrapVue3)
app.mount('#app')


