<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-lg-3 col-xs-6">
        <SmallBox
          color="aqua"
          icon="ion-bag"
          title="150"
          description="New Order"
          moreText="More info">
        </SmallBox>
      </div>
      <div class="col-lg-3 col-xs-6">
        <SmallBox
          color="green"
          icon="ion-stats-bars"
          title="53%"
          description="Bounce Rate"
          moreText="More info">
        </SmallBox>
      </div>
      <div class="col-lg-3 col-xs-6">
        <SmallBox
          color="yellow"
          icon="ion-person-add"
          title="44"
          description="User Registrations"
          moreText="More info">
        </SmallBox>
      </div>
      <div class="col-lg-3 col-xs-6">
        <SmallBox
          color="red"
          icon="ion-pie-graph"
          title="65"
          description="Unique Visitors"
          moreText="More info">
        </SmallBox>
      </div>
    </div>

    <div class="row">
      <section class="col-lg-7 connectedSortable ui-sortable">
        <ChatBox></ChatBox>
        <TodoList></TodoList>
      </section>
    </div>
  </div>
</template>

<script>
import SmallBox from '../components/SmallBox.vue'
import ChatBox from '../components/ChatBox.vue'
import TodoList from '../components/TodoList.vue'

export default {
  name: 'dashboard',
  data () {
    return {

    }
  },
  components: {
    SmallBox,
    ChatBox,
    TodoList
  }
}

</script>
