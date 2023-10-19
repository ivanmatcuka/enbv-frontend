import React, { FC, PropsWithChildren } from 'react';
import {
  Typography as MUITypography,
  TypographyProps as MUITypographyProps,
  styled,
} from '@mui/material';

import { TypographyVariants } from '../../theming/theme/typography';

const StyledTypography = styled(MUITypography)(() => ({}));

type TypographyProps = Pick<MUITypographyProps, 'component'> & {
  variant: TypographyVariants;
};
export const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  variant,
  ...rest
}) => {
  return <StyledTypography {...rest}>{children}</StyledTypography>;
};
