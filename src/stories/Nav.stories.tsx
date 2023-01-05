import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Nav } from '../components/nav/Nav'

export default {
  component: Nav,
  title: 'Navigation/Nav (not finished)',
} as ComponentMeta<typeof Nav>

const Template: ComponentStory<typeof Nav> = (args) => {
  return (
    <Nav
      //   className="!bg-gray-200 border-solid border-2 border-gray-400 text-gray-500 text-sm font-light"
      {...args}
    />
  )
}

const items = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
        />
      </svg>
    ),
    label: 'Home',
    link: '/',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
        />
      </svg>
    ),
    label: 'Home',
    link: '/',
  },
]

export const Vertical = Template.bind({})
export const Horizontal = Template.bind({})
// export const HeaderWithSidebar = Template.bind({});
// export const Footer = Template.bind({});

Vertical.args = {
  items: items,
}

Horizontal.args = {
  items: items,
  vertical: false,
}

// HeaderWithSidebar.args = {
//   fullHeight: true,
//   hasSidebar: true,
// };
