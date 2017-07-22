<template>
  <div class="dashboard">
    <row>
      <div class="col-lg-3 col-xs-6">
        <va-small-box
          color="aqua"
          icon="ion-bag"
          title="150"
          description="New Order"
          @more-click="clickToSmallBox"
          moreText="More info">
        </va-small-box>
      </div>
      <div class="col-lg-3 col-xs-6">
        <va-small-box
          color="green"
          icon="ion-stats-bars"
          title="53%"
          description="Bounce Rate"
          moreText="More info">
        </va-small-box>
      </div>
      <div class="col-lg-3 col-xs-6">
        <va-small-box
          color="yellow"
          icon="ion-person-add"
          title="44"
          description="User Registrations"
          moreText="More info">
        </va-small-box>
      </div>
      <div class="col-lg-3 col-xs-6">
        <va-small-box
          color="red"
          icon="ion-pie-graph"
          title="65"
          description="Unique Visitors"
          moreText="More info">
        </va-small-box>
      </div>
    </row>

    <row>
      <section class="col-lg-7 connectedSortable ui-sortable">
        <va-chat-box></va-chat-box>
        <va-todo-list></va-todo-list>
        <va-quick-mail></va-quick-mail>
      </section>
      <section class="col-lg-5 connectedSortable ui-sortable">
        <va-calendar></va-calendar>
      </section>
    </row>
  </div>
</template>

<script>
import VASmallBox from '../widgets/VASmallBox.vue'
import VAChatBox from '../widgets/VAChatBox.vue'
import VATodoList from '../widgets/VATodoList.vue'
import VAQuickMail from '../widgets/VAQuickMail.vue'
import VACalendar from '../widgets/VACalendar.vue'

export default {
  name: 'dashboard',
  data () {
    return {

    }
  },
  methods: {
    clickToSmallBox () {
      alert('click!!!: clickToSmallBox')
    }
  },
  components: {
    'va-small-box': VASmallBox,
    'va-chat-box': VAChatBox,
    'va-todo-list': VATodoList,
    'va-quick-mail': VAQuickMail,
    'va-calendar': VACalendar
  }
}

</script>
