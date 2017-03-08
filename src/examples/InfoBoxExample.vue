<template>
<div class="row">
  <div class='col-md-3'>
    <info-box
      bgColor='bg-aqua'
      bgIcon='ion ion-ios-gear-outline'
      text='Hello'
      number='8700'
    ></info-box>
  </div>
  <div class='col-md-3'>
    <info-box
      bgColor='bg-red'
      bgIcon='fa fa-google-plus'
      text='LIKES'
      number='232323'
      number-type='percentage'
    ></info-box>
  </div>
  <div class='col-md-3'>
    <info-box
      bgColor='bg-green'
      bgIcon='ion ion-ios-cart-outline'
      text='SALES'
      number='580'
    ></info-box>
  </div>
  <div class='col-md-3'>
    <info-box
      bgColor='bg-yellow'
      bgIcon='ion ion-ios-people-outline'
      text='new members'
      number='580'
      number-type='comma'
    ></info-box>
  </div>
</div>
</template>
<script>
import InfoBox from '../widgets/InfoBox'

export default {
  components: {
    InfoBox
  }
}
</script>
<style lang="css">
</style>
