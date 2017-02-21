<template>
	<f7-page>
		<f7-navbar>
		  <f7-nav-left back-link="Back" sliding></f7-nav-left>
		  <f7-nav-center>Update Password</f7-nav-center>
		  <f7-nav-right>
		    <!-- <f7-link icon="icon-bars" open-panel="right"></f7-link> -->
		  </f7-nav-right>
		</f7-navbar>
    <f7-block></f7-block>
    <f7-card>
      <f7-list form>
        <f7-list-item>
          <!-- <f7-label>Username</f7-label> -->
          <f7-input name="mobile" type="tel" placeholder="Enter registered mobile number"></f7-input>
        </f7-list-item>
        <f7-list-item>
          <!-- <f7-label>Password</f7-label> -->
          <f7-input name="email" type="email" placeholder="Enter email id"></f7-input>
        </f7-list-item>
      </f7-list>
    </f7-card>
    <f7-block>
      <f7-button fill round color="green">Update</f7-button>
    </f7-block>
	</f7-page>
</template>

<script>
	export default {}
</script>
