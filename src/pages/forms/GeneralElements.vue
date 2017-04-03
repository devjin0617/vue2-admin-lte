<template>
  <div class="row">
    <div class="col-md-6">

      <va-box
          title="Quick Example"
          theme="box-primary"
          widgetType="">

          <div slot="content">

            <va-form
              title="Email address"
              vaId="exampleInputEmail1"
              type="email"
              placeholder="Enter email"
            >
            </va-form>

            <va-form
              title="Password"
              vaId="exampleInputPassword1"
              type="password"
              placeholder="Password"
            >
            </va-form>

            <va-form
              title="File input"
              vaId="exampleInputFile"
              type="file"
              helpBlock="Example block-level help text here."
            >
            </va-form>

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

    </div>
  </div>
</template>

<script>
import VABox from '../../widgets/VABox'
import VAForm from '../../components/VAForm'
import VACheckBox from '../../components/VACheckBox'
import VAInput from '../../components/VAInput'

export default {
  name: 'general-elements',
  created () {

  },
  components: {
    'va-box': VABox,
    'va-form': VAForm,
    'va-checkbox': VACheckBox,
    'va-input': VAInput
  }
}
</script>
