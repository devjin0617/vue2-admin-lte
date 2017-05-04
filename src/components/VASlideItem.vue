<template>
  <li class="getType" v-if="!router.name">
    <a href="#">
      <i :class="icon"></i> <span>{{ name }}</span>
      <span class="pull-right-container">
        <small v-if="badge" class="label pull-right" :class="[badge.type==='String'?'bg-green':'label-primary']">{{ badge.data }}</small>
        <i v-else class="fa fa-angle-left pull-right"></i>
      </span>
    </a>
    <ul class="treeview-menu" v-if="items">
      <router-link v-for="item in items" :to="item.router.name">
        <a :href="item.link">
          <i :class="item.icon"> {{ item.name }}</i>
        </a>
      </router-link>
    </ul>
  </li>
  <router-link v-else-if="!router.name">
    <a href="#">
      <i :class="icon"></i> <span>{{ name }}</span>
      <span class="pull-right-container" v-show="badge">
        <small class="label pull-right" :class="[badge.type==='String'?'bg-green':'label-primary']">{{ badge.data }}</small>
      </span>
    </a>
  </router-link>
</template>

<script>
export default {
  name: 'va-slide-item',
  props: {
    type: {
      type: String,
      default: 'item'
    },
    icon: {
      type: String,
      default: ''
    },
    name: {
      type: String
    },
    badge: {
      type: Object,
      default: null
    },
    items: {
      type: Array,
      default: []
    },
    router: {
      type: Object,
      default: {}
    },
    link: {
      type: String,
      default: ''
    }
  },
  created () {

  },
  computed: {
    getType () {
      return {
        tag: this.type,
        className: this.type === 'item' ? '' : 'treeview'
      }
    }
  }
}
</script>
