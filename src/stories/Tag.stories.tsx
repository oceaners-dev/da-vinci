import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tag } from '../components/tag/Tag'
import { TagGroup } from '../components/tag/Group'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Tag,
  title: 'Display/Tag',
} as ComponentMeta<typeof Tag>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tag> = () => {
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
      max: 100,
      min: 1,
      type: 'number',
    },
  },
  showMore: {
    control: {
      type: 'boolean',
    },
  },
}
