<template>
  <div class="radio">
    <label>
      <input type="radio" :name="name" :id="vaId" :value="value" :checked="isChecked" :disabled="isDisabled">
        <slot></slot>
    </label>
  </div>
</template>
<script>
export default {
  name: 'va-radio',
  props: {
    vaId: {
      type: String
    },
    name: {
      type: String
    },
    value: {
      type: String
    },
    isChecked: {
      type: Boolean,
      default: false
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
