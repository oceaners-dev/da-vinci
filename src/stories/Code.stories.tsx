import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Code } from '../components/code/Code'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/Code',
  component: Code,
} as ComponentMeta<typeof Code>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Default = Template.bind({})

Default.args = {
  language: 'tsx',
  code: `<Button
  onClick={() => {
    toast.success({
      title: 'Ey',
      content: 'Yo',
    })
}}>
  Trigger Notification
</Button>`,
}
