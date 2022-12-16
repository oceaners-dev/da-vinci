import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Breadcrumb } from '../components/breadcrumb/Breadcrumb'
import { SvgCalendarOutline } from '../components/datepicker/svg'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  //   parameters: {
  //     docs: {
  //       description: {
  //         component: 'Breadcrumb component',
  //       },
  //     },
  //     LabelPlaceholder: {
  //       description: {
  //         component: 'Breadcrumb component',
  //       },
  //     },
  //   },
} as ComponentMeta<typeof Breadcrumb>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
)

export const Default = Template.bind({})

Default.args = {
  classNames: { link: 'text-sm', divider: 'text-xs' },
  items: [
    {
      label: 'Home',
      icon: <SvgCalendarOutline />,
      href: '#',
    },
    {
      label: 'Users',
      href: '#',
    },
    {
      label: 'John Doe',
      href: '#',
    },
  ],
}
