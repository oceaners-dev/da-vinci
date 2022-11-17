import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Radio, RadioComponent, RadioProps } from './Radio'
import { RadioGroup, RadioGroupProps } from './group'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/Radio',
  component: Radio,
  subcomponents: { RadioGroup },
  parameters: {
    docs: {
      description: {
        component: 'Radio component',
      },
    },
  },
  //   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<RadioComponent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<RadioComponent> = (args) => <Radio {...args} />
const GroupTemplate: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args}>
    <Radio label="Group Radio 1" name="one" />
    <Radio label="Group Radio 2" name="two" />
  </RadioGroup>
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