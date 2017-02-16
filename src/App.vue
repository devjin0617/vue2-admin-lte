<template>
  <div id="app">
    <div class="wrapper">
      <Header></Header>
      <Slider></Slider>
      <ContentWrap></ContentWrap>
    </div>
  </div>
</template>

<script>
import Header from 'Header.vue'
import Slider from 'Slider.vue'
import ContentWrap from 'ContentWrap.vue'

export default {
  name: 'app',
  created () {
  },
  components: {
    Header,
    Slider,
    ContentWrap
  }
}
</script>

<style>

</style>
