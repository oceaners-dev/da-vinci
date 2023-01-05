import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Select } from '../components/select/Select'
import { faker } from '@faker-js/faker'
import uuid from 'react-uuid'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  argTypes: {
    disabled: { control: 'boolean' },
    onChange: { action: 'onChange' },
  },
  component: Select,
  decorators: [
    (Story) => (
      <div style={{ marginBottom: '14em' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    Default: {
      description: {
        component: 'With `label` and `helperText` options',
      },
    },
    docs: {
      description: {
        component: 'Select component',
      },
    },
  },
  title: 'Form/Select',
} as ComponentMeta<typeof Select>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})
export const Multiple = Template.bind({})
export const Disabled = Template.bind({})
export const CustomOptionComponent = Template.bind({})
export const HideSelectedOptions = Template.bind({})

Default.args = {
  helperText: 'Join the army',
  label: "Dumbledore's Army",
  options: Array.from({ length: 10 }, (_) => ({
    label: faker.name.firstName(),
    value: uuid(),
  })),
}

Default.parameters = {
  docs: {
    description: {
      story: 'With `label` and `helperText` options',
    },
  },
}

////////////////////////
Multiple.args = {
  helperText: 'Join the army',
  label: "Dumbledore's Army",
  multiple: true,
  options: Array.from({ length: 10 }, (_) => ({
    label: faker.name.firstName(),
    value: uuid(),
  })),
}
Multiple.parameters = {
  docs: {
    description: {
      story: 'With `multiple` option',
    },
  },
}

////////////////////////
Disabled.args = {
  disabled: true,
  helperText: 'Join the army',
  label: "Dumbledore's Army",
  multiple: true,
  options: Array.from({ length: 10 }, (_) => ({
    label: faker.name.firstName(),
    value: uuid(),
  })),
}
Disabled.parameters = {
  docs: {
    description: {
      story: 'With `disabled` option',
    },
  },
}

////////////////////////
CustomOptionComponent.args = {
  helperText: 'Join the army',
  label: "Dumbledore's Army",
  multiple: true,
  options: Array.from({ length: 10 }, (_) => ({
    label: faker.name.firstName(),
    value: uuid(),
  })),
  renderOptions: ({ label }) => (
    <div className="bg-blue-500 w-full flex justify-between hover:bg-black text-white px-3 py-1">
      <div>{label}</div>
      <div>Fersat</div>
    </div>
  ),
}
CustomOptionComponent.parameters = {
  docs: {
    description: {
      story: 'With `disabled` option',
    },
  },
}

////////////////////////
HideSelectedOptions.args = {
  helperText: 'Join the army',
  hideSelectedOptions: true,
  label: "Dumbledore's Army",
  multiple: true,
  options: Array.from({ length: 10 }, (_) => ({
    label: faker.name.firstName(),
    value: uuid(),
  })),
}
HideSelectedOptions.parameters = {
  docs: {
    description: {
      story: 'With `disabled` option',
    },
  },
}
