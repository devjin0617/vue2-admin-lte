<template>
  <div>
    <div class="box box-default color-palette-box">
      <div class="box-header with-border">
        <h3 class="box-title"><i class="fa fa-tag"></i> Color Palette</h3>
      </div>
      <div class="box-body">
        <div class="row">
          <ColorPaletteSet v-for="color in colors[0]"
            :color="color"
          ></ColorPaletteSet>
        </div>
        <!-- /.row -->
        <div class="row">
          <ColorPaletteSet v-for="color in colors[1]"
            :color="color"
          ></ColorPaletteSet>
        </div>
        <!-- /.row -->
      </div>
    </div>

    <h2 class="page-header">Alerts and Callouts</h2>

    <div class="row">
      <div class="col-md-6">
        <div class="box box-default">
          <div class="box-header with-border">
            <i class="fa fa-warning"></i>

            <h3 class="box-title">Alerts</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">

            <Alert
              type="danger"
              :dismissible="true">
              <div slot="header">
                <h4><i class="icon fa fa-ban"></i> Alert!</h4>
              </div>
              <div slot="body">
                Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire
                soul, like these sweet mornings of spring which I enjoy with my whole heart.
              </div>
            </Alert>
            <Alert
              type="info"
              :dismissible="true">
              <div slot="header">
                <h4><i class="icon fa fa-info"></i> Alert!</h4>
              </div>
              <div slot="body">
                Info alert preview. This alert is dismissable.
              </div>
            </Alert>
            <Alert
              type="warning"
              :dismissible="true">
              <div slot="header">
                <h4><i class="icon fa fa-warning"></i> Alert!</h4>
              </div>
              <div slot="body">
                Warning alert preview. This alert is dismissable.
              </div>
            </Alert>
            <Alert
              type="success"
              :dismissible="true">
              <div slot="header">
                <h4><i class="icon fa fa-check"></i> Alert!</h4>
              </div>
              <div slot="body">
                Success alert preview. This alert is dismissable.
              </div>
            </Alert>

          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
      </div>

      <div class="col-md-6">
        <div class="box box-default">
          <div class="box-header with-border">
            <i class="fa fa-bullhorn"></i>

            <h3 class="box-title">Callouts</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">

            <Callout
              type="danger"
              title="I am a danger callout!"
              text="There is a problem that we need to fix. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."
            ></Callout>

            <Callout
              type="info"
              title="I am an info callout!"
              text="Follow the steps to continue to payment."
            ></Callout>

            <Callout
              type="warning"
              title="I am a warning callout!"
              text="This is a yellow callout."
            ></Callout>

            <Callout
              type="success"
              title="I am a success callout!"
              text="This is a green callout."
            ></Callout>

          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
      </div>
      <!-- /.col -->
    </div>
  </div>

</template>

<script>
import ColorPaletteSet from '../../components/ColorPaletteSet.vue'
import Alert from '../../components/Alert.vue'
import Callout from '../../components/Callout.vue'

export default {
  name: 'General',
  data () {
    return {
      colors: [
        ['Primary', 'Info', 'Success', 'Warning', 'Danger', 'Gray'],
        ['Navi', 'Teal', 'Purple', 'Orange', 'Maroon', 'Black']
      ]
    }
  },
  created () {

  },
  components: {
    ColorPaletteSet,
    Alert,
    Callout
  }
}
</script>

<style>

.color-palette {
  height: 35px;
  line-height: 35px;
  text-align: center;
}

.color-palette-set {
  margin-bottom: 15px;
}

.color-palette span {
  display: none;
  font-size: 12px;
}

.color-palette:hover span {
  display: block;
}

.color-palette-box h4 {
  position: absolute;
  top: 100%;
  left: 25px;
  margin-top: -40px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  display: block;
  z-index: 7;
}

</style>
