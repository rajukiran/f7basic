import Vue from 'vue'
// import Login from './Login';
// import About from './About';

// Vue.component ('Login', Login); Re usable component has be registered as a component
// component: Vue.component('Login'), All re usable components has to be added in this way

export default [

	{

	  	path: '/login/',
	    component: require('./Login')

	},

	{

	  	path: '/about/',
	    component: require('./About')

	},

	{

	  	path: '/register/',
	    component: require('./Register')

	},

]
