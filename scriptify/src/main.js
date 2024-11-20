import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Solid 아이콘 패키지
import { far } from '@fortawesome/free-regular-svg-icons'; // Regular 아이콘 패키지
import { fab } from '@fortawesome/free-brands-svg-icons'; // Brands 아이콘 패키지
library.add(fas, far, fab);
const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
