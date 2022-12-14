import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Portal } from '../components/portal/Portal';
import { Button } from '../components/button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/Portal',
  component: Portal,
} as ComponentMeta<typeof Portal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Portal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)}>Add</Button>
      Portal is {isOpen ? 'added' : '-'}
      {isOpen && <Portal {...args} />}
    </div>
  );
};

export const Default = Template.bind({});
export const LimitPageCount = Template.bind({});

Default.args = {};
