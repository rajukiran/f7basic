<template>
  <f7-page no-swipeback>
    <f7-navbar>
      <f7-nav-left>
        <f7-nav-left back-link="Back" sliding></f7-nav-left>
      </f7-nav-left>
      <f7-nav-center>Summary</f7-nav-center>
      <f7-nav-right></f7-nav-right>
    </f7-navbar>
    <f7-block>
      <table>
        <tr>
          <th>Order Id</th>
          <th>Dairyfarm Name</th>
          <th>Milk Type</th>
          <th>Delivery Date</th>
          <th>Delivery time</th>
          <th>Quantity(Lts)</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Molananti Farm</td>
          <td>Buffalo Milk</td>
          <td>10-Feb-2017</td>
          <td>07:40 pm</td>
          <td>2</td>
          <td>120</td>
          <td>Delivered</td>
          <td>
            <f7-popover>
              Hi
            </f7-popover>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Molananti Farm</td>
          <td>Buffalo Milk</td>
          <td>11-Feb-2017</td>
          <td>07:40 pm</td>
          <td>2</td>
          <td>120</td>
          <td>Delivered</td>
          <td><a href="#" data-popover=".popover-links-orders" class="link open-popover"><i class="f7-icons size-50">settings</i></a></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Molananti Farm</td>
          <td>Buffalo Milk</td>
          <td>12-Feb-2017</td>
          <td>07:40 pm</td>
          <td>2</td>
          <td>120</td>
          <td>Delivered</td>
          <td><a href="#" data-popover=".popover-links-orders" class="link open-popover"><i class="f7-icons size-50">settings</i></a></td>
        </tr>
      </table>
    </f7-block>

      <f7-card>
    <f7-list media-list>
        <f7-list-item
          link="/item/"
          media="<img class='list-img' src='http://www.weirdomatic.com/wp-content/pictures/2012/02/Cute-animal-pictures_16.jpg'>"
          title="Molabanti Farm"
          subtitle="Time: 12:00 PM"
          text="Status : Delivered"
          after="₹120"
        ></f7-list-item>
        <f7-list-item
          link="/item/"
          media="<img class='list-img' src='http://www.weirdomatic.com/wp-content/pictures/2012/02/Cute-animal-pictures_16.jpg'>"
          title="Molabanti Farm"
          subtitle="Time: 12:00 PM"
          text="Status : Delivered"
          after="₹120"
        ></f7-list-item>
        <f7-list-item
          link="/item/"
          media="<img class='list-img' src='http://www.weirdomatic.com/wp-content/pictures/2012/02/Cute-animal-pictures_16.jpg'>"
          title="Molabanti Farm"
          subtitle="Date: 21-05-2012 <br> Time: 12:00 PM"
          text="Status : Delivered"
          after="₹120"
        ></f7-list-item>
      </f7-card>

  </f7-list>
  </f7-page>
</template>
<script>
</script>
<style>
  .list-img {
    width:70px;
    border-radius: 50px;
  }
</style>
