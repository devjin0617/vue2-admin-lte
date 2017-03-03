<template>
  <canvas>
  </canvas>
</template>
<script>
import Chart from 'chart.js'

export default {
  name: 'Chart',
  props: {
    'chart-config': {
      type: Object,
      validator: function (value) {
        const keys = Object.keys(value)
        if (!keys.includes('type')) {
          console.error('[Chart.js] Object must has type (key)')
          return false
        }
        if (!keys.includes('data')) {
          console.error('[Chart.js] Object must has data (key)')
          return false
        }
        return true
      }
    }
  },
  mounted () {
    const chartCanvas = this.$el.getContext('2d')
    const chartConfig = this.chartConfig
    new Chart(chartCanvas, chartConfig) // eslint-disable-line no-new
  }
}
</script>
<style lang="css">
</style>
