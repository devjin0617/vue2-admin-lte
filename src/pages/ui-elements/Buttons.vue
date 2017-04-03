<template>
  <row>
    <div class="col-md-12">
      <va-box
        theme="box-primary"
        title="Expandable"
        widgetType=""
      >
        <div slot="content" class="table-responsive">
          <p>Various types of buttons. Using the base class <code>.btn</code></p>
          <table class="table table-bordered text-center">
            <tbody>
              <tr>
                <th>Normal</th>
                <th>Large <code>.btn-lg</code></th>
                <th>Small <code>.btn-sm</code></th>
                <th>X-Small <code>.btn-xs</code></th>
                <th>Flat <code>.btn-flat</code></th>
                <th>Disabled <code>.disabled</code></th>
              </tr>
              <tr>
                <td>
                  <va-button
                    name="Default"
                    theme="default"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Default"
                    theme="default"
                    size="btn-lg"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Default"
                    theme="default"
                    size="btn-sm"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Default"
                    theme="default"
                    size="btn-xs"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Default"
                    theme="default"
                    :isFlat="true"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Default"
                    theme="default"
                    :isDisabled="true"
                  ></va-button>
                </td>
              </tr>
              <tr>
                <td>
                  <va-button
                    name="Primary"
                    theme="primary"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Primary"
                    theme="primary"
                    size="btn-lg"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Primary"
                    theme="primary"
                    size="btn-sm"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Primary"
                    theme="primary"
                    size="btn-xs"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Primary"
                    theme="primary"
                    :isFlat="true"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Primary"
                    theme="primary"
                    :isDisabled="true"
                  ></va-button>
                </td>
              </tr>
              <tr>
                <td>
                  <va-button
                    name="Success"
                    theme="success"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Success"
                    theme="success"
                    size="btn-lg"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Success"
                    theme="success"
                    size="btn-sm"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Success"
                    theme="success"
                    size="btn-xs"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Success"
                    theme="success"
                    :isFlat="true"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Success"
                    theme="success"
                    :isDisabled="true"
                  ></va-button>
                </td>
              </tr>
              <tr>
                <td>
                  <va-button
                    name="Info"
                    theme="info"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Info"
                    theme="info"
                    size="btn-lg"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Info"
                    theme="info"
                    size="btn-sm"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Info"
                    theme="info"
                    size="btn-xs"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Info"
                    theme="info"
                    :isFlat="true"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Info"
                    theme="info"
                    :isDisabled="true"
                  ></va-button>
                </td>
              </tr>
              <tr>
                <td>
                  <va-button
                    name="Danger"
                    theme="danger"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Danger"
                    theme="danger"
                    size="btn-lg"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Danger"
                    theme="danger"
                    size="btn-sm"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Danger"
                    theme="danger"
                    size="btn-xs"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Danger"
                    theme="danger"
                    :isFlat="true"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Danger"
                    theme="danger"
                    :isDisabled="true"
                  ></va-button>
                </td>
              </tr>
              <tr>
                <td>
                  <va-button
                    name="Warning"
                    theme="warning"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Warning"
                    theme="warning"
                    size="btn-lg"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Warning"
                    theme="warning"
                    size="btn-sm"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Warning"
                    theme="warning"
                    size="btn-xs"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Warning"
                    theme="warning"
                    :isFlat="true"
                  ></va-button>
                </td>
                <td>
                  <va-button
                    name="Warning"
                    theme="warning"
                    :isDisabled="true"
                  ></va-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </va-box>
    </div>
    <div class="col-md-6">

      <va-box
        title="Block Buttons"
        widgetType=""
      >
        <div slot="content" class="table-responsive">
          <va-button
            name=".btn-block"
          ></va-button>

          <va-button
            name=".btn-block"
            :isFloat="true"
          ></va-button>


          <va-button
            name=".btn-block"
            size="btn-sm"
          ></va-button>


        </div>

      </va-box>

      <va-box
        title="Horizontal Button Group"
        widgetType=""
      >

      </va-box>

      <va-box
        title="Button Addon"
        widgetType=""
      >

      </va-box>

      <va-box
        title="Split buttons"
        widgetType=""
      >

      </va-box>

      <va-box
        title="Social Buttons (By Lipis)"
        widgetType=""
      >

      </va-box>

    </div>
  </row>
</template>

<script>
import VABox from '../../widgets/VABox.vue'
import VAButton from '../../components/VAButton.vue'

export default {
  name: 'Buttons',
  created () {

  },
  components: {
    'va-box': VABox,
    'va-button': VAButton
  }
}
</script>
