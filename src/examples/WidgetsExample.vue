<template>
  <div>
    <row>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-info-box
            bgColor="bg-aqua"
            bgIcon="ion ion-ios-gear-outline"
            text="Messages"
            number="1410"
            numberType="comma"
          ></va-info-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-info-box
            bgColor="bg-green"
            bgIcon="fa fa-flag-o"
            text="Bookmarks"
            number="410"
            numberType="comma"
          ></va-info-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-info-box
            bgColor="bg-yellow"
            bgIcon="fa fa-files-o"
            text="Uploads"
            number="13648"
            numberType="comma"
          ></va-info-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-info-box
            bgColor="bg-red"
            bgIcon="fa fa-star-o"
            text="Likes"
            number="93139"
            numberType="comma"
          ></va-info-box>
      </div>
    </row>
    <row>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-info-box
            wrapBgColor="bg-aqua"
            bgIcon="fa fa-bookmark-o"
            text="Bookmarks"
            number="41410"
            numberType="comma"
            :isProgress="true"
            :percentage="70"
            progressDescription="70% Increase in 30 Days"
          ></va-info-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-info-box
            wrapBgColor="bg-green"
            bgIcon="fa fa-thumbs-o-up"
            text="Likes"
            number="41410"
            numberType="comma"
            :isProgress="true"
            :percentage="70"
            progressDescription="70% Increase in 30 Days"
          ></va-info-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-info-box
            wrapBgColor="bg-yellow"
            bgIcon="fa fa-calendar"
            text="Events"
            number="41410"
            numberType="comma"
            :isProgress="true"
            :percentage="70"
            progressDescription="70% Increase in 30 Days"
          ></va-info-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-info-box
            wrapBgColor="bg-red"
            bgIcon="fa fa-comments-o"
            text="Comments"
            number="41410"
            numberType="comma"
            :isProgress="true"
            :percentage="70"
            progressDescription="70% Increase in 30 Days"
          ></va-info-box>
      </div>
    </row>
    <row>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-small-box
          color="aqua"
          icon="ion-bag"
          title="150"
          description="New Order"
          moreText="More info">
        </va-small-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-small-box
          color="green"
          icon="ion-stats-bars"
          title="53%"
          description="Bounce Rate"
          moreText="More info">
        </va-small-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-small-box
          color="yellow"
          icon="ion-person-add"
          title="44"
          description="User Registrations"
          moreText="More info">
        </va-small-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
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
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-box
          theme="box-default"
          title="Expandable"
          :isOpen="false"
        >
          <div slot="content">
            The body of the box
          </div>
        </va-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-box
          theme="box-success"
          title="Expandable"
        >
          <div slot="content">
            The body of the box
          </div>
        </va-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-box
          theme="box-warning"
          title="Expandable"
        >
          <div slot="content">
            The body of the box
          </div>
        </va-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-box
          theme="box-danger"
          title="Expandable"
          :isLoading="true"
        >
          <div slot="content">
            The body of the box
          </div>
        </va-box>
      </div>
    </row>
    <row>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-box
          theme="box-default"
          :isSolid="true"
          title="Expandable"
          :isOpen="false"
        >
          <div slot="content">
            The body of the box
          </div>
        </va-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-box
          theme="box-success"
          :isSolid="true"
          title="Expandable"
        >
          <div slot="content">
            The body of the box
          </div>
        </va-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-box
          theme="box-warning"
          :isSolid="true"
          title="Expandable"
        >
          <div slot="content">
            The body of the box
          </div>
        </va-box>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <va-box
          theme="box-danger"
          :isSolid="true"
          title="Expandable"
          :isLoading="true"
        >
          <div slot="The body of the box">
            The body of the box
          </div>
        </va-box>
      </div>
    </row>
    <row>
      <div class="col-md-3 col-sm6 col-xs-12">
        <va-direct-chat
          theme="primary"
          :talkList="talkList"
          :contacts="contacts"
          title="Direct Chat"
          :badgeCount="3"
          placeholder="내용을 입력하세요..."
        ></va-direct-chat>
      </div>
      <div class="col-md-3 col-sm6 col-xs-12">
        <va-direct-chat
          theme="success"
          :talkList="talkList"
          :contacts="contacts"
          title="Direct Chat"
          :badgeCount="3"
          placeholder="내용을 입력하세요..."
        ></va-direct-chat>
      </div>
      <div class="col-md-3 col-sm6 col-xs-12">
        <va-direct-chat
          theme="warning"
          :talkList="talkList"
          :contacts="contacts"
          title="Direct Chat"
          :badgeCount="3"
          placeholder="내용을 입력하세요..."
        ></va-direct-chat>
      </div>
      <div class="col-md-3 col-sm6 col-xs-12">
        <va-direct-chat
          theme="danger"
          :talkList="talkList"
          :contacts="contacts"
          title="Direct Chat"
          :badgeCount="3"
          placeholder="내용을 입력하세요..."
        ></va-direct-chat>
      </div>
    </row>

    <!-- TODO: Typography Component 완성 후 교체예정 -->
    <h2 class="page-header">Social Widgets</h2>

    <row>
      <div class="col-md-4">
        <va-social-user-v2
          name="Nadia Carmichael"
          description="Lead Developer"
          profileImage="/static/img/user7-128x128.jpg"
          :list="socialDataList[0]"
        ></va-social-user-v2>
      </div>
      <div class="col-md-4">
        <va-social-user-v1
          name="Alexander Pierce"
          description="Founder &amp; CEO"
          profileImage="/static/img/user1-128x128.jpg"
          :infoList="socialDataList[1]"
        ></va-social-user-v1>
      </div>
      <div class="col-md-4">
        <va-social-user-v1
          name="Elizabeth Pierce"
          description="Web Designer"
          profileImage="/static/img/user3-128x128.jpg"
          :infoList="socialDataList[2]"
          :isBackgroundImage="true"
        ></va-social-user-v1>
      </div>
    </row>
    <row>
      <div class="col-md-6">
        <va-social-box
          :name="socialBoxList[0].name"
          :description="socialBoxList[0].description"
          :profileImage="socialBoxList[0].profileImage"
          :images="socialBoxList[0].images"
          :text="socialBoxList[0].text"
          :buttons="socialBoxList[0].buttons"
          :likeCount="socialBoxList[0].likeCount"
          :commentCount="socialBoxList[0].commentCount"
          :comments="socialBoxList[0].comments"
        ></va-social-box>
      </div>
      <div class="col-md-6">
        <va-social-box
            :name="socialBoxList[1].name"
            :description="socialBoxList[1].description"
            :profileImage="socialBoxList[1].profileImage"
            :text="socialBoxList[1].text"
            :buttons="socialBoxList[1].buttons"
            :likeCount="socialBoxList[1].likeCount"
            :commentCount="socialBoxList[1].commentCount"
            :comments="socialBoxList[1].comments"
            :attachments="socialBoxList[1].attachments"
          ></va-social-box>
      </div>
    </row>
  </div>
