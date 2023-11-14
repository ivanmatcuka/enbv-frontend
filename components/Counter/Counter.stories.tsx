import type { Meta, StoryObj } from '@storybook/react';

import { Counter as Component } from './Counter';

const meta = {
  title: 'Counter',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Counter1: Story = {
  args: { children: 1117, label: 'Всего политзаключённых:' },
};

export const Counter2: Story = {
  args: { children: 857, label: 'Сколько дел в процессе' },
};

export const Counter3: Story = {
  args: { children: 0, label: 'Писем сегодня отправлено:' },
};
