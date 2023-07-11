import type { StoryObj, Meta } from '@storybook/vue3'
import Form from './Form.vue'
import { IInputs, IValues } from '../types'

const Meta: Meta<typeof Form> = {
  title: 'Form',
  component: Form,
  tags: ['autodocs'],
}

export default Meta
type StoryForm = StoryObj<typeof Form>;

export const Template: StoryForm = {
  render: (args) => ({
    components: { Form },
    template: '<Form />',
  }),
}
