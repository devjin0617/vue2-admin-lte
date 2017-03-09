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
  </div>

</template>

<script>
import ColorPaletteSet from '../../components/ColorPaletteSet.vue'

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
    ColorPaletteSet
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
