<template>
  <div class="container">
    <div class="box">
      <div class="box-header">
        <h2>Normal Alerts</h2>
      </div>
      <div class="box-body">
        <va-alert>
          <h4 slot="header">
            <i class="icon fa fa-check"></i> CoPilot is open source!
          </h4>
          <div slot="body">
            Click on icon to check out it out on github.
            <a href="https://github.com/misterGF/CoPilot" target="_blank">
              <i class="fa fa-github fa-2x"></i>
            </a>
          </div>
        </va-alert>

        <va-alert type="success">
          <h4 slot="header">
            <i class="icon fa fa-check"></i> CoPilot is open source!
          </h4>
          <div slot="body">
            Click on icon to check out it out on github.
            <a href="https://github.com/misterGF/CoPilot" target="_blank">
              <i class="fa fa-github fa-2x"></i>
            </a>
          </div>
        </va-alert>

        <va-alert type="info">
          <h4 slot="header">
            <i class="icon fa fa-check"></i> CoPilot is open source!
          </h4>
          <div slot="body">
            Click on icon to check out it out on github.
            <a href="https://github.com/misterGF/CoPilot" target="_blank">
              <i class="fa fa-github fa-2x"></i>
            </a>
          </div>
        </va-alert>

        <va-alert type="warning">
          <h4 slot="header">
            <i class="icon fa fa-check"></i> CoPilot is open source!
          </h4>
          <div slot="body">
            Click on icon to check out it out on github.
            <a href="https://github.com/misterGF/CoPilot" target="_blank">
              <i class="fa fa-github fa-2x"></i>
            </a>
          </div>
        </va-alert>

        <va-alert type="danger">
          <h4 slot="header">
            <i class="icon fa fa-check"></i> CoPilot is open source!
          </h4>
          <div slot="body">
            Click on icon to check out it out on github.
            <a href="https://github.com/misterGF/CoPilot" target="_blank">
              <i class="fa fa-github fa-2x"></i>
            </a>
          </div>
        </va-alert>
      </div>
    </div>

    <div class="box">
      <div class="box-header">
        <h2>Dismissible Alerts</h2>
      </div>
      <div class="box-body">
        <va-alert :dismissible="true">
          <h4 slot="header">
            <i class="icon fa fa-check"></i> CoPilot is open source!
          </h4>
          <div slot="body">
            Click on icon to check out it out on github.
            <a href="https://github.com/misterGF/CoPilot" target="_blank">
              <i class="fa fa-github fa-2x"></i>
            </a>
          </div>
        </va-alert>

        <va-alert type="success" :dismissible="true">
          <h4 slot="header">
            <i class="icon fa fa-check"></i> CoPilot is open source!
          </h4>
          <div slot="body">
            Click on icon to check out it out on github.
            <a href="https://github.com/misterGF/CoPilot" target="_blank">
              <i class="fa fa-github fa-2x"></i>
            </a>
          </div>
        </va-alert>

        <va-alert type="info" :dismissible="true">
          <h4 slot="header">
            <i class="icon fa fa-check"></i> CoPilot is open source!
          </h4>
          <div slot="body">
            Click on icon to check out it out on github.
            <a href="https://github.com/misterGF/CoPilot" target="_blank">
              <i class="fa fa-github fa-2x"></i>
            </a>
          </div>
        </va-alert>

        <va-alert type="warning" :dismissible="true">
          <h4 slot="header">
            <i class="icon fa fa-check"></i> CoPilot is open source!
          </h4>
          <div slot="body">
            Click on icon to check out it out on github.
            <a href="https://github.com/misterGF/CoPilot" target="_blank">
              <i class="fa fa-github fa-2x"></i>
            </a>
          </div>
        </va-alert>

        <va-alert type="danger" :dismissible="true">
          <h4 slot="header">
            <i class="icon fa fa-check"></i> CoPilot is open source!
          </h4>
          <div slot="body">
            Click on icon to check out it out on github.
            <a href="https://github.com/misterGF/CoPilot" target="_blank">
              <i class="fa fa-github fa-2x"></i>
            </a>
          </div>
        </va-alert>
      </div>
    </div>



  </div>
</template>
<script>
import VAAlert from '../components/VAAlert.vue'

export default {
  components: {
    'va-alert': VAAlert
  }
}
</script>
<style lang="css">
</style>
