<template>
  <main>
    <FormKit
      id="basic-register-form"
      type="form"
      v-model="values"
      @submit="onSubmit"
    >
      <FormKit
        v-for="item in inputs"
        :key="item.id"
        :id="`${item.id}-${item.name}`"
        :name="item.name"
        :label="item.label"
        :placeholder="item.placeholder"
        :type="item.type"
        :validation="item.validation"
        :options="item.options"
        :validation-message="item['validation-message']"
      />
    </FormKit>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { IInputs, IValues } from '../types'

export default defineComponent({
  name: 'App',
  setup() {
    const values = ref({
      name: '',
      email: '',
      sex: '',
      description: '',
    })

    const inputs: IInputs[] = [
      {
        id: 1,
        name: 'name',
        label: 'Name',
        placeholder: 'Enter your name',
        type: 'text',
        validation: 'required',
      },
      {
        id: 2,
        name: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        type: 'email',
        validation: 'required|email',
      },
      {
        id: 3,
        name: 'sex',
        placeholder: 'Select your sex',
        type: 'select',
        validation: 'required',
        options: ['male', 'female'],
        'validation-message': {
          is(node) {
            return `Please select your ${node.value}`
          },
        }
      },
      {
        id: 4,
        name: 'description',
        label: 'Description',
        placeholder: 'Enter your description',
        type: 'textarea',
        validation: 'required',
      },
    ]

    const onSubmit = (values: IValues) => {
      setTimeout(() => {
        console.log(
          JSON.parse(JSON.stringify(values))
        )
      }, 1000)
    }

    return {
      values,
      inputs,
      onSubmit,
    }
  }
})
</script>

<style lang="scss">
@import '../assets/main.scss';
</style>
