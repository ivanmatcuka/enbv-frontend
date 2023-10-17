import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Помочь сейчас',
  },
};

export const Red: Story = {
  args: {
    variant: 'red',
    children: 'Помочь сейчас',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Помочь сейчас',
  },
};
