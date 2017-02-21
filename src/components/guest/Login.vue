<template>
	<f7-page login-screen>
		<f7-navbar>
			<f7-nav-left back-link="Back" sliding></f7-nav-left>
			<f7-nav-center>Login</f7-nav-center>
			<f7-nav-right>
				<!-- <f7-link icon="icon-bars" open-panel="right"></f7-link> -->
			</f7-nav-right>
		</f7-navbar>
    <f7-login-screen-title>Realmilk Login</f7-login-screen-title>
    <f7-list form>
      <f7-list-item>
        <f7-label>Username</f7-label>
        <f7-input v-model="login_data.userId" type="text" name="username" placeholder="Enter email id"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Password</f7-label>
        <f7-input v-model="login_data.password" name="password" type="password" placeholder="Password"></f7-input>
      </f7-list-item>
    </f7-list>
    <f7-list>
      <f7-list-button fill v-on:click="login()" title="Sign In"></f7-list-button>
    </f7-list>
  </f7-page>
</template>

<script>

	export default {
	    data() {

	    	return {

		      	login_data:{

					"userId":"",
					"password":"",

		      	}

			}

	    },

	    methods: {
	    	login() {
					console.log(this.login_data)
					let myApp = new Framework7();
					if((this.login_data.userId === '' || this.login_data.userId === null || this.login_data.userId === undefined) ||
							(this.login_data.password === '' || this.login_data.password === null || this.login_data.password === undefined)){
						myApp.confirm('Username or password shoud not empty', 'Realmilk', function () {
				        //Should empty the input field data
				    });
					} else {
						this.$api.post(this, this.$urls.GUEST.login, this.login_data, this.loginCallback);
					}
	    	},
	    	loginCallback(response, router){
					let myApp = new Framework7();
					if(response.data.status){
						this.$auth.setAuth(response.data.key);
						this.$router.load({url: '/welcome/'})
					}else {
						myApp.confirm('Username or password incorrect', 'Realmilk', function () {
							//Should empty the input field data
				    });
					}
	    	},
	    }
	}
</script>
