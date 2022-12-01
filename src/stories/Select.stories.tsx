import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '../components/select/Select';
import { faker } from '@faker-js/faker';
import uuid from 'react-uuid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'Select component',
      },
    },
    Default: {
      description: {
        component: 'With `label` and `helperText` options',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ marginBottom: '14em' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    onChange: { action: 'onChange' },
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
export const Multiple = Template.bind({});
export const Disabled = Template.bind({});
export const HideSelectedOptions = Template.bind({});

Default.args = {
  options: Array.from({ length: 10 }, (_, i) => ({
    value: uuid(),
    label: faker.name.firstName(),
  })),
  label: "Dumbledore's Army",
  helperText: 'Join the army',
};

Default.parameters = {
  docs: {
    description: {
      story: 'With `label` and `helperText` options',
    },
  },
};

////////////////////////
Multiple.args = {
  multiple: true,
  options: Array.from({ length: 10 }, (_, i) => ({
    value: uuid(),
    label: faker.name.firstName(),
  })),
  label: "Dumbledore's Army",
  helperText: 'Join the army',
};
Multiple.parameters = {
  docs: {
    description: {
      story: 'With `multiple` option',
    },
  },
};

////////////////////////
Disabled.args = {
  disabled: true,
  multiple: true,
  options: Array.from({ length: 10 }, (_, i) => ({
    value: uuid(),
    label: faker.name.firstName(),
  })),
  label: "Dumbledore's Army",
  helperText: 'Join the army',
};
Disabled.parameters = {
  docs: {
    description: {
      story: 'With `disabled` option',
    },
  },
};

////////////////////////
HideSelectedOptions.args = {
  hideSelectedOptions: true,
  multiple: true,
  options: Array.from({ length: 10 }, (_, i) => ({
    value: uuid(),
    label: faker.name.firstName(),
  })),
  label: "Dumbledore's Army",
  helperText: 'Join the army',
};
HideSelectedOptions.parameters = {
  docs: {
    description: {
      story: 'With `disabled` option',
    },
  },
};
