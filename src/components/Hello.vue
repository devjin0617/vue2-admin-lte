<template>
  <div class="hello">
    <img class="logo" src="../assets/logo.png">
    <button
      id="myButton"
      class="btn bg-maroon btn-flat margin"
      @click="clickBtn"
      :disabled="loading"
      ><template v-if="loading">{{msgBye}}</template><template v-else>{{msgHello}}</template></button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msgHello: 'Hello',
      msgBye: 'Bye',
      loading: false
    }
  },
  methods: {
    clickBtn () {
      this.loading = !this.loading
      setTimeout(() => {
        this.loading = !this.loading
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
