<template>
  <div>
    <div class="box box-default color-palette-box">
      <div class="box-header with-border">
        <h3 class="box-title"><i class="fa fa-tag"></i> Color Palette</h3>
      </div>
      <div class="box-body">
        <div class="row">
          <div class="col-sm-4 col-md-2">
            <h4 class="text-center">Primary</h4>

            <div class="color-palette-set">
              <div class="bg-light-blue disabled color-palette"><span>Disabled</span></div>
              <div class="bg-light-blue color-palette"><span>#3c8dbc</span></div>
              <div class="bg-light-blue-active color-palette"><span>Active</span></div>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-sm-4 col-md-2">
            <h4 class="text-center">Info</h4>

            <div class="color-palette-set">
              <div class="bg-aqua disabled color-palette"><span>Disabled</span></div>
              <div class="bg-aqua color-palette"><span>#00c0ef</span></div>
              <div class="bg-aqua-active color-palette"><span>Active</span></div>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-sm-4 col-md-2">
            <h4 class="text-center">Success</h4>

            <div class="color-palette-set">
              <div class="bg-green disabled color-palette"><span>Disabled</span></div>
              <div class="bg-green color-palette"><span>#00a65a</span></div>
              <div class="bg-green-active color-palette"><span>Active</span></div>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-sm-4 col-md-2">
            <h4 class="text-center">Warning</h4>

            <div class="color-palette-set">
              <div class="bg-yellow disabled color-palette"><span>Disabled</span></div>
              <div class="bg-yellow color-palette"><span>#f39c12</span></div>
              <div class="bg-yellow-active color-palette"><span>Active</span></div>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-sm-4 col-md-2">
            <h4 class="text-center">Danger</h4>

            <div class="color-palette-set">
              <div class="bg-red disabled color-palette"><span>Disabled</span></div>
              <div class="bg-red color-palette"><span>#f56954</span></div>
              <div class="bg-red-active color-palette"><span>Active</span></div>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-sm-4 col-md-2">
            <h4 class="text-center">Gray</h4>

            <div class="color-palette-set">
              <div class="bg-gray disabled color-palette"><span>Disabled</span></div>
              <div class="bg-gray color-palette"><span>#d2d6de</span></div>
              <div class="bg-gray-active color-palette"><span>Active</span></div>
            </div>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
        <div class="row">
          <div class="col-sm-4 col-md-2">
            <h4 class="text-center">Navy</h4>

            <div class="color-palette-set">
              <div class="bg-navy disabled color-palette"><span>Disabled</span></div>
              <div class="bg-navy color-palette"><span>#001F3F</span></div>
              <div class="bg-navy-active color-palette"><span>Active</span></div>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-sm-4 col-md-2">
            <h4 class="text-center">Teal</h4>

            <div class="color-palette-set">
              <div class="bg-teal disabled color-palette"><span>Disabled</span></div>
              <div class="bg-teal color-palette"><span>#39CCCC</span></div>
              <div class="bg-teal-active color-palette"><span>Active</span></div>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-sm-4 col-md-2">
            <h4 class="text-center">Purple</h4>

            <div class="color-palette-set">
              <div class="bg-purple disabled color-palette"><span>Disabled</span></div>
              <div class="bg-purple color-palette"><span>#605ca8</span></div>
              <div class="bg-purple-active color-palette"><span>Active</span></div>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-sm-4 col-md-2">
            <h4 class="text-center">Orange</h4>

            <div class="color-palette-set">
              <div class="bg-orange disabled color-palette"><span>Disabled</span></div>
              <div class="bg-orange color-palette"><span>#ff851b</span></div>
              <div class="bg-orange-active color-palette"><span>Active</span></div>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-sm-4 col-md-2">
            <h4 class="text-center">Maroon</h4>

            <div class="color-palette-set">
              <div class="bg-maroon disabled color-palette"><span>Disabled</span></div>
              <div class="bg-maroon color-palette"><span>#D81B60</span></div>
              <div class="bg-maroon-active color-palette"><span>Active</span></div>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-sm-4 col-md-2">
            <h4 class="text-center">Black</h4>

            <div class="color-palette-set">
              <div class="bg-black disabled color-palette"><span>Disabled</span></div>
              <div class="bg-black color-palette"><span>#111111</span></div>
              <div class="bg-black-active color-palette"><span>Active</span></div>
            </div>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'General',
  created () {

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
