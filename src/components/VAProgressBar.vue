<template>

  <div class="progress" :class="[progressSize, isVertical?'vertical':'', isActive?'active':'']">
    <div class="progress-bar"
         :class="[`progress-bar-${type}`, (isStriped?'progress-bar-striped':'')]"
         role="progressbar"
         :aria-valuenow="value"
         :aria-valuemin="min"
         :aria-valuemax="max"
         :style="`${isVertical?'height':'width'}: ${value}%`">
      <span class="sr-only">{{text}}</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: ''
    },
    isStriped: {
      type: Boolean,
      default: true
    },
    isActive: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: ''
    },
    isVertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    progressSize () {
      switch (this.size) {
        case 'sm':
        case 'xs':
        case 'xxs':
          break
        case '':
        default:
          return ''
      }

      return 'progress-' + this.size
    }
  },
  created () {

  }
}
</script>

