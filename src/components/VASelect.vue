<template>
  <select class="form-control" :disabled="isDisabled" :multiple="isMultiple">
    <option v-for="item in list">
      {{ item }}
    </option>
  </select>
</template>
<script>
export default {
  name: 'va-select',
  props: {
    list: {
      type: Array,
      default: []
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isMultiple: {
      type: Boolean,
      default: false
    }
  },
  created () {

  }
}
</script>
