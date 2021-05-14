import { createApp } from 'vue'
import App from './App.vue'
import Triangle from './components/Triangle.vue'
import Heart from './components/Heart.vue'
import Hexagon from './components/Hexagon.vue'
import Diamond from './components/Diamond.vue'
import Star from './components/Star.vue'
import Shape from './components/Shape.vue'

const app = createApp(App);
app.component('Triangle', Triangle);
app.component('Heart', Heart);
app.component('Diamond', Diamond);
app.component('Hexagon', Hexagon);
app.component('Star', Star);
app.component('Shape', Shape);
app.mount('#app');
