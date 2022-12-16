import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SideSheet } from '../components/sidesheet/SideSheet'
import { Button } from '../components/button/Button'

export default {
  title: 'Overlays/SideSheet',
  component: SideSheet,
  //   argTypes: {
  //     isOpen: {
  //       control: {
  //         disable: true,
  //       },
  //     },
  //   },
} as ComponentMeta<typeof SideSheet>

const Template: ComponentStory<typeof SideSheet> = (args) => {
  const [open, setOpen] = useState(false)
  // FIXME: useState not working

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        Open SideSheet
      </Button>
      <SideSheet isOpen={open} onClose={() => setOpen(false)} {...args} />
    </div>
  )
}

export const Default = Template.bind({})
// export const HeaderWithSidebar = Template.bind({});
// export const Footer = Template.bind({});

Default.args = {
  children: <div>Privacy Policies</div>,
  footerButtons: [
    {
      text: 'Save',
      onClick: () => console.log('ey'),
      buttonClasses: 'bg-blue-500 text-white',
    },
    {
      text: 'Cancel',
      onClick: () => console.log('yo'),
      buttonClasses: 'bg-red-500 text-white',
    },
  ],
}

// HeaderWithSidebar.args = {
//   fullHeight: true,
//   hasSidebar: true,
// };
