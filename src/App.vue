<template>
  <div id="app">
    <div class="wrapper">
      <NaviBar></NaviBar>
      <Slider :slideMenuItems="slideMenuItems"></Slider>
      <ContentWrap></ContentWrap>
      <Modal></Modal>
    </div>
  </div>
</template>

<script>
import NaviBar from 'NaviBar.vue'
import Slider from 'Slider.vue'
import ContentWrap from 'ContentWrap.vue'
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
    NaviBar,
    Slider,
    ContentWrap,
    Modal
  },
  store
}
</script>

<style>

</style>
