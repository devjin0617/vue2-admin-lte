<template>

  <input :type="type"
         :class="[formControl, getSize]"
         :id="vaId"
         :placeholder="placeholder"
         :value="value">
  </input>

</template>

<script>
export default {
  name: 'va-input',
  props: {
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
    isFormControl: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    getSize () {
      if (!this.size) {
        return ''
      }

      return 'input-' + this.size
    },
    formControl () {
      return this.isFormControl ? 'form-control' : ''
    }
  },
  created () {

  }
}
</script>
