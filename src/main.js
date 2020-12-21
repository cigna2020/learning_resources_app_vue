import {createApp} from 'vue';
import App from './App';

import BaseCard from './components/UI/BaseCard'
import BaseButtton from './components/UI/BaseButtton';


const app = createApp(App);
app.component('BaseCard', BaseCard)
app.component('BaseButton', BaseButtton)

app.mount('#app')