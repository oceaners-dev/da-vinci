import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Select, SelectProps } from './Select'
import { faker } from '@faker-js/faker'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'Checkbox component',
      },
    },
  },
  //   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    clearable: {
      control: {
        type: 'boolean',
      },
    },
    closeOnEsc: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    initiallyOpened: {
      control: {
        type: 'boolean',
      },
    },
    multiple: {
      control: {
        type: 'boolean',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Select>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const DefaultChecked = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args

DefaultChecked.args = {
  data: Array.from({ length: 10 }, () => ({
    label: faker.name.firstName(),
    value: faker.name.firstName(),
  })),
  description: 'Description',
  placeholder: 'Placeholder',
}
