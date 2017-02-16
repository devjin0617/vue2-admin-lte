<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <button type="button" id="myButton" data-loading-text="jquery with bootstrap" class="btn bg-maroon btn-flat margin" autocomplete="off" @click="clickBtn">
          button of adminLTE of bootstrap
    </button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
