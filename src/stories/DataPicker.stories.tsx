import { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DatePicker from '../components/datepicker/DatePicker'

export default {
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component:
          'For trigger mobile portal datepicker, use developer tools and set the device to mobile.',
      },
    },
  },
  title: 'Form/DatePicker',
} as ComponentMeta<typeof DatePicker>

const Template: ComponentStory<typeof DatePicker> = () => {
  const [date, setDate] = useState<string>(new Date().toString())

  return (
    <DatePicker
      value={date}
      onChange={(a) => {
        setDate(a.target.value)
      }}
    />
  )
}

const WithoutPortalTemplate: ComponentStory<typeof DatePicker> = () => {
  const [date, setDate] = useState<string>(new Date().toString())

  return (
    <DatePicker
      value={date}
      onChange={(a) => {
        setDate(a.target.value)
      }}
    />
  )
}

export const Default = Template.bind({})
export const WithoutPortal = WithoutPortalTemplate.bind({})
