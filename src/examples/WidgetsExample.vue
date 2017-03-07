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
          :contacts="contacts"
          title="Direct Chat"
          :badgeCount="3"
          placeholder="내용을 입력하세요..."
        ></DirectChat>
      </div>
      <div class="col-md-3 col-sm6 col-xs-12">
        <DirectChat
          theme="success"
          :talkList="talkList"
          :contacts="contacts"
          title="Direct Chat"
          :badgeCount="3"
          placeholder="내용을 입력하세요..."
        ></DirectChat>
      </div>
      <div class="col-md-3 col-sm6 col-xs-12">
        <DirectChat
          theme="warning"
          :talkList="talkList"
          :contacts="contacts"
          title="Direct Chat"
          :badgeCount="3"
          placeholder="내용을 입력하세요..."
        ></DirectChat>
      </div>
      <div class="col-md-3 col-sm6 col-xs-12">
        <DirectChat
          theme="danger"
          :talkList="talkList"
          :contacts="contacts"
          title="Direct Chat"
          :badgeCount="3"
          placeholder="내용을 입력하세요..."
        ></DirectChat>
      </div>
    </div>

    <!-- TODO: Typography Component 완성 후 교체예정 -->
    <h2 class="page-header">Social Widgets</h2>

    <div class="row">
      <div class="col-md-4">
        <SocialUserV2
          name="Nadia Carmichael"
          description="Lead Developer"
          profileImage="/static/img/user7-128x128.jpg"
          :list="socialDataList[0]"
        ></SocialUserV2>
      </div>
      <div class="col-md-4">
        <SocialUserV1
          name="Alexander Pierce"
          description="Founder &amp; CEO"
          profileImage="/static/img/user1-128x128.jpg"
          :infoList="socialDataList[1]"
        ></SocialUserV1>
      </div>
      <div class="col-md-4">
        <SocialUserV1
          name="Elizabeth Pierce"
          description="Web Designer"
          profileImage="/static/img/user3-128x128.jpg"
          :infoList="socialDataList[2]"
          :isBackgroundImage="true"
        ></SocialUserV1>
      </div>
    </div>
  </div>
</template>

<script>
import InfoBox from '../widgets/InfoBox.vue'
import SmallBox from '../widgets/SmallBox.vue'
import Box from '../widgets/Box.vue'
import DirectChat from '../widgets/DirectChat.vue'
import SocialUserV1 from '../widgets/SocialUser.v1.vue'
import SocialUserV2 from '../widgets/SocialUser.v2.vue'

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
      ],
      contacts: [
        {
          name: 'Count Dracula',
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          latestMessage: 'How have you been? I was...',
          latestDate: new Date()
        },
        {
          name: 'Sarah Doe',
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          latestMessage: 'I will be waiting for...',
          latestDate: new Date()
        },
        {
          name: 'Nadia Jolie',
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          latestMessage: `I'll call you back at...`,
          latestDate: new Date()
        },
        {
          name: 'Nora S. Vans',
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          latestMessage: 'Where is your new...',
          latestDate: new Date()
        },
        {
          name: 'John K.',
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          latestMessage: 'Can I take a look at...',
          latestDate: new Date()
        },
        {
          name: 'Kenneth M.',
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          latestMessage: 'Naver mine I found...',
          latestDate: new Date()
        }
      ],
      socialDataList: [
        [
          {
            name: 'Projects',
            badge: {
              theme: 'bg-blue',
              count: 31
            }
          },
          {
            name: 'Tasks',
            badge: {
              theme: 'bg-aqua',
              count: 5
            }
          },
          {
            name: 'Completed Projects',
            badge: {
              theme: 'bg-green',
              count: 12
            }
          },
          {
            name: 'Followers',
            badge: {
              theme: 'bg-red',
              count: 842
            }
          }
        ],
        [
          {
            count: 3200,
            text: 'SALES'
          },
          {
            count: 13000,
            text: 'FOLLOWERS'
          },
          {
            count: 35,
            text: 'PRODUCTS'
          }
        ],
        [
          {
            count: 3200,
            text: 'SALES'
          },
          {
            count: 13000,
            text: 'FOLLOWERS'
          },
          {
            count: 35,
            text: 'PRODUCTS'
          }
        ]
      ]
    }
  },
  created () {

  },
  components: {
    InfoBox,
    SmallBox,
    Box,
    DirectChat,
    SocialUserV1,
    SocialUserV2
  }
}
</script>
