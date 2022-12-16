import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tooltip } from '../components/tooltip/Tooltip'
import { Space } from '../components/space/Space'

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <>
    <Space spacing={100} />
    <Tooltip {...args} />
  </>
)

export const Default = Template.bind({})

Default.args = {
  content: 'Operation not permitted',
  children: <div>Hover me</div>,
}
