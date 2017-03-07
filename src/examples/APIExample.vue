<template lang="html">
  <div class="">
    <h1>Hello</h1>
    {{totalProduct}}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created () {
    this.fetchProduct()
  },
  computed: {
    ...mapGetters([
      'totalProduct'
    ])
  },
  methods: {
    ...mapActions([
      'fetchProduct'
    ])
  }
}
</script>

<style lang="css">
</style>
