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
  args: {
    items: [
      { label: 'по полу и возрасту:', element: 'Lorem ipsum 1' },
      { label: 'на свободе/под стражей', element: 'Lorem ipsum 2' },
      { label: 'по роду занятий', element: 'Lorem ipsum 3' },
    ],
  },
};
