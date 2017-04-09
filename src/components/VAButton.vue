<template>
  <button type="button" class="btn"
    :class="[isBlock?'btn-block':'', btnTheme, disabled, flat, size, getAlign]"
  >
    {{name}}
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'va-button',
  props: {
    name: {
      type: String,
      default: 'Button'
    },
    theme: {
      type: String,
      default: 'default'
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isFlat: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    isBlock: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: ''
    }
  },
  created () {

  },
  computed: {
    btnTheme () {
      return `btn-${this.theme}`
    },
    disabled () {
      return this.isDisabled ? 'disabled' : ''
    },
    flat () {
      return this.isFlat ? 'btn-flat' : ''
    },
    getAlign () {
      switch (this.align) {
        case 'left':
        case 'right':
          break
        default:
          return ''
      }

      return 'pull-' + this.align
    }
  }
}
</script>
