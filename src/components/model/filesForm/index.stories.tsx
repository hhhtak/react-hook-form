import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FilesForm } from '.';

const meta: Meta<typeof FilesForm> = {
  title: 'components/model/FilesForm',
  component: FilesForm,
};
export default meta;

type Story = StoryObj<typeof FilesForm>;

export const Default: Story = {
  render: (args) => (
    <div className="bg-white">
      <FilesForm {...args} />
    </div>
  ),
  args: {},
};
