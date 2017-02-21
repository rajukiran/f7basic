import Vue from 'vue'
// import Login from './Login';
// import About from './About';

// Vue.component ('Login', Login); Re usable component has be registered as a component
// component: Vue.component('Login'), All re usable components has to be added in this way

export default [

	{
	  	path: '/welcome/',
	    component: require('./Welcome')
	},
	{
	  	path: '/fsidebar/',
	    component: require('./FSidebar')
	},
	{
	  	path: '/orders/',
	    component: require('./Orders')
	},
	{
	  	path: '/summary/',
	    component: require('./Summary')
	},
	{
	  	path: '/production/',
	    component: require('./Production')
	},
	{
	  	path: '/myfarm/',
	    component: require('./MyFarm')
	}
]
