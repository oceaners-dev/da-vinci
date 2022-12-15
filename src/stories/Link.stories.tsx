import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Link } from '../components/link/Link'

export default {
  title: 'Base/Link (not finished)',
  component: Link,
} as ComponentMeta<typeof Link>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Link> = (args) => {
  return <Link {...args} />
}

export const Default = Template.bind({})
// export const HeaderWithSidebar = Template.bind({});
// export const Footer = Template.bind({});

Default.args = {
  children: 'Privacy Policies',
  href: '/privacy-policies',
}

// HeaderWithSidebar.args = {
//   fullHeight: true,
//   hasSidebar: true,
// };
