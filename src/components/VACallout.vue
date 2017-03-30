<template>
  <div class="callout" :class="classObject">
    <h4>{{ title }}</h4>

    <p>{{ text }}</p>
  </div>
</template>

<script>
const CalloutTypes = ['success', 'info', 'warning', 'danger']
export default {
  name: 'va-callout',
  props: {
    type: {
      default: 'success',
      validator: function (value) {
        return CalloutTypes.includes(value)
      }
    },
    title: {
      type: String
    },
    text: {
      type: String
    }
  },
  computed: {
    classObject () {
      return {
        'callout-success': this.type === 'success',
        'callout-info': this.type === 'info',
        'callout-warning': this.type === 'warning',
        'callout-danger': this.type === 'danger'
      }
    }
  }
}
</script>
