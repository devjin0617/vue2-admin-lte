<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button type="button" id="myButton" data-loading-text="jquery with bootstrap" class="btn bg-maroon btn-flat margin" autocomplete="off" @click="clickBtn">
          button of adminLTE of bootstrap
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

// $('#myButton').on('click', function () {
//   $(this).button('loading')
//   // business logic...
//   // $btn.button('reset')
// })

export default {
  name: 'app',
  created () {
  },
  methods: {
    clickBtn (event) {
      $(event.target).button('loading')

      setTimeout(function () {
        $(event.target).button('reset')
      }, 1000)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
