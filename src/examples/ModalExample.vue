<template lang="html">
  <div class="container">
    <h1>Modal Example</h1>
    <row>
      <div class="col-md-12">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary btn-lg" @click="openModal">
          Launch demo modal
        </button>
      </div>
    </row>
  </div>
</template>

<script>
export default {
  methods: {
    openModal () {
      console.log(this.$bus)
      this.$bus.$emit('modal-open', {
        title: 'Hello',
        description: '내용',
        type: 'modal-primary',
        confirmText: '저장 후 닫기',
        cancelText: '닫기',
        confirmBefore: () => {
          window.alert('저장 후 닫기 이전 훅')
        },
        confirmAfter: () => {
          window.alert('저장 후 닫기 이후 훅')
        },
        cancelBefore: () => {
          window.alert('닫기 이전 훅')
        },
        cancelAfter: () => {
          window.alert('닫기 이후 훅')
        },
        clickOverlay: () => {
          window.alert('오버레이 클릭 훅')
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
.modal-example .modal {
  position: relative;
  top: auto;
  bottom: auto;
  right: auto;
  left: auto;
  display: block;
  z-index: 1;
}
.modal-example .modal {
  background: transparent !important;
}
</style>
