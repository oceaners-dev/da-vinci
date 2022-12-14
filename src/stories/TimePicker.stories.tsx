import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TimePicker } from '../components/timepicker/TimePicker';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/TimePicker',
  component: TimePicker,
  parameters: {
    docs: {
      description: {
        component:
          "Don't forget to define a width for the input for preventing the input from expanding",
      },
    },
  },
} as ComponentMeta<typeof TimePicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TimePicker> = () => {
  return (
    <TimePicker
      defaultValue="13:35"
      onChange={(e) => {
        console.log({ e });
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
