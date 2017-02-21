<template>
  <f7-page no-swipeback>
    <f7-navbar>
      <f7-nav-left>
        <f7-nav-left back-link="Back" sliding></f7-nav-left>
      </f7-nav-left>
      <f7-nav-center>Production</f7-nav-center>
      <f7-nav-right></f7-nav-right>
    </f7-navbar>
    <f7-block>
      <f7-list>
        <f7-list-item>
          <f7-icon slot="media" f7="calendar"></f7-icon>
          <f7-input type="date" placeholder="Order Start Date"/>
        </f7-list-item>
        <f7-list-item>
          <f7-icon slot="media" f7="calendar"></f7-icon>
          <f7-input type="date" placeholder="Order End Date"/>
        </f7-list-item>
        <f7-list-item>
          <f7-icon slot="media" f7="compose"></f7-icon>
          <f7-input type="text" placeholder="Quantity"/>
        </f7-list-item>
        <f7-list-item>
          <f7-input type="select">
            <option value="cowmilk">Cow Milk</option>
            <option value="buffalomilk">Buffalo Milk</option>
            <option value="goatmilk">Goat Milk</option>
            <option value="desimilk">Desi Milk</option>
          </f7-input>
        </f7-list-item>
      </f7-list>
    </f7-block>
  </f7-page>
</template>
