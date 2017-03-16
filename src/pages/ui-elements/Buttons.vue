<template>
  <div class="row">
    <div class="col-md-12">
      <Box
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
                  <Button
                    name="Default"
                    theme="default"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Default"
                    theme="default"
                    size="btn-lg"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Default"
                    theme="default"
                    size="btn-sm"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Default"
                    theme="default"
                    size="btn-xs"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Default"
                    theme="default"
                    :isFlat="true"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Default"
                    theme="default"
                    :isDisabled="true"
                  ></Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Button
                    name="Primary"
                    theme="primary"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Primary"
                    theme="primary"
                    size="btn-lg"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Primary"
                    theme="primary"
                    size="btn-sm"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Primary"
                    theme="primary"
                    size="btn-xs"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Primary"
                    theme="primary"
                    :isFlat="true"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Primary"
                    theme="primary"
                    :isDisabled="true"
                  ></Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Button
                    name="Success"
                    theme="success"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Success"
                    theme="success"
                    size="btn-lg"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Success"
                    theme="success"
                    size="btn-sm"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Success"
                    theme="success"
                    size="btn-xs"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Success"
                    theme="success"
                    :isFlat="true"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Success"
                    theme="success"
                    :isDisabled="true"
                  ></Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Button
                    name="Info"
                    theme="info"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Info"
                    theme="info"
                    size="btn-lg"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Info"
                    theme="info"
                    size="btn-sm"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Info"
                    theme="info"
                    size="btn-xs"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Info"
                    theme="info"
                    :isFlat="true"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Info"
                    theme="info"
                    :isDisabled="true"
                  ></Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Button
                    name="Danger"
                    theme="danger"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Danger"
                    theme="danger"
                    size="btn-lg"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Danger"
                    theme="danger"
                    size="btn-sm"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Danger"
                    theme="danger"
                    size="btn-xs"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Danger"
                    theme="danger"
                    :isFlat="true"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Danger"
                    theme="danger"
                    :isDisabled="true"
                  ></Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Button
                    name="Warning"
                    theme="warning"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Warning"
                    theme="warning"
                    size="btn-lg"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Warning"
                    theme="warning"
                    size="btn-sm"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Warning"
                    theme="warning"
                    size="btn-xs"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Warning"
                    theme="warning"
                    :isFlat="true"
                  ></Button>
                </td>
                <td>
                  <Button
                    name="Warning"
                    theme="warning"
                    :isDisabled="true"
                  ></Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Box>
    </div>
    <div class="col-md-6">

      <Box
        title="Block Buttons"
        widgetType=""
      >
        <div slot="content" class="table-responsive">
          <Button
            name=".btn-block"
          ></Button>

          <Button
            name=".btn-block"
            :isFloat="true"
          ></Button>


          <Button
            name=".btn-block"
            size="btn-sm"
          ></Button>


        </div>

      </Box>

      <Box
        title="Horizontal Button Group"
        widgetType=""
      >

      </Box>

      <Box
        title="Button Addon"
        widgetType=""
      >

      </Box>

      <Box
        title="Split buttons"
        widgetType=""
      >

      </Box>

      <Box
        title="Social Buttons (By Lipis)"
        widgetType=""
      >

      </Box>

    </div>
  </div>
</template>

<script>
import Box from '../../widgets/Box.vue'
import Button from '../../components/Button.vue'

export default {
  name: 'Buttons',
  created () {

  },
  components: {
    Box,
    Button
  }
}
</script>
