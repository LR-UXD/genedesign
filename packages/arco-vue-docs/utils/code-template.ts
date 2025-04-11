export const mainContent = `import { createApp } from 'vue';
import ArcoVue from 'genedesign';
import App from './App.vue';
import 'genedesign/dist/arco.css';
import './style.css';

const app = createApp(App);
app.use(ArcoVue);
app.mount('#app');`;

export const styleContent = `#app { padding: 20px; }`;
