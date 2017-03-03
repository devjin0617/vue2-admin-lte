<template>
  <div class="info-box">
    <span class="info-box-icon" v-bind:class="bgColor">
      <i v-bind:class="bgIcon"></i>
    </span>
    <div class="info-box-content">
      <span class="info-box-text">{{text}}</span>
      <span class="info-box-number">{{parseNumber}}</span>
    </div>
  </div>
</template>

<script>
// TODO: move to CONSTANT
  export default {
    name: 'InfoBox',
    props: {
      'bgColor': {
        type: String
      },
      'bgIcon': {
        type: String
      },
      'text': {
        type: String,
        required: true
      },
      'number': {
        type: String,
        default: 0
      },
      'number-type': {
        type: String
      }
    },
    computed: {
      parseNumber () {
        let result = this.number
        // FIXME: using constant
        switch (this.numberType) {
          case 'percentage':
            result += '%'
            break
          case 'comma':
            result = Number(result).toLocaleString('en')
            break
          default:
            break
        }
        return result
      }
    }
  }
</script>

<style lang="">

</style>
