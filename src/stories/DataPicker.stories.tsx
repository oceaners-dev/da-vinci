import { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DatePicker } from '../components/datepicker/DatePicker'

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
  const [date, setDate] = useState<Date>(new Date())

  return (
    <DatePicker
      date={date}
      onChange={(a) => {
        setDate(a)
      }}
    />
  )
}

const WithoutPortalTemplate: ComponentStory<typeof DatePicker> = () => {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <DatePicker
      date={date}
      openInModal={false}
      onChange={(a) => {
        setDate(a)
      }}
    />
  )
}

export const Default = Template.bind({})
export const WithoutPortal = WithoutPortalTemplate.bind({})
