<template>
  <row>
    <column class="col-md-6">

      <va-box
          title="Quick Example"
          theme="box-primary"
          widgetType="">

          <div slot="content">

            <va-input-group
              title="Email address"
              vaId="exampleInputEmail1"
              type="email"
              placeholder="Enter email"
            >
            </va-input-group>

            <va-input-group
              title="Password"
              vaId="exampleInputPassword1"
              type="password"
              placeholder="Password"
            >
            </va-input-group>

            <va-input-group
              title="File input"
              vaId="exampleInputFile"
              type="file"
              helpBlock="Example block-level help text here."
            >
            </va-input-group>

            <va-checkbox
              text="Check me out..."
            >
            </va-checkbox>

          </div>
      </va-box>

      <va-box
          title="Different Height"
          theme="box-success"
          widgetType="">

          <div slot="content">

            <va-input
              size="lg"
              placeholder=".input-lg"
            ></va-input>
            <br/>
            <va-input
              placeholder="Default input"
            ></va-input>
            <br/>
            <va-input
              size="sm"
              placeholder=".input-sm"
            ></va-input>


          </div>
      </va-box>

      <va-box
          title="Different Width"
          theme="box-danger"
          widgetType="">

          <div slot="content">

            <column class="col-xs-3">
              <va-input placeholder=".col-xs-3"></va-input>
            </column>

            <column class="col-xs-4">
              <va-input placeholder=".col-xs-4"></va-input>
            </column>

            <column class="col-xs-5">
              <va-input placeholder=".col-xs-5"></va-input>
            </column>

          </div>

      </va-box>

      <va-box
        title="Input Addon"
        theme="box-info"
        widgetType="">

          <div slot="content">

            <va-input-group
              groupType="input"
              placeholder="Username"
              prefixAddonText="@"
            >
            </va-input-group>
            <br/>
            <va-input-group
              groupType="input"
              suffixAddonText=".00"
            >
            </va-input-group>
            <br/>
            <va-input-group
              groupType="input"
              prefixAddonText="$"
              suffixAddonText=".00"
            >
            </va-input-group>

            <h4>With icons</h4>

            <va-input-group
              groupType="input"
              placeholder="Email"
              type="email"
            >
              <i slot="slotPrefixAddonText" class="fa fa-envelope"></i>
            </va-input-group>
            <br/>

            <va-input-group
              groupType="input"
            >
              <i slot="slotSuffixAddonText" class="fa fa-check"></i>
            </va-input-group>
            <br/>

            <va-input-group
              groupType="input"
            >
              <i slot="slotPrefixAddonText" class="fa fa-dollar"></i>
              <i slot="slotSuffixAddonText" class="fa fa-ambulance"></i>
            </va-input-group>


            <h4>With checkbox and radio inputs</h4>

            <row>
              <column class="col-lg-6">
                <va-input-group
                  groupType="input"
                >
                  <input slot="slotPrefixAddonText" type="checkbox">
                </va-input-group>
              </column>

              <column class="col-lg-6">
                <va-input-group
                  groupType="input"
                >
                  <input slot="slotPrefixAddonText" type="radio">
                </va-input-group>
              </column>
            </row>

            <h4>With buttons</h4>

            <p class="margin">Large: <code>.input-group.input-group-lg</code></p>

            <va-input-group
              groupType="input"
              class="input-group-lg"
            >

              <va-button slot="slotPrefixButton"
                name="Action"
                theme="warning"
                class="dropdown-toggle"
                data-toggle="dropdown">
                <slot>
                   <span class="fa fa-caret-down"></span>
                </slot>
              </va-button>
              <ul slot="slotPrefixDropdown" class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>

            </va-input-group>

            <p class="margin">Normal</p>

            <va-input-group
              groupType="input"
              placeholer=""
            >
              <va-button slot="slotPrefixButton"
                name="Action"
                theme="danger">
              </va-button>

            </va-input-group>

            <p class="margin">Small <code>.input-group.input-group-sm</code></p>

            <va-input-group
              groupType="input"
              placeholer=""
            >
              <va-button slot="slotSuffixButton"
                name="Go!"
                theme="info">
              </va-button>

            </va-input-group>

          </div>

      </va-box>

    </column>

    <column class="col-md-6">
      <va-box
        title="Horizontal Form"
        theme="box-info"
        widgetType="">

        <div slot="content">


          <form class="form-horizontal">

            <va-input
              :isHorizontal="true"
              title="Email"
              placeholder="Email"
              type="email"
              vaId="horizontal-email"
              >

            </va-input>

            <va-input
              :isHorizontal="true"
              title="Password"
              placeholder="Password"
              type="password"
              vaId="horizontal-email"
              >

            </va-input>

            <va-checkbox
              :isHorizontal="true"
              text="Check me out..."
            >
            </va-checkbox>

          </form>

        </div>

        <div slot="footer">

          <va-button :isBlock="false" name="Cancel"></va-button>
          <va-button :isBlock="false" theme="info" align="right" name="Sign in"></va-button>

        </div>

      </va-box>

    </column>
  </row>
</template>

<script>
import VABox from '../../widgets/VABox'
import VAInputGroup from '../../components/VAInputGroup'
import VACheckBox from '../../components/VACheckBox'
import VAInput from '../../components/VAInput'
import VAButton from '../../components/VAButton'

export default {
  name: 'general-elements',
  created () {

  },
  components: {
    'va-box': VABox,
    'va-input-group': VAInputGroup,
    'va-checkbox': VACheckBox,
    'va-input': VAInput,
    'va-button': VAButton
  }
}
</script>
