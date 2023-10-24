import React, { FC, PropsWithChildren } from 'react';
import {
  Typography as MUITypography,
  TypographyProps as MUITypographyProps,
} from '@mui/material';

import { TypographyVariants } from '../../theming/theme/typography';

type TypographyProps = {
  variant: TypographyVariants;
} & MUITypographyProps;
export const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  ...rest
}) => {
  return <MUITypography {...rest}>{children}</MUITypography>;
};
