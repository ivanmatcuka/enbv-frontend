import type { Meta, StoryObj } from '@storybook/react';

import { Button as Component } from './Button';

const meta = {
  title: 'Button',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    children: 'ПОМОЧЬ СЕЙЧАС',
  },
};

export const RedButton: Story = {
  args: {
    children: 'ПОМОЧЬ СЕЙЧАС',
    variant: 'red',
  },
};

export const OutlineButton: Story = {
  args: {
    children: 'ПОМОЧЬ СЕЙЧАС',
    variant: 'outline',
  },
};
