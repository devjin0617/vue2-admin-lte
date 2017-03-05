<template lang="html">
  <div class="container">
    <h1>Modal Example</h1>
    <div class="row">
      <div class="col-md-12 modal-example">
        <Modal title="Default Modal" description="One Find Body...">
          <div slot="modal-buttons">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </Modal>
      </div>
      <div class="col-md-12 modal-example">
        <Modal type="modal-primary" title="Primary Modal" description="One Find Body...">
          <div slot="modal-buttons">
            <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-outline">Save changes</button>
          </div>
        </Modal>
      </div>
      <div class="col-md-12 modal-example">
        <Modal type="modal-info" title="Info Modal" description="One Find Body...">
          <div slot="modal-buttons">
            <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-outline">Save changes</button>
          </div>
        </Modal>
      </div>
      <div class="col-md-12 modal-example">
        <Modal type="modal-warning" title="Warning Modal" description="One Find Body...">
          <div slot="modal-buttons">
            <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-outline">Save changes</button>
          </div>
        </Modal>
      </div>
      <div class="col-md-12 modal-example">
        <Modal type="modal-success" title="Success Modal" description="One Find Body...">
          <div slot="modal-buttons">
            <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-outline">Save changes</button>
          </div>
        </Modal>
      </div>
      <div class="col-md-12 modal-example">
        <Modal type="modal-danger" title="Danger Modal" description="One Find Body...">
          <div slot="modal-buttons">
            <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-outline">Save changes</button>
          </div>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '../components/Modal'

export default {
  components: {
    Modal
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
