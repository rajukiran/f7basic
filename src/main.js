// Import Vue
import Vue from 'vue'
import Vuex from 'vuex'
// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import Vee vue Plugin
import VeeValidate from 'vee-validate';

// Import F7 Icons Plugin
import Framewor7Icons from 'framework7-icons/css/framework7-icons.css'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
 import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
 import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
 */

import auth from './store/authentication.js';
import api from './store/api'
import urls from './urls.js';
import store from './store/store.js'
import './interceptors.js';

// Import Routes
import routes from './components/routes.js';

// Import App Component
import App from './components/App.vue'

// Init F7 Vue Plugin
Vue.use(Framework7Vue)

// Init Vee Vue Plugin
Vue.use(VeeValidate)

Vue.prototype.$auth = auth;
Vue.prototype.$urls = urls;
Vue.prototype.$api = api;

// Init App
new Vue({
	el: '#app',
	template: '<app/>',
	// Init Framework7 by passing parameters here
	framework7: {
		root: '#app',
		/* Uncomment to enable Material theme: */
		material: true,
		swipePanel: 'left',
		routes
	},
	//myApp

	// Register App Component
	components: {
		app: App,
		// router,
		store,
		Vuex
	}
})

if(auth.checkAuth()){
	// var myApp = new Framework7();
	// f7.alert('User is already logged in');
	// myApp.loginScreen();
	// $router.load({url: '/welcome/'});
}
