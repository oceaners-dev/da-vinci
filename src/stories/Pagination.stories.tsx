import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '../components/pagination/Pagination';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: 'Pagination component',
      },
    },
    LabelPlaceholder: {
      description: {
        component: 'Pagination component',
      },
    },
  },
} as ComponentMeta<typeof Pagination>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = Template.bind({});
export const LimitPageCount = Template.bind({});

Default.args = {
  total: 20,
  current: 3,
  perPage: 2,
};

LimitPageCount.args = {
  maxPageCount: 5,
  total: 20,
  current: 3,
  perPage: 2,
};
