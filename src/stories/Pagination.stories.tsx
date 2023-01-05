import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Pagination } from '../components/pagination/Pagination'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Pagination,
  parameters: {
    LabelPlaceholder: {
      description: {
        component: 'Pagination component',
      },
    },
    docs: {
      description: {
        component: 'Pagination component',
      },
    },
  },
  title: 'Navigation/Pagination',
} as ComponentMeta<typeof Pagination>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
)

export const Default = Template.bind({})
export const LimitPageCount = Template.bind({})

Default.args = {
  current: 3,
  perPage: 2,
  total: 20,
}

LimitPageCount.args = {
  current: 3,
  maxPageCount: 5,
  perPage: 2,
  total: 20,
}
