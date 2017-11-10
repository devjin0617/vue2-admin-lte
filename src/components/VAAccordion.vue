<template>

  <div class="box-group"
       id="accordion">
    <!-- we are adding the .panel class so bootstrap.js collapse plugin detects it -->
    <div class="panel box" :class="`box-${item.type}`" v-for="(item, index) in list" :data="item" :key="index">
      <div class="box-header with-border">
        <h4 class="box-title">
          <a data-toggle="collapse" data-parent="#accordion" :href="`#${item.id}`">
            {{item.title}}
          </a>
        </h4>
      </div>
      <div :id="item.id"
           class="panel-collapse collapse"
           :class="index==0?'in':''">
        <div class="box-body">
          {{item.content}}
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: 'va-arccordion',
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  created () {

  }
}
</script>
