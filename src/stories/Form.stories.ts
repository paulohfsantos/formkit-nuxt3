import type { StoryObj, Meta } from '@storybook/vue3'
import Form from '../components/Form/Form.vue'
import type { IInputs, IValues } from '../types'

const Meta = {
  title: 'Form',
  component: Form,
  tags: ['autodocs'],
} satisfies Meta<typeof Form>

export default Meta
type StoryForm = StoryObj<typeof Form>;

export const Template: StoryForm = {
  render: (args) => ({
    components: { Form },
    template: '<Form v-bind="args" />',
  }),
}
