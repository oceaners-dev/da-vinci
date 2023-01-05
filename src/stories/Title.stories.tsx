import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Title } from '../components/title/Title'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Title,
  title: 'Typography/Title',
} as ComponentMeta<typeof Title>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Title> = (args) => (
  <>
    <Title level={1} text={args.text} />
    <Title level={2} text={args.text} />
    <Title level={3} text={args.text} />
    <Title level={4} text={args.text} />
    <Title level={5} text={args.text} />
    <Title level={6} text={args.text} />
  </>
)

export const Default = Template.bind({})

Default.args = {
  text: 'Albus Dumbledore',
}
