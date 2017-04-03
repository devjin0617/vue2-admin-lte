<template>
  <div class="checkbox">
    <label>
      <input type="checkbox" />{{ text }}
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
    }
  },
  created () {

  }
}
</script>
