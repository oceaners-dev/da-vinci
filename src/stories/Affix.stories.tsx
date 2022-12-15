import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Affix } from '../components/affix/Affix'
import { Button } from '../components/button/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Overlays/Affix',
  component: Affix,
  parameters: {
    docs: {
      description: {
        component: 'Scroll `30`px to see the magic',
      },
    },
  },
} as ComponentMeta<typeof Affix>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Affix> = (args) => <Affix {...args} />

export const Default = Template.bind({})

Default.args = {
  children: <Button>Scroll to Top</Button>,
  displayPosition: 30,
  scrollToTopOnClick: true,
}
