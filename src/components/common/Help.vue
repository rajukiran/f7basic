<template>
	<f7-page>
		<f7-navbar>
		  <f7-nav-left back-link="Back" sliding></f7-nav-left>
		  <f7-nav-center>Help</f7-nav-center>
		  <f7-nav-right>
		    <!-- <f7-link icon="icon-bars" open-panel="right"></f7-link> -->
		  </f7-nav-right>
		</f7-navbar>
    <f7-card>
      <f7-list media-list>
        <f7-list-item>
          <f7-icon slot="media" f7="phone_fill"></f7-icon>
          <f7-label floating>7676 03 5555</f7-label>
        </f7-list-item>
        <f7-list-item>
          <f7-icon slot="media" f7="email_fill"></f7-icon>
          <f7-label floating>help@realmilk.co.in</f7-label>
        </f7-list-item>
        <f7-list-item>
          <a href="https://realmilk.co.in">More Information</a>
        </f7-list-item>
      </f7-list>
    </f7-card>
	</f7-page>
</template>

<script>
	export default {}
</script>
