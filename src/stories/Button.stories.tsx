import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '../components/button/Button'
import { SvgCalendarOutline } from '../components/datepicker/svg'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "We are adding `automatic` hover colour. If you don't like magic, use `isHoverStylesDisabled`",
      },
    },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />
const HoverTemplate: ComponentStory<typeof Button> = (args) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Button btnType="primary" {...args} />
      <Button btnType="secondary" {...args} />
      <Button btnType="positive" {...args} />
      <Button btnType="negative" {...args} />
    </div>
  )
}

export const Default = Template.bind({})
export const AutoHoverBackground = HoverTemplate.bind({})
export const DisabledHoverColour = Template.bind({})
export const WithIcon = Template.bind({})
// export const Size = Template.bind({});

Default.args = {
  children: 'Button',
  onClick: () => {
    // TODO: not working
    console.log('logged')
  },
}

AutoHoverBackground.args = {
  children: 'Button',
  isActive: false,
}

DisabledHoverColour.args = {
  btnType: 'secondary',
  children: 'Button',
  isActive: false,
  isHoverStylesDisabled: true,
}

WithIcon.args = {
  children: 'Button',
  icon: <SvgCalendarOutline />,
}
