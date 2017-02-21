<template>
	<!-- App -->
	<div id="app">

		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>

		<!-- Left Panel -->
		<f7-panel right reveal layout="dark">

			<f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">

				<!-- <f7-navbar title="Right Panel"></f7-navbar> -->

				<f7-pages>

					<f7-page>

						<f7-block inner>
							<p>panel content goes here</p>
						</f7-block>

						<f7-list>

							<f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/login/" title="Login" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/register/" title="Register" link-view="#main-view" link-close-panel></f7-list-item>

						</f7-list>

					</f7-page>

				</f7-pages>

			</f7-view>

		</f7-panel>

		<!-- Right Panel -->
		<f7-panel left reveal layout="white">
			<f7-view id="left-panel-view">
				<f7-pages>
					<f7-page>
						<div class="content-block profile-back" style="background-image:url(http://sonyericssonwallpapers.com/wp-content/uploads/2013/10/477616.jpg)"></div>
						<f7-list>
						  <f7-list-item link='/' link-view="#welcome-view" link-close-panel>
						    <f7-icon slot="media" f7="home"></f7-icon>
						    <f7-label floating>Home</f7-label>
						  </f7-list-item>
							<f7-list-item link='/orders/' link-view="#welcome-view" link-close-panel>
						    <f7-icon slot="media" f7="bolt_round"></f7-icon>
						    <f7-label floating>Orders</f7-label>
						  </f7-list-item>
							<f7-list-item link='/summary/' link-view="#welcome-view" link-close-panel>
						    <f7-icon slot="media" f7="data"></f7-icon>
						    <f7-label floating>Summary</f7-label>
						  </f7-list-item>
							<f7-list-item link='/requests/' title="Requests" link-view="#welcome-view" badge="5" badge-color="red" link-close-panel >
						    <f7-icon slot="media" f7="tabs"></f7-icon>
						    <!-- <f7-label floating>Requests</f7-label> -->
						  </f7-list-item>
							<f7-list-item title="" divider></f7-list-item>
							<f7-list-item link-close-panel v-on:click="referAFriend()">
						    <f7-icon slot="media" f7="persons_fill"></f7-icon>
						    <f7-label floating>Refer A Friend</f7-label>
						  </f7-list-item>
							<f7-list-item link='/profile/' link-view="#welcome-view" link-close-panel>
						    <f7-icon slot="media" f7="persons"></f7-icon>
						    <f7-label floating>Profile</f7-label>
						  </f7-list-item>
							<f7-list-item link='/updatepassword/' link-view="#welcome-view" link-close-panel>
						    <f7-icon slot="media" f7="lock"></f7-icon>
						    <f7-label floating>Change Password</f7-label>
						  </f7-list-item>
							<f7-list-item link-close-panel>
						    <f7-icon slot="media" f7="bell"></f7-icon>
						    <f7-label floating>Notification</f7-label>
								<span><f7-input type="switch"></f7-input></span>
						  </f7-list-item>
							<f7-list-item link='/help/' link-view="#welcome-view" link-close-panel>
						    <f7-icon slot="media" f7="help"></f7-icon>
						    <f7-label floating>Help</f7-label>
						  </f7-list-item>
							<f7-list-item link-view="#welcome-view" v-on:click='userLogout()' link-close-panel>
						    <f7-icon slot="media" f7="login_fill"></f7-icon>
						    <f7-label floating>Log out</f7-label>
						  </f7-list-item>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-panel>

		<!-- Main Views -->
		<f7-views>
			<f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
				<!-- Pages -->
				<f7-pages> <!-- All routes will be rendered here -->
					<f7-page> <!-- Default route view -->
						<!-- Navbar -->
						<f7-navbar>
							<f7-nav-left></f7-nav-left>
							<f7-nav-center sliding>Framework7</f7-nav-center>
							<!-- <f7-nav-right><f7-link icon="icon-bars" open-panel="right"></f7-link></f7-nav-right> -->
							<f7-nav-right></f7-nav-right>
						</f7-navbar>
						<f7-block class="logo_margin">
							<img class="logo" src="https://realmilk.co.in/assets/images/logo-active.png"></img>
						</f7-block>
						<f7-block class="process_margin">
							<img class="process" src="http://128.199.203.43/realmilktheme.png"></img>
						</f7-block>
						<f7-block>
							<f7-grid no-gutter>
								<f7-col width="45"><f7-button fill href="/login/" :animate-pages="false" :ignore-cache="true">Login</f7-button></f7-col>
								<f7-col width="45"><f7-button fill href='/register/' link-view="#main-view">Register</f7-button></f7-col>
							<f7-grid>
						</f7-block>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-views>
	</div>

</template>

<script>

export default {
	data () {
		return {

		}
	},
	methods: {
		created: function created() {
		  //do something after creating vue instance
		  console.log('Working' + this.$auth.checkAuth());
		},
	  referAFriend: function referAFriend() {
			var myApp = new Framework7();
			myApp.prompt('Enter the mobile number', 'Refer A Friend',
      function (value) {
        myApp.alert('Your name is "' + value + '". You clicked Ok button');
      },
      function (value) {
        myApp.alert('Your name is "' + value + '". You clicked Cancel button');
      });
	  },
		userLogout: function userLogout() {
			this.$auth.logout();
			console.log('You are successfully logged out')
		}
	}
}
</script>
<style>
	.profile-back{
		margin-top: 0px;
		/*margin-bottom: 1px;*/
		height: 150px;
		background-position: center;
	}
	.farmer {
		height: 20vw;
		width: 20vw;
		background-size: cover;
		border-radius: 50%;
		/*background-position: center;*/
	}
	.logo {
		width: 200px;
	}
	.process {
		width: 350px;
	}
	.logo_margin {
		text-align: center;
	}
	.process_margin {
		text-align: center;
	}

</style>
