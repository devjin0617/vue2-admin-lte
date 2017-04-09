<template>
  <div>
    <div class="box box-default color-palette-box">
      <div class="box-header with-border">
        <h3 class="box-title"><i class="fa fa-tag"></i> Color Palette</h3>
      </div>
      <div class="box-body">
        <row>
          <va-color-palette-set v-for="color in colors[0]"
            :color="color"
          ></va-color-palette-set>
        </row>
        <!-- /.row -->
        <row>
          <va-color-palette-set v-for="color in colors[1]"
            :color="color"
          ></va-color-palette-set>
        </row>
        <!-- /.row -->
      </div>
    </div>

    <h2 class="page-header">Alerts and Callouts</h2>

    <row>
      <div class="col-md-6">
        <div class="box box-default">
          <div class="box-header with-border">
            <i class="fa fa-warning"></i>

            <h3 class="box-title">Alerts</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">

            <va-alert
              type="danger"
              :dismissible="true">
              <div slot="header">
                <h4><i class="icon fa fa-ban"></i> Alert!</h4>
              </div>
              <div slot="body">
                Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire
                soul, like these sweet mornings of spring which I enjoy with my whole heart.
              </div>
            </va-alert>
            <va-alert
              type="info"
              :dismissible="true">
              <div slot="header">
                <h4><i class="icon fa fa-info"></i> Alert!</h4>
              </div>
              <div slot="body">
                Info alert preview. This alert is dismissable.
              </div>
            </va-alert>
            <va-alert
              type="warning"
              :dismissible="true">
              <div slot="header">
                <h4><i class="icon fa fa-warning"></i> Alert!</h4>
              </div>
              <div slot="body">
                Warning alert preview. This alert is dismissable.
              </div>
            </va-alert>
            <va-alert
              type="success"
              :dismissible="true">
              <div slot="header">
                <h4><i class="icon fa fa-check"></i> Alert!</h4>
              </div>
              <div slot="body">
                Success alert preview. This alert is dismissable.
              </div>
            </va-alert>

          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->

      </div>

      <div class="col-md-6">
        <div class="box box-default">
          <div class="box-header with-border">
            <i class="fa fa-bullhorn"></i>

            <h3 class="box-title">Callouts</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">

            <va-callout
              type="danger"
              title="I am a danger callout!"
              text="There is a problem that we need to fix. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."
            ></va-callout>

            <va-callout
              type="info"
              title="I am an info callout!"
              text="Follow the steps to continue to payment."
            ></va-callout>

            <va-callout
              type="warning"
              title="I am a warning callout!"
              text="This is a yellow callout."
            ></va-callout>

            <va-callout
              type="success"
              title="I am a success callout!"
              text="This is a green callout."
            ></va-callout>

          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
      </div>
      <!-- /.col -->
    </row>

    <h2 class="page-header">AdminLTE Custom Tabs</h2>

    <row>
      <div class="col-md-6">

        <va-custom-tab>

          <li slot="nav"
              class="dropdown">
            <a class="dropdown-toggle"
              data-toggle="dropdown"
              href="#">
                                    Dropdown <span class="caret"></span>
                                  </a>
            <ul class="dropdown-menu">
              <li role="presentation"><a role="menuitem"
                  tabindex="-1"
                  href="#">Action</a></li>
              <li role="presentation"><a role="menuitem"
                  tabindex="-1"
                  href="#">Another action</a></li>
              <li role="presentation"><a role="menuitem"
                  tabindex="-1"
                  href="#">Something else here</a></li>
              <li role="presentation"
                  class="divider"></li>
              <li role="presentation"><a role="menuitem"
                  tabindex="-1"
                  href="#">Separated link</a></li>
            </ul>
          </li>

          <li slot="nav"
              class="pull-right"><a href="#"
              class="text-muted"><i class="fa fa-gear"></i></a></li>

          <div slot="content"
              class="active"
              id="tab_1"
              title="Tab 1">
            <b>How to use:</b>

            <p>Exactly like the original bootstrap tabs except you should use the custom wrapper <code>.nav-tabs-custom</code> to achieve this style.</p>
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.
          </div>
          <!-- /.tab-pane -->
          <div slot="content"
              id="tab_2"
              title="Tab 2">
            The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.
          </div>
          <!-- /.tab-pane -->
          <div slot="content"
              id="tab_3"
              title="Tab 3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <!-- /.tab-pane -->

        </va-custom-tab>

      </div>


      <div class="col-md-6">

        <va-custom-tab
          tabsClass="pull-right"
        >

          <li slot="nav"
              class="dropdown">
            <a class="dropdown-toggle"
              data-toggle="dropdown"
              href="#">
              Dropdown <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li role="presentation"><a role="menuitem"
                  tabindex="-1"
                  href="#">Action</a></li>
              <li role="presentation"><a role="menuitem"
                  tabindex="-1"
                  href="#">Another action</a></li>
              <li role="presentation"><a role="menuitem"
                  tabindex="-1"
                  href="#">Something else here</a></li>
              <li role="presentation"
                  class="divider"></li>
              <li role="presentation"><a role="menuitem"
                  tabindex="-1"
                  href="#">Separated link</a></li>
            </ul>
          </li>

          <li slot="nav" class="pull-left header"><i class="fa fa-th"></i> Custom Tabs</li>


          <div slot="content"
              class="active"
              id="tab_1"
              title="Tab 1">
            <b>How to use:</b>

            <p>Exactly like the original bootstrap tabs except you should use the custom wrapper <code>.nav-tabs-custom</code> to achieve this style.</p>
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.
          </div>
          <!-- /.tab-pane -->
          <div slot="content"
              id="tab_2"
              title="Tab 2">
            The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.
          </div>
          <!-- /.tab-pane -->
          <div slot="content"
              id="tab_3"
              title="Tab 3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <!-- /.tab-pane -->

        </va-custom-tab>

      </div>

    </row>

    <h2 class="page-header">Progress Bars</h2>

    <row>

      <div class="col-md-6">

        <va-box
          title="Progress Bars Different Sizes"
          :isSolid="true"
          widgetType=""
        >
          <div slot="content">

            <p><code>.progress</code></p>
            <va-progress-bar
              type="primary"
              :max="100"
              :value="40"
              text="40% Complete (success)"
            >
            </va-progress-bar>

            <p>Class: <code>.sm</code></p>
            <va-progress-bar
              type="success"
              size="sm"
              :max="100"
              :value="20"
              :isActive="true"
              text="20% Complete">
            </va-progress-bar>

            <p>Class: <code>.xs</code></p>
            <va-progress-bar
              type="warning"
              size="xs"
              :max="100"
              :value="60"
              text="60% Complete (warning)">
            </va-progress-bar>

            <p>Class: <code>.xxs</code></p>
            <va-progress-bar
              type="danger"
              size="xxs"
              :max="100"
              :value="60"
              text="60% Complete (danger)">
            </va-progress-bar>

          </div>
        </va-box>

      </div>


      <div class="col-md-6">


        <va-box
          title="Progress bars"
          :isSolid="true"
          widgetType=""
          >
          <div slot="content">


            <va-progress-bar
              type="green"
              :isStriped="false"
              :max="100"
              :value="40"
              text="40% Complete (success)">
            </va-progress-bar>


            <va-progress-bar
              type="aqua"
              :isStriped="false"
              :max="100"
              :value="20"
              text="20% Complete">
            </va-progress-bar>


            <va-progress-bar
              type="yellow"
              :isStriped="false"
              :max="100"
              :value="60"
              text="60% Complete (warning)">
            </va-progress-bar>


            <va-progress-bar
              type="red"
              :isStriped="false"
              :max="100"
              :value="80"
              text="80% Complete">
            </va-progress-bar>


          </div>
        </va-box>


      </div>

    </row>

    <row>

      <div class="col-md-6">

        <va-box title="Vertical Progress Bars Different Sizes"
            :isSolid="true"
            widgetType="">
          <div slot="content" class="text-center">

            <p>By adding the class <code>.vertical</code> and <code>.progress-sm</code>, <code>.progress-xs</code> or
              <code>.progress-xxs</code> we achieve:</p>


            <va-progress-bar
              type="primary"
              :max="100"
              :value="40"
              :isActive="true"
              :isVertical="true"
              text="40%">
            </va-progress-bar>


            <va-progress-bar
              type="success"
              size="sm"
              :max="100"
              :value="20"
              :isActive="true"
              :isVertical="true"
              text="20%">
            </va-progress-bar>


            <va-progress-bar
              type="warning"
              size="xs"
              :max="100"
              :value="60"
              :isActive="true"
              :isVertical="true"
              text="60%">
            </va-progress-bar>


            <va-progress-bar
              type="info"
              size="xxs"
              :max="100"
              :value="60"
              :isActive="true"
              :isVertical="true"
              text="60%">
            </va-progress-bar>

          </div>
        </va-box>
      </div>

      <div class="col-md-6">

        <va-box
          title="Vertical Progress bars"
          :isSolid="true"
          widgetType="">
          <div slot="content" class="text-center">

            <p>By adding the class <code>.vertical</code> we achieve:</p>

            <va-progress-bar
              type="green"
              :max="100"
              :value="40"
              :isStriped="false"
              :isVertical="true"
              text="40%">
            </va-progress-bar>

            <va-progress-bar
              type="aqua"
              :max="100"
              :value="20"
              :isStriped="false"
              :isVertical="true"
              text="20%">
            </va-progress-bar>

            <va-progress-bar
              type="yellow"
              :max="100"
              :value="60"
              :isStriped="false"
              :isVertical="true"
              text="60%">
            </va-progress-bar>

            <va-progress-bar
              type="red"
              :max="100"
              :value="60"
              :isStriped="false"
              :isVertical="true"
              text="60%">
            </va-progress-bar>

          </div>
        </va-box>
      </div>


    </row>

    <h2 class="page-header">Bootstrap Accordion & Carousel</h2>

    <row>
      <div class="col-md-6">


        <va-box
          title="Collapsible Accordion"
          :isSolid="true"
          widgetType="">

          <div slot="content" class="text-center">

            <va-accordion
              :list="accordion.list"
            >

            </va-accordion>


          </div>

        </va-box>

      </div>

      <div class="col-md-6">
        <va-box
          title="Carousel"
          :isSolid="true"
          widgetType="">

          <div slot="content">

            <va-carousel
              :name="carousel.name"
              :list="carousel.list"
            >
            </va-carousel>

          </div>

        </va-box>

      </div>

    </row>

    <h2 class="page-header">Typography</h2>

    <row>

      <div class="col-md-6">
        <va-box
          title="Headlines"
          :isSolid="true"
          widgetType="">
          <i slot="icon-title" class="fa fa-text-width"></i>

          <div slot="content">

            <h1>h1. Bootstrap heading</h1>

            <h2>h2. Bootstrap heading</h2>

            <h3>h3. Bootstrap heading</h3>
            <h4>h4. Bootstrap heading</h4>
            <h5>h5. Bootstrap heading</h5>
            <h6>h6. Bootstrap heading</h6>

          </div>


        </va-box>

      </div>

      <div class="col-md-6">

        <va-box
          title="Text Emphasis"
          :isSolid="true"
          widgetType="">
          <i slot="icon-title" class="fa fa-text-width"></i>

          <div slot="content">

            <va-text>
              Lead to emphasize importance
            </va-text>

            <va-text type="green">
              Text green to emphasize success
            </va-text>

            <va-text type="aqua">
              Text aqua to emphasize info
            </va-text>

            <va-text type="light-blue">
              Text light blue to emphasize info (2)
            </va-text>

            <va-text type="red">
              Text red to emphasize danger
            </va-text>

            <va-text type="yellow">
              Text yellow to emphasize warning
            </va-text>

            <va-text type="muted">
              Text muted to emphasize general
            </va-text>

          </div>
        </va-box>



      </div>

    </row>

    <row>

      <div class="col-md-6">

        <va-box
          title="Block Quotes"
          :isSolid="true"
          widgetType="">
          <i slot="icon-title" class="fa fa-text-width"></i>

          <div slot="content">

              <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
              </blockquote>

          </div>
        </va-box>

      </div>

      <div class="col-md-6">

        <va-box
          title="Block Quotes Pulled Right"
          :isSolid="true"
          widgetType="">
          <i slot="icon-title" class="fa fa-text-width"></i>

          <div slot="content">

              <blockquote class="pull-right">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
              </blockquote>

          </div>
        </va-box>

      </div>

    </row>

    <row>

      <div class="col-md-4">

        <va-box
          title="Unordered Lists"
          :isSolid="true"
          widgetType="">
          <i slot="icon-title" class="fa fa-text-width"></i>

          <div slot="content">

            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>

          </div>
        </va-box>
      </div>

      <div class="col-md-4">

        <va-box
          title="Ordered Lists"
          :isSolid="true"
          widgetType="">
          <i slot="icon-title" class="fa fa-text-width"></i>

          <div slot="content">

            <ol>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ol>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ol>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ol>

          </div>
        </va-box>
      </div>

      <div class="col-md-4">

        <va-box
          title="Unstyled Lists"
          :isSolid="true"
          widgetType="">
          <i slot="icon-title" class="fa fa-text-width"></i>

          <div slot="content">

            <ul class="list-unstyled">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>

          </div>
        </va-box>
      </div>
    </row>

    <row>

      <div class="col-md-6">

        <va-box
          title="Description"
          :isSolid="true"
          widgetType="">
          <i slot="icon-title" class="fa fa-text-width"></i>

          <div slot="content">

            <dl>
              <dt>Description lists</dt>
              <dd>A description list is perfect for defining terms.</dd>
              <dt>Euismod</dt>
              <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
              <dd>Donec id elit non mi porta gravida at eget metus.</dd>
              <dt>Malesuada porta</dt>
              <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
            </dl>

          </div>

        </va-box>
      </div>


      <div class="col-md-6">

        <va-box
          title="Description Horizontal"
          :isSolid="true"
          widgetType="">
          <i slot="icon-title" class="fa fa-text-width"></i>

          <div slot="content">

            <dl class="dl-horizontal">
              <dt>Description lists</dt>
              <dd>A description list is perfect for defining terms.</dd>
              <dt>Euismod</dt>
              <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
              <dd>Donec id elit non mi porta gravida at eget metus.</dd>
              <dt>Malesuada porta</dt>
              <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
              <dt>Felis euismod semper eget lacinia</dt>
              <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                sit amet risus.
              </dd>
            </dl>

          </div>

        </va-box>
      </div>

    </row>

  </div>

