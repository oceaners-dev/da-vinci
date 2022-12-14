import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from '../components/layout/Layout'
import { Nav } from '../components/nav/Nav'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/Layout',
  component: Layout,
  parameters: {
    docs: {
      description: {
        component: 'Layout component',
      },
    },
    LabelPlaceholder: {
      description: {
        component: 'Layout component',
      },
    },
  },
} as ComponentMeta<typeof Layout>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

export const Default = Template.bind({})
export const HeaderWithSidebar = Template.bind({})
export const Footer = Template.bind({})

Default.args = {
  fullHeight: true,
  hasSidebar: true,
  children: (
    <>
      <Nav className="!bg-gray-200 border-solid border-2 border-gray-400 text-gray-500 text-sm font-light" />
      <div className="bg-gray-200 border-solid border-2 border-gray-400 text-gray-500 text-sm font-light w-full h-full flex justify-center items-center">
        Content
      </div>
    </>
  ),
}

HeaderWithSidebar.args = {
  fullHeight: true,
  hasSidebar: true,
  header: (
    <div className="bg-gray-200 border-solid border-2 border-gray-400 text-gray-500 text-sm font-light h-10 flex justify-center items-center">
      Header component
    </div>
  ),
  children: (
    <>
      <Nav className="!bg-gray-200 border-solid border-2 border-gray-400 text-gray-500 text-sm font-light" />
      <div className="bg-gray-200 border-solid border-2 border-gray-400 text-gray-500 text-sm font-light w-full h-auto flex justify-center items-center">
        Content
      </div>
    </>
  ),
}

Footer.args = {
  fullHeight: true,
  hasSidebar: true,
  footer: (
    <div className="bg-gray-200 border-solid border-2 border-gray-400 text-gray-500 text-sm font-light h-10 flex justify-center items-center">
      Footer component
    </div>
  ),
  children: (
    <>
      <Nav className="!bg-gray-200 border-solid border-2 border-gray-400 text-gray-500 text-sm font-light" />
      <div className="bg-gray-200 border-solid border-2 border-gray-400 text-gray-500 text-sm font-light w-full h-auto flex justify-center items-center">
        Content
      </div>
    </>
  ),
}

// WithImage.parameters = {
//   docs: {
//     description: {
//       story:
//         'You can use `imgSrc` prop to add an image to the Layout. You can also use `alt` prop to add `alt` attribute to the `img` tag.',
//     },
//   },
// };
