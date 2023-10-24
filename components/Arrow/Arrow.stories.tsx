import type { Meta, StoryObj } from '@storybook/react';

import { Arrow as Component } from './Arrow';

const meta = {
  title: 'Arrow',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Arrow: Story = {
  args: {},
};
