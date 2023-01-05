import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Blockquote } from '../components/blockquote/Blockquote'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Blockquote,
  parameters: {
    LabelPlaceholder: {
      description: {
        component: 'Blockquote component',
      },
    },
    docs: {
      description: {
        component: 'Blockquote component',
      },
    },
  },
  title: 'Typography/Blockquote',
} as ComponentMeta<typeof Blockquote>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Blockquote> = (args) => (
  <Blockquote {...args} />
)

export const Default = Template.bind({})
export const Bordered = Template.bind({})
export const WithImage = Template.bind({})
export const Color = Template.bind({})
export const Size = Template.bind({})

Default.args = {
  author: 'Albus Dumbledore',
  quote:
    'People find it far easier to forgive others for being wrong than being right.',
  source: 'https://parade.com/1254364/jessicasager/dumbledore-quotes/',
}