</template>

<script>
import VAInfoBox from '../widgets/VAInfoBox.vue'
import VASmallBox from '../widgets/VASmallBox.vue'
import VABox from '../widgets/VABox.vue'
import VADirectChat from '../widgets/VADirectChat.vue'
import VASocialUserV1 from '../widgets/VASocialUser.v1.vue'
import VASocialUserV2 from '../widgets/VASocialUser.v2.vue'
import VASocialBox from '../widgets/VASocialBox.vue'

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
      ],
      socialBoxList: [
        {
          name: 'Jonathan Burke Jr.',
          profileImage: '/static/img/user1-128x128.jpg',
          description: 'Shared publicly - 7:30 PM Today',
          images: [
            '/static/img/photo2.png'
          ],
          text: 'I took this photo this morning. What do you guys think?',
          buttons: [
            {
              name: 'Share',
              theme: 'fa fa-share',
              onClick: this.clickToShare
            },
            {
              name: 'Likes',
              theme: 'fa fa-thumbs-o-up',
              onClick: this.clickToLike
            }
          ],
          likeCount: 127,
          commentCount: 3,
          comments: [
            {
              name: 'Maria Gonzales',
              profileImage: '/static/img/user3-128x128.jpg',
              text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
              date: new Date()
            },
            {
              name: 'Luna Stark',
              profileImage: '/static/img/user4-128x128.jpg',
              text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
              date: new Date()
            }
          ]
        },
        {
          name: 'Jonathan Burke Jr.',
          profileImage: '/static/img/user1-128x128.jpg',
          description: 'Shared publicly - 7:30 PM Today',
          text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
          buttons: [
            {
              name: 'Share',
              theme: 'fa fa-share',
              onClick: this.clickToShare
            },
            {
              name: 'Likes',
              theme: 'fa fa-thumbs-o-up',
              onClick: this.clickToLike
            }
          ],
          likeCount: 45,
          commentCount: 2,
          comments: [
            {
              name: 'Maria Gonzales',
              profileImage: '/static/img/user3-128x128.jpg',
              text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
              date: new Date()
            },
            {
              name: 'Nora Havisham',
              profileImage: '/static/img/user5-128x128.jpg',
              text: `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
              date: new Date()
            }
          ],
          attachments: [
            {
              title: 'Lorem ipsum text generator',
              image: '/static/img/photo1.png',
              text: 'Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
            }
          ]
        }
      ]
    }
  },
  created () {

  },
  methods: {
    clickToShare () {
      alert('click to shere')
    },
    clickToLike () {
      alert('click to like')
    }
  },
  components: {
    'va-info-box': VAInfoBox,
    'va-small-box': VASmallBox,
    'va-box': VABox,
    'va-direct-chat': VADirectChat,
    'va-social-user-v1': VASocialUserV1,
    'va-social-user-v2': VASocialUserV2,
    'va-social-box': VASocialBox
  }
}
</script>
