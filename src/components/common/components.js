import Vue from 'vue'
// import Login from './Login';
// import About from './About';

// Vue.component ('Login', Login); Re usable component has be registered as a component
// component: Vue.component('Login'), All re usable components has to be added in this way

export default [
	{
	  	path: '/card/',
	    component: require('./Card')
	},
	{
	  	path: '/help/',
	    component: require('./Help')
	},
	{
	  	path: '/updatepassword/',
	    component: require('./UpdatePassword')
	},
	{
	  	path: '/requests/',
	    component: require('./Requests')
	},
	{
	  	path: '/profile/',
	    component: require('./Profile')
	}
]
