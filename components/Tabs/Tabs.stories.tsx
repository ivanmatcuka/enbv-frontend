import type { Meta, StoryObj } from '@storybook/react';

import { Tabs as Component } from './Tabs';

const meta = {
  title: 'Tabs',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tabs: Story = {
  args: {},
};
