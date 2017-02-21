<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left back-link="Back" sliding></f7-nav-left>
      <f7-nav-center>Registration</f7-nav-center>
      <f7-nav-right>
        <!-- <f7-link icon="icon-bars" open-panel="right"></f7-link> -->
      </f7-nav-right>
    </f7-navbar>
    <f7-block-title>Registration Form</f7-block-title>
    <!-- <f7-block> -->
    <f7-card>
      <f7-list form>
        <f7-list-item>
          <f7-label>User Type : </f7-label>
          <f7-input name="type" v-modal="register_data.type" type="select">
            <option value="Dairyfarm">Farmer</option>
            <option value="Retailer">Consumer</option>
          </f7-input>
        </f7-list-item>
        <f7-list-item>
          <!-- <f7-label>First Name</f7-label> -->
          <f7-input name='first_name' v-modal="register_data.first_name" type="text" placeholder="First Name"/>
        </f7-list-item>
        <f7-list-item>
          <f7-input name="last_name" v-modal="register_data.last_name" type="text" placeholder="Last Name"/>
        </f7-list-item>
        <f7-list-item>
          <f7-input name="primary_mobile_number" v-modal="register_data.primary_mobile_number" type="tel" placeholder="Primary Mobile number"/>
        </f7-list-item>
        <f7-list-item>
          <f7-input name="email_id" v-modal="register_data.email_id" type="email" placeholder="Enter email id"/>
        </f7-list-item>
        <f7-list-item>
          <f7-input name="password" v-modal="register_data.password" type="password" placeholder="Password"/>
        </f7-list-item>
        <f7-list-item>
          <f7-input name="confirm_password" v-modal="register_data.confirm_password" type="password" placeholder="Confirm Password"/>
        </f7-list-item>
        <f7-list-item>
        <a href="#" class="link">Have referral code? Click here</a>
        </f7-list-item>
      </f7-list>
    </f7-card>
    <!-- </f7-block> -->
    <f7-block class="registerbutton">
      <f7-button fill v-on:click="register()">Register</f7-button>
    </f7-block>
  </f7-page>
</template>
<script>
export default {
  data () {
    return {
      register_data: {
        "type":"",
        "first_name":"",
        "last_name":"",
        "primary_mobile_number":"",
        "email_id":"",
        "password":"",
        "confirm_password":""
      }
    }
  },
  methods: {
    register () {
      var myApp = new Framework7();
      myApp.alert('Your are successfully registered')
      console.log(this.register_data)
      this.$router.load({url: '/login/'})
    }
  }
}
</script>
<style>
  .registerbutton {
    text-align: center;
  }
</style>
