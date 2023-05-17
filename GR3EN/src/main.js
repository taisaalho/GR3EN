import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
	components,
	directives,
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
		  mdi,
		}
	},
});

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(vuetify).mount('#app');


if ("serviceWorker" in navigator) {
	window.addEventListener("load", function() {
	  navigator.serviceWorker
		.register("/serviceWorker.js")
		.then(res => console.log("service worker registered"))
		.catch(err => console.log("service worker not registered", err));
	});
  }
  