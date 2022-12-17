import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text } from '../components/text/Text'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/Text',
  component: Text,
} as ComponentMeta<typeof Text>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => (
  <>
    <Text size="xs">Severus Snape</Text>
    <Text size="xs" decoration="underline">
      Severus Snape
    </Text>
    <Text size="xs" decoration="line-through">
      Severus Snape
    </Text>
    <Text
      size="xs"
      as="div"
      highlight={['div']}
      highlightBgColor="primary"
      highlightColor="text-red-600"
    >
      Severus Snape as div
    </Text>
    <Text size="lg" as="p">
      Severus Snape
    </Text>
    <Text size="3xl" as="p">
      Severus Snape
    </Text>
  </>
)

export const Default = Template.bind({})

Default.args = {}
