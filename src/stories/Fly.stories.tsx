import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Fly } from '../components/fly/Fly'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/Fly',
  component: Fly,
} as ComponentMeta<typeof Fly>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Fly> = (args) => <Fly {...args} />

export const Default = Template.bind({})

Default.args = {
  bar: <div>Flying title</div>,
  children: (
    <div className="text-xs">Time to creativity. Let&lsquo;s think.</div>
  ),
}
