<template>
  <span>
    <FormKit
      id="checkbox"
      type="form" :actions="false" #default="{ value }"
    >
      <FormKit
        type="checkbox"
        label="Terms and Conditions"
        help="Do you agree to our terms of service?"
        name="terms"
        :value="true"
        validation="accepted"
        validation-visibility="dirty"
      />
      <pre wrap>{{ value }}</pre>
    </FormKit>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { IInputs, IValues } from '../../types'

export default defineComponent({
  name: 'Checkbox',

  setup() {
    
  }
})
</script>