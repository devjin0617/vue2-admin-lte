<template>
<row>
  <div class='col-md-3'>
    <va-info-box
      bgColor='bg-aqua'
      bgIcon='ion ion-ios-gear-outline'
      text='Hello'
      number='8700'
    ></va-info-box>
  </div>
  <div class='col-md-3'>
    <va-info-box
      bgColor='bg-red'
      bgIcon='fa fa-google-plus'
      text='LIKES'
      number='232323'
      number-type='percentage'
    ></va-info-box>
  </div>
  <div class='col-md-3'>
    <va-info-box
      bgColor='bg-green'
      bgIcon='ion ion-ios-cart-outline'
      text='SALES'
      number='580'
    ></va-info-box>
  </div>
  <div class='col-md-3'>
    <va-info-box
      bgColor='bg-yellow'
      bgIcon='ion ion-ios-people-outline'
      text='new members'
      number='580'
      number-type='comma'
    ></va-info-box>
  </div>
</row>
</template>
<script>
import VAInfoBox from '../widgets/VAInfoBox'

export default {
  components: {
    'va-info-box': VAInfoBox
  }
}
</script>
<style lang="css">
</style>
