<template>
	<f7-page>
		<f7-navbar>
		  <f7-nav-left back-link="Back" sliding></f7-nav-left>
		  <f7-nav-center>Requests</f7-nav-center>
		  <f7-nav-right>
		    <!-- <f7-link icon="icon-bars" open-panel="right"></f7-link> -->
		  </f7-nav-right>
      <f7-subnavbar sliding>
        <f7-buttons>
          <f7-button tab-link="#tab1" active>Sent</f7-button>
          <f7-button tab-link="#tab2">Receive</f7-button>
        </f7-buttons>
      </f7-subnavbar>
		</f7-navbar>
    <f7-block>
      <f7-tabs swipeable>
        <f7-tab id="tab1" active>
          <f7-block>
            <f7-timeline sides>
              <f7-timeline-item side="right" day="21" month="DEC" inner content="Some text goes here"></f7-timeline-item>
              <f7-timeline-item side="left" day="23" month="DEC" inner content="Just plain text"></f7-timeline-item>
            </f7-timeline>
          </f7-block>
        </f7-tab>
        <f7-tab id="tab2">
          <f7-block>Tab 2 content...</f7-block>
        </f7-tab>
      </f7-tabs>
    </f7-block>
	</f7-page>
</template>

<script>
	export default {

  }
</script>
