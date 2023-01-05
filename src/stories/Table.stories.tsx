import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Table } from '../components/table/Table'
import { faker } from '@faker-js/faker'
import { Tag } from '../components/tag/Tag'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  argTypes: {
    maxRows: {
      control: {
        default: 15,
        max: 100,
        min: 1,
        type: 'number',
      },
    },
    onPageChange: {
      type: 'function',
    },
  },
  component: Table,
  title: 'Display/Table',

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
  age: faker.random.numeric(2),
  email: faker.internet.email(),
  grade: faker.random.numeric(1),
  name: faker.name.fullName(),
}))

Default.args = {
  cols: Object.keys(students[0]).map((x) => {
    if (x === 'age') {
      return {
        sorter(a, b) {
          return a[x] - b[x]
        },
        title: x,
        width: 'w-[200px]',
      }
    } else if (x === 'grade') {
      return {
        sorter(a, b) {
          return a[x] - b[x]
        },
        title: x,
        width: 'w-[200px]',
      }
    } else if (x === 'name') {
      return {
        search: true,
        title: x,
        width: 'w-[200px]',
      }
    } else {
      return {
        title: x,
        width: 'w-[200px]',
      }
    }
  }),
  rows: students,
}

Render.args = {
  cols: Object.keys(students[0]).map((x) => {
    if (x === 'age') {
      return {
        render: () => <Tag className="bg-sky-500 text-white">{x}</Tag>,
        sorter(a, b) {
          return a[x] - b[x]
        },
        title: x,
        width: 'w-[200px]',
      }
    } else if (x === 'grade') {
      return {
        sorter(a, b) {
          return a[x] - b[x]
        },
        title: x,
        width: 'w-[200px]',
      }
    } else if (x === 'name') {
      return {
        search: true,
        title: x,
        width: 'w-[200px]',
      }
    } else {
      return {
        title: x,
        width: 'w-[200px]',
      }
    }
  }),
  rows: Array.from({ length: 100 }, () => ({
    age: <Tag>{faker.random.numeric(2)}</Tag>,
    email: faker.internet.email(),
    grade: faker.random.numeric(1),
    name: faker.name.fullName(),
  })),
}
