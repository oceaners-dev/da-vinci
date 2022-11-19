import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DatePicker } from './DatePicker'

export default {
  title: 'Inputs/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component:
          'For trigger mobile portal datepicker, use developer tools and set the device to mobile.',
      },
    },
  },
} as ComponentMeta<typeof DatePicker>

const Template: ComponentStory<typeof DatePicker> = (args) => {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <DatePicker
      date={date}
      onChange={(a) => {
        console.log(a)
        setDate(a)
      }}
    />
  )
}

const WithoutPortalTemplate: ComponentStory<typeof DatePicker> = (args) => {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <DatePicker
      date={date}
      portalAtMobile={false}
      onChange={(a) => {
        console.log(a)
        setDate(a)
      }}
    />
  )
}

export const Default = Template.bind({})
export const WithoutPortal = WithoutPortalTemplate.bind({})
