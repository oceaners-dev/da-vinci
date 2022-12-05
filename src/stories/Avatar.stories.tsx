import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '../components/avatar/Avatar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: 'Avatar component',
      },
    },
    LabelPlaceholder: {
      description: {
        component: 'Avatar component',
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
export const Bordered = Template.bind({});
export const WithImage = Template.bind({});
export const Color = Template.bind({});
export const Size = Template.bind({});

Default.args = {
  value: 'Fersat Ozcelik',
};

Bordered.args = {
  value: 'Fersat Ozcelik',
  withBorder: true,
};
Bordered.parameters = {
  docs: {
    description: {
      story: "Adds an `outline` outside of component. Don't affect sizing.",
    },
  },
};

WithImage.args = {
  imgSrc:
    'https://cdn.britannica.com/59/9459-050-0B1E273F/Arthur-Schopenhauer-1855.jpg?w=400&h=300&c=crop',
  alt: 'Arthur Schopenhauer',
  withBorder: true,
};

WithImage.parameters = {
  docs: {
    description: {
      story:
        'You can use `imgSrc` prop to add an image to the avatar. You can also use `alt` prop to add `alt` attribute to the `img` tag.',
    },
  },
};

Color.args = {
  value: 'Arthur Schopenhauer',
  withBorder: true,
  bgClassName: 'red-500',
};

Color.parameters = {
  docs: {
    description: {
      story:
        'You can use `bgClassName` prop to change the background color of the avatar. Add the value like `green-600`. You can also use `HEX` value like `#000000` or `#fff`. ',
    },
  },
};

Size.args = {
  value: 'Friedrich Nietzsche',
  withBorder: true,
  bgClassName: 'blue-500',
  size: '10',
};

Size.parameters = {
  docs: {
    description: {
      story:
        "You can use `size` prop to change the size of the avatar. Add the value like `10`. It's `dynamic` tailwind class. So think it like `w-[size]`",
    },
  },
};
