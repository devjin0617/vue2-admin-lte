<template>
  <div class="form-group">
    <label>{{ title }}</label>
    <va-textarea
      :rowCount="rowCount"
      :placeholder="placeholder"
      :isDisabled="isDisabled"
    ></va-textarea>
  </div>
</template>

<script>
import VATextarea from './VATextarea'

export default {
  name: 'va-textarea-group',
  props: {
    title: {
      type: String,
      default: 'Textarea'
    },
    rowCount: {
      type: Number,
      default: 3
    },
    placeholder: {
      type: String,
      defualt: ''
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  created () {

  },
  components: {
    'va-textarea': VATextarea
  }
}
</script>
