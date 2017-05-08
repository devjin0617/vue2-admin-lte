<template>
  <div id="app">
    <div class="wrapper">
      <va-navibar></va-navibar>
      <va-slider :slideMenuItems="slideMenuItems"></va-slider>
      <va-content-wrap></va-content-wrap>
      <Modal></Modal>
    </div>
  </div>
</template>

<script>
import VANaviBar from 'NaviBar.vue'
import VASlider from 'Slider.vue'
import VAContentWrap from 'ContentWrap.vue'
import Modal from './components/Modal.vue'
import store from './vuex/store.js'
import slideMenuItems from './lib/slideMenuItems.js'

export default {
  name: 'app',
  data () {
    return {
      slideMenuItems: slideMenuItems
    }
  },
  created () {
  },
  components: {
    'va-navibar': VANaviBar,
    'va-slider': VASlider,
    'va-content-wrap': VAContentWrap,
    Modal
  },
  store
}
</script>

<style>

</style>
