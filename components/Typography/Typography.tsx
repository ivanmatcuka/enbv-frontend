import {
  Typography as MUITypography,
  TypographyProps as MUITypographyProps,
} from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { TypographyVariants } from '../../theming/theme/typography';

export type TypographyProps = {
  variant: TypographyVariants;
} & Pick<MUITypographyProps, 'component'>;
export const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  ...rest
}) => {
  return <MUITypography {...rest}>{children}</MUITypography>;
};
