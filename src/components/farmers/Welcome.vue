<template>
<!-- <f7-view id="welcome-view"> -->
  <f7-page id="welcome-view">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon="icon-bars" open-panel="left"></f7-link>
      </f7-nav-left>
      <f7-nav-center>Welcome</f7-nav-center>
      <f7-nav-right>
        <f7-input type="select">
          <option value="5">5</option>
          <option value="10">10</option>
        </f7-input>
      </f7-nav-right>
    </f7-navbar>
    <div class="card demo-card-header-pic">
        <a href="profile.html" class="item-link item-content">
        <div style="background-image:url(http://www.amharicdrama.com/wp-content/uploads/2015/06/india.jpg)" valign="bottom" class="card-header color-white no-border"></div>
      </a>
        <div class="card-content">
          <div class="card-content-inner">
            <p class="color-gray">{{card_data.name}}</p>
            <p>{{card_data.address}}</p>
          </div>
        </div>
        <div class="card-footer">
          <a href="#" class="link">Like</a>
          <a href="#" class="link">Read more</a>
        </div>
      </div>
      <div class="card demo-card-header-pic">
          <a href="profile.html" class="item-link item-content">
          <div style="background-image:url(https://c1.staticflickr.com/9/8218/8332006589_4c985e60ba_b.jpg)" valign="bottom" class="card-header color-white no-border"></div>
        </a>
          <div class="card-content">
            <div class="card-content-inner">
              <p class="color-gray">{{card_data.name}}</p>
              <p>{{card_data.address}}</p>
            </div>
          </div>
          <div class="card-footer">
            <a href="#" class="link">Like</a>
            <a href="#" class="link">Read more</a>
          </div>
        </div>
      <f7-fab color="pink" v-on:click="doSomething()">
        <f7-icon icon="icon-plus"></f7-icon>
      </f7-fab>
  </f7-page>
<!-- </f7-view> -->

</template>
<script>
// import card from './common/Card.vue'
export default {
  data () {
    return {
      card_data: {
        'name': 'Kiran Raju',
        'address': 'D.No : 11-764,'
      }
    }
  },
  methods: {
    doSomething: function doSomething() {
      f7.alert('This button is for placing order');
    }
  }
}
</script>
<style>
  .demo-card-header-pic .card-header {
          height: 40vw;
          background-size: cover;
          background-position: center;
        }
</style>
