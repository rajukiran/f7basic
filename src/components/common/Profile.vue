<template>
	<f7-page>
		<f7-navbar>
		  <f7-nav-left back-link="Back" sliding></f7-nav-left>
		  <f7-nav-center>Profile</f7-nav-center>
		  <f7-nav-right>
		    <!-- <f7-link icon="icon-bars" open-panel="right"></f7-link> -->
		  </f7-nav-right>
		</f7-navbar>
    <f7-block class="profile_image">
      <img class="profile_update" src='http://www.weirdomatic.com/wp-content/pictures/2012/02/Cute-animal-pictures_16.jpg'></img>
      <br />
      <a class="button file-button" width="50px"><f7-input type="file">Upload a File</f7-input></a>
    </f7-block>
    <f7-card>
    <f7-list form>
      <!-- Text Input -->
      <f7-list-item>
        <f7-input type="text" placeholder="Name of(Hotel/Hospital/Hostel/Home/Bakery)"/>
      </f7-list-item>
      <f7-list-item>
        <f7-input type="text" placeholder="First Name"/>
      </f7-list-item>
      <f7-list-item>
        <f7-input type="text" placeholder="Last Name"/>
      </f7-list-item>
      <f7-list-item>
        <f7-input type="tel" placeholder="Mobile Number"/>
      </f7-list-item>
      <f7-list-item>
        <f7-input type="select">
          <option value="andhrapradesh">Andhra Pradesh</option>
          <option value="telangana">Telangana</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-input type="select">
          <option value="guntur">Guntur</option>
          <option value="krishna">Krishna</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-input type="select">
          <option value="vijayawada">Vijayawada</option>
          <option value="mangalagiri">Mangalagiri</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-input type="textarea" placeholder="Address"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-input type="email" placeholder="Enter email id"></f7-input>
      </f7-list-item>
    </f7-list>
  </f7-card>
    <f7-block>
      <f7-button fill>Update</f7-button>
    </f7-block>
	</f7-page>
</template>

<script>
	export default {

  }
</script>
<style>
  .profile_update {
    border-radius: 50%;
    width: 200px;
  }
  .profile_image {
    text-align: center;
  }
</style>
