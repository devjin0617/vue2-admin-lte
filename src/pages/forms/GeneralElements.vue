<template>
  <div class="row">
    <div class="col-md-6">

      <va-box
          title="Quick Example"
          theme="box-primary"
          widgetType="">

          <div slot="content">

          </div>
      </va-box>

    </div>
  </div>
</template>

<script>
import VABox from '../../widgets/VABox'

export default {
  name: 'general-elements',
  created () {

  },
  components: {
    'va-box': VABox
  }
}
</script>
