import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tabs } from '../components/tabs/Tabs'

export default {
  component: Tabs,
  title: 'Navigation/Tabs',
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => {
  return <Tabs {...args} />
}

const options = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-basket"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <polyline points="7 10 12 4 17 10"></polyline>
        <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"></path>
        <circle cx="12" cy="15" r="2"></circle>
      </svg>
    ),
    label: 'Tab 1',
    // content: <div>Tab 1</div>,
  },
  {
    label: 'Tab 2',
    // content: <div>Tab 2</div>,
  },
  {
    label: 'Tab 3',
    // content: <div>Tab 3</div>,
  },
]

export const Default = Template.bind({})

Default.args = {
  options,
}
