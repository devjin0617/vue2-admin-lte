<template>
  <div class="alert" v-bind:class="classObject">
    <button type="button" data-dismiss="alert" aria-hidden="true" class="close" v-if="dismissible">×</button>
    <slot name="header"></slot>
    <slot name="body"></slot>
  </div>
</template>
<script>
const AlertTypes = ['success', 'info', 'warning', 'danger']
export default {
  name: 'va-alert',
  props: {
    type: {
      default: 'success',
      validator: function (value) {
        return AlertTypes.includes(value)
      }
    },
    dismissible: {
      default: false
    }
  },
  computed: {
    classObject () {
      return {
        'alert-success': this.type === 'success',
        'alert-info': this.type === 'info',
        'alert-warning': this.type === 'warning',
        'alert-danger': this.type === 'danger',
        'alert-dissmissible': this.dismissible
      }
    }
  }
}
</script>
<style lang="css">
</style>
