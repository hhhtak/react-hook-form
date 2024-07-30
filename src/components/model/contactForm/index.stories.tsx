import { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from '.';

const meta: Meta<typeof ContactForm> = {
  title: 'components/model/ContactForm',
  component: ContactForm,
};
export default meta;

type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  render: (args) => <ContactForm {...args} />,
  args: {},
};
