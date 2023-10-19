import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

import { typography } from '../../theming/theme/typography';

const loremIpsum = 'The quick brown fox jumps over the lazy dog.';

const meta = {
  title: 'Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: Object.keys(typography),
      control: 'select',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: 'h1',
    children: loremIpsum,
  },
};
