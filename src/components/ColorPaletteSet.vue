<template>
  <div class="col-sm-4 col-md-2">
    <h4 class="text-center">{{ this.color }}</h4>

    <div class="color-palette-set">
      <div :class="[this.colorSet[this.color].className, 'disabled', 'color-palette']"><span>Disabled</span></div>
      <div :class="[this.colorSet[this.color].className, 'color-palette']"><span>{{ this.colorSet[this.color].color }}</span></div>
      <div :class="[activeMode, 'color-palette']"><span>Active</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPaletteSet',
  props: {
    color: {
      type: String,
      default: 'Primary'
    }
  },
  data () {
    return {
      colorSet: {
        Primary: {
          className: 'bg-light-blue',
          color: '#3c8dbc'
        },
        Info: {
          className: 'bg-aqua',
          color: '#00a65a'
        },
        Success: {
          className: 'bg-green',
          color: '#00a65a'
        },
        Warning: {
          className: 'bg-yellow',
          color: '#f39c12'
        },
        Danger: {
          className: 'bg-red',
          color: '#f56954'
        },
        Gray: {
          className: 'bg-gray',
          color: '#d2d6de'
        },
        Navi: {
          className: 'bg-navy',
          color: '#001F3F'
        },
        Teal: {
          className: 'bg-teal',
          color: '#39CCCC'
        },
        Purple: {
          className: 'bg-purple',
          color: '#605ca8'
        },
        Orange: {
          className: 'bg-orange',
          color: '#ff851b'
        },
        Maroon: {
          className: 'bg-maroon',
          color: '#D81B60'
        },
        Black: {
          className: 'bg-black',
          color: '#111111'
        }
      }
    }
  },
  computed: {
    activeMode () {
      return `${this.colorSet[this.color].className}-active`
    }
  },
  created () {

  }
}
</script>

<style scoped>

</style>
