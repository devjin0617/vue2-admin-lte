<template>

  <div v-if="isHorizontal" class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox" />{{ text }}
        </label>
      </div>
    </div>
  </div>
  <div v-else class="checkbox">
    <label>
      <input type="checkbox" :disabled="isDisabled"/>{{ text }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'va-checkbox',
  props: {
    text: {
      type: String,
      default: 'Check me out'
    },
    isHorizontal: {
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
