<template>
  <li class="treeview">
    <a href="#">
      <i class="fa fa-laptop"></i>
      <span>{{ name }}</span>
      <span class="pull-right-container">
        <i class="fa fa-angle-left pull-right"></i>
      </span>
    </a>
    <ul class="treeview-menu">
      <router-link tag="li" :to="{ name: 'General' }">
        <a href=""><i class="fa fa-circle-o"></i> General</a>
      </router-link>
    </ul>
  </li>

  <!--
  <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
  -->
</template>

<script>
export default {
  name: 'va-slide-item',
  props: {
    type: {
      type: String,
      default: 'li'
    },
    name: {
      type: String
    }
  },
  created () {

  },
  computed: {
    getType () {
      return {
        tag: this.type,
        className: this.type === 'li' ? '' : 'treeview'
      }
    }
  }
}
</script>
