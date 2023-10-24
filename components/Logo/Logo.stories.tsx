import type { Meta, StoryObj } from '@storybook/react';

import { Logo as Component } from './Logo';

const meta = {
  title: 'Logo',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {
  args: {},
};
