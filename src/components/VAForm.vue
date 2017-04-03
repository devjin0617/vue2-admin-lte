<template>
  <div class="form-group">
    <label :for="vaId">{{ title }}</label>
      <va-input
          :type="type"
          :vaId="vaId"
          :placeholder="placeholder"
          :size="size"
          :value="value"
          :isFormControl="type!='file'"
      ></va-input>
      <p v-show="helpBlock" class="help-block">{{ helpBlock }}</p>
  </div>
</template>

<script>
import VAInput from './VAInput'
export default {
  name: 'va-form',
  props: {
    title: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    vaId: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'Enter Text...'
    },
    size: {
      type: String
    },
    value: {
      type: String
    },
    helpBlock: {
      type: String
    }
  },
  created () {

  },
  components: {
    'va-input': VAInput
  }
}
</script>
