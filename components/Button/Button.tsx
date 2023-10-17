import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import { Button as MUIButton, styled } from '@mui/material';

import theme from '../theme';

type ButtonVariant = 'default' | 'red' | 'outline';
type ButtonCSSProperties = Pick<
  CSSProperties,
  'color' | 'backgroundColor' | 'cursor' | 'borderColor'
>;
type ButtonStyles = Record<ButtonVariant, ButtonCSSProperties>;

const buttonStyles: ButtonStyles = {
  default: {
    backgroundColor: theme.palette.yellow,
    borderColor: theme.palette.black,
    color: theme.palette.black,
  },
  red: {
    backgroundColor: theme.palette.red,
    borderColor: theme.palette.white,
    color: theme.palette.white,
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: theme.palette.black,
    color: theme.palette.black,
  },
};

const StyledButton = styled(MUIButton)({
  padding: '10px 20px',

  border: 'solid 2px',
  borderRadius: 24,

  height: 48,
});

interface ButtonProps {
  variant: ButtonVariant;
  state?: 'disabled';
}
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant,
  state,
}) => {
  const style = buttonStyles[variant];

  if (state === 'disabled') {
    style.cursor = 'not-allowed';
  }

  return <StyledButton style={style}>{children}</StyledButton>;
};
