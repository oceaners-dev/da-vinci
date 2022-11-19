import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tag } from '../components/tag/Tag'
import { TagGroup } from '../components/tag/Group'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tag> = (args) => {
  return <Tag>Tag</Tag>
}
const Group: ComponentStory<typeof TagGroup> = (args) => {
  return (
    <TagGroup {...args}>
      <Tag type="ghost">Online</Tag>
      <Tag type="ghost" avatarSrc="/image/nietzszche.jpg">
        Online
      </Tag>
      <Tag type="light" closable>
        Moderator
      </Tag>
      <Tag>Turkey</Tag>
    </TagGroup>
  )
}

export const Default = Template.bind({})
export const GroupDefault = Group.bind({})
export const GroupShowMore = Group.bind({})

Default.args = {}
GroupDefault.args = {}
GroupShowMore.args = {
  maxTagCount: 2,
  showMore: true,
}
GroupShowMore.argTypes = {
  maxTagCount: {
    control: {
      type: 'number',
      min: 1,
      max: 100,
    },
  },
  showMore: {
    control: {
      type: 'boolean',
    },
  },
}
