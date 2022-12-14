import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '../components/modal/Modal';
import { Button } from '../components/button/Button';

export default {
  title: 'Display/Modal (not finished)',
  component: Modal,
  argTypes: {
    isOpen: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false);
  // FIXME: useState not working

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal isOpen={open} onClose={() => setOpen(false)} {...args} />
    </div>
  );
};

export const Default = Template.bind({});
// export const HeaderWithSidebar = Template.bind({});
// export const Footer = Template.bind({});

Default.args = {
  children: <div>Privacy Policies</div>,
};

// HeaderWithSidebar.args = {
//   fullHeight: true,
//   hasSidebar: true,
// };
