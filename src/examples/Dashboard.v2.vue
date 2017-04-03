<template>
  <div class="dashboard">
    <row>
      <div class="col-lg-3 col-xs-6">
        <va-info-box
          bgColor="bg-aqua"
          bgIcon="ion ion-ios-gear-outline"
          text="CPU TRAFFIC"
          number="90"
          numberType="percentage"
        ></va-info-box>
      </div>
      <div class="col-lg-3 col-xs-6">
        <va-info-box
          bgColor="bg-red"
          bgIcon="fa fa-google-plus"
          text="LIKES"
          number="41,410"
        ></va-info-box>
      </div>
      <div class="col-lg-3 col-xs-6">
        <va-info-box
          bgColor="bg-green"
          bgIcon="ion ion-ios-cart-outline"
          text="SALES"
          number="760"
        ></va-info-box>
      </div>
      <div class="col-lg-3 col-xs-6">
        <va-info-box
          bgColor="bg-yellow"
          bgIcon="ion ion-ios-people-outline"
          text="NEW MEMBERS"
          number="2,000"
        ></va-info-box>
      </div>
    </row>
    <row>
      <div class="col-md-8">
        <row>
          <div class="col-md-6">
            <va-direct-chat
              theme="primary"
              :talkList="[]"
              :contacts="[]"
              title="Direct Chat"
              :badgeCount="3"
            ></va-direct-chat>
          </div>
          <div class="col-md-6">
            <va-user-list></va-user-list>
          </div>
        </row>
      </div>
    </row>
    <row>
      <div class="col-md-4">
        <va-info-box
          wrapBgColor="bg-yellow"
          bgIcon="ion ion-ios-pricetag-outline"
          text="Inventory"
          number="5200"
          :isProgress="true"
          numberType="comma"
          progressDescription="50% Increase in 30 Days"
          :percentage="50"
        ></va-info-box>
        <va-info-box
          wrapBgColor="bg-green"
          bgIcon="ion ion-ios-pricetag-outline"
          text="Mentions"
          number="92050"
          :isProgress="true"
          numberType="comma"
          progressDescription="20% Increase in 30 Days"
          :percentage="20"
        ></va-info-box>
        <va-info-box
          wrapBgColor="bg-red"
          bgIcon="ion ion-ios-pricetag-outline"
          text="Downloads"
          number="114381"
          numberType="comma"
          :isProgress="true"
          progressDescription="70% Increase in 30 Days"
          :percentage="70"
        ></va-info-box>
        <va-info-box
          wrapBgColor="bg-aqua"
          bgIcon="ion ion-ios-pricetag-outline"
          text="Direct Messages"
          number="163921"
          numberType="comma"
          :isProgress="true"
          progressDescription="40% Increase in 30 Days"
          :percentage="40"
        ></va-info-box>
      </div>
    </row>
  </div>
</template>

<script>
import VAInfoBox from '../widgets/VAInfoBox.vue'
import VADirectChat from '../widgets/VADirectChat.vue'
import VAUserList from '../widgets/VAUserList.vue'

export default {
  name: 'DashboardV2',
  created () {

  },
  components: {
    'va-info-box': VAInfoBox,
    'va-direct-chat': VADirectChat,
    'va-user-list': VAUserList
  }
}
</script>
