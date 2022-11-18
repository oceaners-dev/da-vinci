import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Radio } from '../radio'
import { Input } from './Input'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'Input component',
      },
    },
  },
  argTypes: {
    sizing: {
      control: {
        type: 'select',
        options: ['default', 'small', 'large'],
      },
    },
    rightIcon: {
      control: {
        type: 'select',
        options: ['🚨', '✅', ''],
      },
    },
    leftIcon: {
      control: {
        type: 'select',
        options: ['🚨', '✅', ''],
      },
    },
    onChange: { action: 'onChange' },
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  defaultValue: 'Hello',
}
