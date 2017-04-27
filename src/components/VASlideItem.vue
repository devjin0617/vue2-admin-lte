<template>
  <li class="treeview">
    <a href="#">
      <i class="fa fa-laptop"></i>
      <span>UI Elements</span>
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
</template>

<script>
export default {
  name: 'va-slide-item,
  created () {

  }
}
</script>
