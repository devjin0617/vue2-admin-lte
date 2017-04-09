<template>
  <textarea
    class="form-control"
    :rows="rowCount"
    :placeholder="placeholder"
    :disabled="isDisabled"
  ></textarea>
</template>

<script>
export default {
  name: 'va-textarea',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    rowCount: {
      type: Number,
      default: 3
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  created () {

  }
}
</script>
