import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CheckBox, CheckboxComponent, CheckboxProps } from './CheckBox'
import { CheckboxGroup, CheckboxGroupProps } from './group'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/CheckBox',
  component: CheckBox,
  subcomponents: { CheckboxGroup },
  parameters: {
    docs: {
      description: {
        component: 'Checkbox component',
      },
    },
  },
  //   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<CheckboxComponent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<CheckboxComponent> = (args) => (
  <CheckBox {...args} />
)
const GroupTemplate: ComponentStory<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup {...args}>
    <CheckBox label="Group CheckBox 1" name="one" />
    <CheckBox label="Group CheckBox 2" name="two" />
  </CheckboxGroup>
)

export const DefaultChecked = Template.bind({})
export const SelectableLabel = Template.bind({})
export const Group = GroupTemplate.bind({})
export const GroupOrientation = GroupTemplate.bind({})
export const GroupDefaultSelected = GroupTemplate.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultChecked.args = {
  defaultChecked: true,
  name: 'Yo',
  label: 'I have read the terms',
  selectableLabel: true,
}

SelectableLabel.args = {
  defaultChecked: true,
  name: 'Yo',
  label: 'I have read the terms',
  selectableLabel: false,
}

Group.args = {
  // orientation: 'horizontal',
}

GroupOrientation.args = {
  orientation: 'vertical',
}

GroupDefaultSelected.args = {
  defaultValue: [{ name: 'one', value: true }],
}
