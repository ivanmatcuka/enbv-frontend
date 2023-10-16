import React, { FC, PropsWithChildren } from 'react';
import {
  Typography as MUITypography,
  TypographyProps as MUITypographyProps,
} from '@mui/material';

type TextProps = Pick<MUITypographyProps, 'variant' | 'component'>;
export const Text: FC<PropsWithChildren<TextProps>> = ({
  children,
  ...rest
}) => {
  return <MUITypography {...rest}>{children}</MUITypography>;
};
