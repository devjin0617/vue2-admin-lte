<template>

  <div :id="name"
       class="carousel slide"
       data-ride="carousel">
    <ol class="carousel-indicators">
      <li :data-target="`#${name}`" v-for="(item, index) in list" :data="item" :key="index"
          :data-slide-to="index"
          class="startIndex"></li>
    </ol>
    <div class="carousel-inner">
      <div class="item" :class="index==startIndex?'active':''" v-for="(item, index) in list" :data="item" :key="index">
        <img :src="item.image"
             :alt="item.text">

        <div class="carousel-caption">
          {{item.text}}
        </div>
      </div>
    </div>
    <a class="left carousel-control"
       :href="`#${name}`"
       data-slide="prev">
      <span class="fa fa-angle-left"></span>
    </a>
    <a class="right carousel-control"
       :href="`#${name}`"
       data-slide="next">
      <span class="fa fa-angle-right"></span>
    </a>
  </div>

</template>

<script>
export default {
  name: 'va-carousel',
  props: {
    name: {
      type: String,
      default: 'carousel-example-generic'
    },
    list: {
      type: Array,
      default: []
    },
    startIndex: {
      type: Number,
      default: 0
    }
  },
  created () {

  }
}
</script>
