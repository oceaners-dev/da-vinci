import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Indicator } from '../components/indicator/Indicator'
import { Avatar } from '../components/avatar/Avatar'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/Indicator',
  component: Indicator,
} as ComponentMeta<typeof Indicator>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Indicator> = (args) => (
  <Indicator {...args} />
)

export const Default = Template.bind({})
export const Bordered = Template.bind({})

Default.args = {
  children: <Avatar value="AD" bgClassName="gray-300" />,
  value: 5,
}

Bordered.args = {
  children: <Avatar value="AD" bgClassName="gray-300" />,
  value: 5,
  bordered: true,
}
