import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Alert } from '../components/alert/Alert'
import { NotificationIcons } from '../components/notification/svg'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'Scroll `30`px to see the magic',
      },
    },
  },
} as ComponentMeta<typeof Alert>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const Default = Template.bind({})
export const Success = Template.bind({})

Default.args = {
  title: 'Error',
  content: 'Operation not permitted',
}

Success.args = {
  title: 'Success',
  content: 'Order delivered',
  icon: NotificationIcons.success,
  color: '#4BB543',
}
