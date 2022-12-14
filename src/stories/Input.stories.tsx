import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from '../components/input/Input'

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
    LabelPlaceholder: {
      description: {
        component: 'Input component',
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
export const LabelPlaceholder = Template.bind({})
export const LeftRightLabels = Template.bind({})
export const Components = Template.bind({})
export const Disabled = Template.bind({})

Default.args = {
  defaultValue: 'Hello',
}

LabelPlaceholder.args = {
  labelPlaceholder: 'Title',
  helperText: 'Title must be happy.',
}

LabelPlaceholder.parameters = {
  docs: {
    description: {
      story: "Don't use **labelPlaceholder** with **placeholder**",
    },
  },
}

LeftRightLabels.args = {
  labelLeft: 'https://',
  labelRight: '.com',
}

Components.args = {
  leftComponent: (
    <div className="flex h-auto relative ml-2 items-center justify-center bg-sky-200 hover:bg-green-200 aspect-square rounded-full px-2 z-30 hover:rotate-[360deg] transform transition-all duration-500 cursor-pointer">
      🐋
    </div>
  ),
}

Disabled.args = {
  disabled: true,
  labelLeft: 'https://',
  labelRight: '.com',
  defaultValue: 'google',
}
