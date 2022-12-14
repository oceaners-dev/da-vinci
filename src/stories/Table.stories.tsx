import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Table } from '../components/table/Table'
import { faker } from '@faker-js/faker'
import { Tag } from '../components/tag/Tag'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/Table',
  component: Table,
  argTypes: {
    maxRows: {
      control: {
        type: 'number',
        min: 1,
        max: 100,
        default: 15,
      },
    },
    onPageChange: {
      type: 'function',
    },
  },

  //   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof Table>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => {
  return (
    <Table
      {...args}
      onPageChange={(a) => {
        console.log({ a })
      }}
    />
  )
}

export const Default = Template.bind({})
export const Render = Template.bind({})

const students = Array.from({ length: 100 }, () => ({
  name: faker.name.fullName(),
  age: faker.random.numeric(2),
  grade: faker.random.numeric(1),
  email: faker.internet.email(),
}))

Default.args = {
  rows: students,
  cols: Object.keys(students[0]).map((x) => {
    if (x === 'age') {
      return {
        title: x,
        width: 'w-[200px]',
        sorter(a, b) {
          return a[x] - b[x]
        },
      }
    } else if (x === 'grade') {
      return {
        title: x,
        width: 'w-[200px]',
        sorter(a, b) {
          return a[x] - b[x]
        },
      }
    } else if (x === 'name') {
      return {
        title: x,
        width: 'w-[200px]',
        search: true,
      }
    } else {
      return {
        title: x,
        width: 'w-[200px]',
      }
    }
  }),
}

Render.args = {
  rows: Array.from({ length: 100 }, () => ({
    name: faker.name.fullName(),
    age: <Tag>{faker.random.numeric(2)}</Tag>,
    grade: faker.random.numeric(1),
    email: faker.internet.email(),
  })),
  cols: Object.keys(students[0]).map((x) => {
    if (x === 'age') {
      return {
        title: x,
        width: 'w-[200px]',
        sorter(a, b) {
          return a[x] - b[x]
        },
        render: () => <Tag className="bg-sky-500 text-white">{x}</Tag>,
      }
    } else if (x === 'grade') {
      return {
        title: x,
        width: 'w-[200px]',
        sorter(a, b) {
          return a[x] - b[x]
        },
      }
    } else if (x === 'name') {
      return {
        title: x,
        width: 'w-[200px]',
        search: true,
      }
    } else {
      return {
        title: x,
        width: 'w-[200px]',
      }
    }
  }),
}
