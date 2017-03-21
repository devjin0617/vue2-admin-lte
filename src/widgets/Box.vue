<template>
  <div class="box" :class="[theme, this.isOpen?'':'collapsed-box', isBorder?'box-solid':'']">
    <div class="box-header" :class="isBorder?'with-border':''">
      <h3 class="box-title">{{ title }}</h3>

      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool" :data-widget="widgetType"><i :class="btnIcon"></i>
        </button>
      </div>
      <!-- /.box-tools -->
    </div>
    <!-- /.box-header -->
    <div class="box-body">
      <slot name="content"></slot>
    </div>
    <!-- /.box-body -->

    <div v-if="this.isLoading" class="overlay">
      <i class="fa fa-refresh fa-spin"></i>
    </div>
  </div>
  <!-- /.box -->
</template>

<script>
export default {
  name: 'Box',
  props: {
    widgetType: {
      type: String,
      default: 'collapse'
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    theme: {
      type: String
    },
    isOpen: {
      type: Boolean,
      default: true
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isBorder: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnIcon () {
      if (this.widgetType === 'collapse') {
        return this.isOpen ? 'fa fa-minus' : 'fa fa-plus'
      } else if (this.widgetType === 'remove') {
        return 'fa fa-times'
      }
      return ''
    }
  },
  created () {

  }
}
</script>
