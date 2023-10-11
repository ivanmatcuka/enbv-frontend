import React, { CSSProperties, FC, ReactNode } from 'react';

import theme from '../theme';

type ButtonVariant = 'default' | 'red' | 'outline';
type ButtonCSSProperties = Pick<
  CSSProperties,
  'color' | 'backgroundColor' | 'cursor'
>;
type ButtonStyles = Record<ButtonVariant, ButtonCSSProperties>;

const buttonStyles: ButtonStyles = {
  default: {
    backgroundColor: theme.palette.yellow,
    color: theme.palette.black,
  },
  red: {
    backgroundColor: theme.palette.red,
    color: theme.palette.white,
  },
  outline: {
    backgroundColor: 'transparent',
    color: theme.palette.black,
  },
};

interface ButtonProps {
  variant: ButtonVariant;
  state?: 'disabled';
  children: ReactNode;
}
const Button: FC<ButtonProps> = ({ variant, state, children }: ButtonProps) => {
  const style: ButtonCSSProperties = buttonStyles[variant];

  if (state === 'disabled') {
    style.cursor = 'not-allowed';
  }

  return <button style={style}>{children}</button>;
};

export default Button;
