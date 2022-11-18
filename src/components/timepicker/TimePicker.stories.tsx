import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TimePicker } from './TimePicker'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/TimePicker',
  component: TimePicker,
} as ComponentMeta<typeof TimePicker>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TimePicker> = (args) => {
  return <TimePicker />
}

export const Default = Template.bind({})
Default.args = {}
