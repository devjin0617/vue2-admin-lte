<template>
  <div id="app">
    <div class="wrapper">
      <NaviBar></NaviBar>
      <Slider></Slider>
      <ContentWrap></ContentWrap>
    </div>
  </div>
</template>

<script>
import NaviBar from 'NaviBar.vue'
import Slider from 'Slider.vue'
import ContentWrap from 'ContentWrap.vue'

export default {
  name: 'app',
  created () {
  },
  components: {
    NaviBar,
    Slider,
    ContentWrap
  }
}
</script>

<style>

</style>
