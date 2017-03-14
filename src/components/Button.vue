<template>
  <button type="button" class="btn btn-block"
    :class="[btnTheme, disabled, flat, size]"
  >{{name}}</button>
</template>

<script>
export default {
  name: 'Button',
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
    }
  }
}
</script>
