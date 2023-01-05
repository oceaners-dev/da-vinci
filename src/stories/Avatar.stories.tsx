import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from '../components/avatar/Avatar'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Avatar,
  parameters: {
    LabelPlaceholder: {
      description: {
        component: 'Avatar component',
      },
    },
    docs: {
      description: {
        component: 'Avatar component',
      },
    },
  },
  title: 'Display/Avatar',
} as ComponentMeta<typeof Avatar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />
const Random: ComponentStory<typeof Avatar> = (args) => {
  const { value, ...rest } = args
  return (
    <div className="flex flex-row items-center gap-2">
      <Avatar value="AB" {...rest} />
      <Avatar value="DB" {...rest} />
      <Avatar value="TQ" {...rest} />
      <Avatar value="HW" {...rest} />
    </div>
  )
}

export const Default = Template.bind({})
export const Bordered = Template.bind({})
export const WithImage = Template.bind({})
export const Color = Template.bind({})
export const Size = Template.bind({})
export const RandomColor = Random.bind({})

Default.args = {
  value: 'Fersat Ozcelik',
}

Bordered.args = {
  value: 'Fersat Test',
  withBorder: true,
}
Bordered.parameters = {
  docs: {
    description: {
      story: "Adds an `outline` outside of component. Don't affect sizing.",
    },
  },
}

WithImage.args = {
  alt: 'Arthur Schopenhauer',
  imgSrc:
    'https://cdn.britannica.com/59/9459-050-0B1E273F/Arthur-Schopenhauer-1855.jpg?w=400&h=300&c=crop',
  withBorder: true,
}

WithImage.parameters = {
  docs: {
    description: {
      story:
        'You can use `imgSrc` prop to add an image to the avatar. You can also use `alt` prop to add `alt` attribute to the `img` tag.',
    },
  },
}

Color.args = {
  bgClassName: 'red-500',
  value: 'Arthur Schopenhauer',
  withBorder: true,
}

Color.parameters = {
  docs: {
    description: {
      story:
        'You can use `bgClassName` prop to change the background color of the avatar. Add the value like `green-600`. You can also use `HEX` value like `#000000` or `#fff`. ',
    },
  },
}

Size.args = {
  bgClassName: 'blue-500',
  size: '10',
  value: 'Friedrich Nietzsche',
  withBorder: true,
}

Size.parameters = {
  docs: {
    description: {
      story:
        "You can use `size` prop to change the size of the avatar. Add the value like `10`. It's `dynamic` tailwind class. So think it like `w-[size]`",
    },
  },
}

RandomColor.args = {
  randomColor: true,
}
