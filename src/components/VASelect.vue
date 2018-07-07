<template>
  <div v-if="isHorizontal"
    class="form-group"
  >
    <label :for="vaId" class="col-sm-2 control-label">{{ title }}</label>
    <div class="col-sm-10">
      <select class="form-control" :disabled="isDisabled" :multiple="isMultiple">
        <option v-for="(item,index) in list" :data="item" :key="index">
          {{ item }}
        </option>
      </select>
    </div>
  </div>
  <select v-else
    class="form-control" :disabled="isDisabled" :multiple="isMultiple">
    <option v-for="(item,index) in list" :data="item" :key="index">
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
    },
    isHorizontal: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    vaId: {
      type: String
    }
  },
  created () {

  }
}
</script>
