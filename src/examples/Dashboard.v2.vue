<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-lg-3 col-xs-6">
        <InfoBox
          bgColor="bg-aqua"
          bgIcon="ion ion-ios-gear-outline"
          text="CPU TRAFFIC"
          number="90"
          numberType="percentage"
        ></InfoBox>
      </div>
      <div class="col-lg-3 col-xs-6">
        <InfoBox
          bgColor="bg-red"
          bgIcon="fa fa-google-plus"
          text="LIKES"
          number="41,410"
        ></InfoBox>
      </div>
      <div class="col-lg-3 col-xs-6">
        <InfoBox
          bgColor="bg-green"
          bgIcon="ion ion-ios-cart-outline"
          text="SALES"
          number="760"
        ></InfoBox>
      </div>
      <div class="col-lg-3 col-xs-6">
        <InfoBox
          bgColor="bg-yellow"
          bgIcon="ion ion-ios-people-outline"
          text="NEW MEMBERS"
          number="2,000"
        ></InfoBox>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-6">
            <DirectChat
              theme="primary"
              :talkList="[]"
              :contacts="[]"
              title="Direct Chat"
              :badgeCount="3"
            ></DirectChat>
          </div>
          <div class="col-md-6">
            <UserList></UserList>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <InfoBox
          wrapBgColor="bg-yellow"
          bgIcon="ion ion-ios-pricetag-outline"
          text="Inventory"
          number="5200"
          :isProgress="true"
          numberType="comma"
          progressDescription="50% Increase in 30 Days"
          :percentage="50"
        ></InfoBox>
        <InfoBox
          wrapBgColor="bg-green"
          bgIcon="ion ion-ios-pricetag-outline"
          text="Mentions"
          number="92050"
          :isProgress="true"
          numberType="comma"
          progressDescription="20% Increase in 30 Days"
          :percentage="20"
        ></InfoBox>
        <InfoBox
          wrapBgColor="bg-red"
          bgIcon="ion ion-ios-pricetag-outline"
          text="Downloads"
          number="114381"
          numberType="comma"
          :isProgress="true"
          progressDescription="70% Increase in 30 Days"
          :percentage="70"
        ></InfoBox>
        <InfoBox
          wrapBgColor="bg-aqua"
          bgIcon="ion ion-ios-pricetag-outline"
          text="Direct Messages"
          number="163921"
          numberType="comma"
          :isProgress="true"
          progressDescription="40% Increase in 30 Days"
          :percentage="40"
        ></InfoBox>
      </div>
    </div>
  </div>
</template>

<script>
import InfoBox from '../widgets/InfoBox.vue'
import DirectChat from '../widgets/DirectChat.vue'
import UserList from '../widgets/UserList.vue'

export default {
  name: 'DashboardV2',
  created () {

  },
  components: {
    InfoBox,
    DirectChat,
    UserList
  }
}
</script>