</template>

<script>
import VAColorPaletteSet from '../../components/VAColorPaletteSet.vue'
import VAAlert from '../../components/VAAlert.vue'
import VACallout from '../../components/VACallout.vue'
import VACustomTab from '../../components/VACustomTab.vue'
import VABox from '../../widgets/VABox.vue'
import VAProgressBar from '../../components/VAProgressBar.vue'
import VAAccordion from '../../components/VAAccordion.vue'
import VACarousel from '../../components/VACarousel.vue'
import VAText from '../../components/VAText.vue'

export default {
  name: 'General',
  data () {
    return {
      colors: [
        ['Primary', 'Info', 'Success', 'Warning', 'Danger', 'Gray'],
        ['Navi', 'Teal', 'Purple', 'Orange', 'Maroon', 'Black']
      ],
      accordion: {
        list: [
          {
            id: 'collapseOne',
            type: 'primary',
            title: 'Collapsible Group Item #1',
            content: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.`
          },
          {
            id: 'collapseTwo',
            type: 'danger',
            title: 'Collapsible Group Danger',
            content: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.`
          },
          {
            id: 'collapseThree',
            type: 'success',
            title: 'Collapsible Group Success',
            content: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.`
          }
        ]
      },
      carousel: {
        name: 'carousel-example',
        list: [
          {
            image: 'http://placehold.it/900x500/39CCCC/ffffff&text=I+Love+Bootstrap',
            text: 'First Slide'
          },
          {
            image: 'http://placehold.it/900x500/3c8dbc/ffffff&text=I+Love+Bootstrap',
            text: 'Second Slide'
          },
          {
            image: 'http://placehold.it/900x500/f39c12/ffffff&text=I+Love+Bootstrap',
            text: 'Third Slide'
          }
        ]
      }
    }
  },
  created () {

  },
  components: {
    'va-color-palette-set': VAColorPaletteSet,
    'va-alert': VAAlert,
    'va-callout': VACallout,
    'va-custom-tab': VACustomTab,
    'va-box': VABox,
    'va-progress-bar': VAProgressBar,
    'va-accordion': VAAccordion,
    'va-carousel': VACarousel,
    'va-text': VAText
  }
}
</script>

<style>

.color-palette {
  height: 35px;
  line-height: 35px;
  text-align: center;
}

.color-palette-set {
  margin-bottom: 15px;
}

.color-palette span {
  display: none;
  font-size: 12px;
}

.color-palette:hover span {
  display: block;
}

.color-palette-box h4 {
  position: absolute;
  top: 100%;
  left: 25px;
  margin-top: -40px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  display: block;
  z-index: 7;
}

</style>
