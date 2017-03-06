<template lang="html">
  <div class="modal" :class="type">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <h4 class="modal-title">
            {{title}}
          </h4>
        </div>
        <div class="modal-body">
          {{description}}
        </div>
        <div class="modal-footer">
          <slot name="modal-buttons">
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const ModalTypes = ['modal-primary', 'modal-success', 'modal-info', 'modal-warning', 'modal-danger']
export default {
  props: {
    'type': {
      type: String,
      default: '',
      validator (value) {
        return ModalTypes.includes(value)
      }
    },
    'title': {
      type: String,
      required: true
    },
    'description': {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css">
</style>
