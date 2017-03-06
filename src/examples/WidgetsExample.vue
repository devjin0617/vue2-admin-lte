<template>
  <div>
    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <InfoBox
            bgColor="bg-aqua"
            bgIcon="ion ion-ios-gear-outline"
            text="Messages"
            number="1410"
            numberType="comma"
          ></InfoBox>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <InfoBox
            bgColor="bg-green"
            bgIcon="fa fa-flag-o"
            text="Bookmarks"
            number="410"
            numberType="comma"
          ></InfoBox>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <InfoBox
            bgColor="bg-yellow"
            bgIcon="fa fa-files-o"
            text="Uploads"
            number="13648"
            numberType="comma"
          ></InfoBox>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <InfoBox
            bgColor="bg-red"
            bgIcon="fa fa-star-o"
            text="Likes"
            number="93139"
            numberType="comma"
          ></InfoBox>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <InfoBox
            wrapBgColor="bg-aqua"
            bgIcon="fa fa-bookmark-o"
            text="Bookmarks"
            number="41410"
            numberType="comma"
            :isProgress="true"
            :percentage="70"
            progressDescription="70% Increase in 30 Days"
          ></InfoBox>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <InfoBox
            wrapBgColor="bg-green"
            bgIcon="fa fa-thumbs-o-up"
            text="Likes"
            number="41410"
            numberType="comma"
            :isProgress="true"
            :percentage="70"
            progressDescription="70% Increase in 30 Days"
          ></InfoBox>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <InfoBox
            wrapBgColor="bg-yellow"
            bgIcon="fa fa-calendar"
            text="Events"
            number="41410"
            numberType="comma"
            :isProgress="true"
            :percentage="70"
            progressDescription="70% Increase in 30 Days"
          ></InfoBox>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <InfoBox
            wrapBgColor="bg-red"
            bgIcon="fa fa-comments-o"
            text="Comments"
            number="41410"
            numberType="comma"
            :isProgress="true"
            :percentage="70"
            progressDescription="70% Increase in 30 Days"
          ></InfoBox>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <SmallBox
          color="aqua"
          icon="ion-bag"
          title="150"
          description="New Order"
          moreText="More info">
        </SmallBox>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <SmallBox
          color="green"
          icon="ion-stats-bars"
          title="53%"
          description="Bounce Rate"
          moreText="More info">
        </SmallBox>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <SmallBox
          color="yellow"
          icon="ion-person-add"
          title="44"
          description="User Registrations"
          moreText="More info">
        </SmallBox>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
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
      <div class="col-md-3 col-sm-6 col-xs-12">
        <Box
          theme="box-default"
          title="Expandable"
          content="The body of the box"
          :isOpen="false"
        ></Box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <Box
          theme="box-success"
          title="Expandable"
          content="The body of the box"
        ></Box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <Box
          theme="box-warning"
          title="Expandable"
          content="The body of the box"
        ></Box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <Box
          theme="box-danger"
          title="Expandable"
          content="The body of the box"
          :isLoading="true"
        ></Box>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <Box
          theme="box-default"
          :isBorder="true"
          title="Expandable"
          content="The body of the box"
          :isOpen="false"
        ></Box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <Box
          theme="box-success"
          :isBorder="true"
          title="Expandable"
          content="The body of the box"
        ></Box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <Box
          theme="box-warning"
          :isBorder="true"
          title="Expandable"
          content="The body of the box"
        ></Box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <Box
          theme="box-danger"
          :isBorder="true"
          title="Expandable"
          content="The body of the box"
          :isLoading="true"
        ></Box>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-sm6 col-xs-12">
        <DirectChat
          theme="primary"
          :talkList="talkList"
          title="Direct Chat"
          :badgeCount="3"
          placeholder="내용을 입력하세요..."
        ></DirectChat>
      </div>
      <div class="col-md-3 col-sm6 col-xs-12">
        <DirectChat
          theme="success"
          :talkList="talkList"
          title="Direct Chat"
          :badgeCount="3"
          placeholder="내용을 입력하세요..."
        ></DirectChat>
      </div>
      <div class="col-md-3 col-sm6 col-xs-12">
        <DirectChat
          theme="warning"
          :talkList="talkList"
          title="Direct Chat"
          :badgeCount="3"
          placeholder="내용을 입력하세요..."
        ></DirectChat>
      </div>
      <div class="col-md-3 col-sm6 col-xs-12">
        <DirectChat
          theme="danger"
          :talkList="talkList"
          title="Direct Chat"
          :badgeCount="3"
          placeholder="내용을 입력하세요..."
        ></DirectChat>
      </div>
    </div>
  </div>
</template>

<script>
import InfoBox from '../widgets/InfoBox.vue'
import SmallBox from '../widgets/SmallBox.vue'
import Box from '../widgets/Box.vue'
import DirectChat from '../widgets/DirectChat.vue'

export default {
  name: 'WidgetsExample',
  data () {
    return {
      talkList: [
        {
          name: 'Alexander Pierce',
          date: new Date(),
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          message: `Is this template really for free? That's unbelievable`,
          isMine: false
        },
        {
          name: 'Sarah Bullock',
          date: new Date(),
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          message: `You better believe it!`,
          isMine: true
        }
      ]
    }
  },
  created () {

  },
  components: {
    InfoBox,
    SmallBox,
    Box,
    DirectChat
  }
}
</script>
