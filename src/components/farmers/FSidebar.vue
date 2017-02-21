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
          <f7-list-item link='/myfarm/' link-close-panel>
            <f7-icon slot="media" f7="heart"></f7-icon>
            <f7-label floating>My Farm</f7-label>
          </f7-list-item>
          <f7-list-item link='/production/' link-close-panel>
            <f7-icon slot="media" f7="paper_plane_fill"></f7-icon>
            <f7-label floating>Production</f7-label>
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
          <f7-list-item link='/about/' link-view="#welcome-view" link-close-panel>
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
          <f7-list-item link='/about/' link-view="#welcome-view" link-close-panel>
            <f7-icon slot="media" f7="login_fill"></f7-icon>
            <f7-label floating>Log out</f7-label>
          </f7-list-item>
        </f7-list>
      </f7-page>
    </f7-pages>
  </f7-view>
</f7-panel>
