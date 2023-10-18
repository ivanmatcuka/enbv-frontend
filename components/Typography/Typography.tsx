import React, {
  //  CSSProperties,
  FC,
  PropsWithChildren,
} from 'react';
import {
  Typography as MUITypography,
  TypographyProps as MUITypographyProps,
  styled,
} from '@mui/material';

const StyledTypography = styled(MUITypography)(() =>
  // { theme }
  {
    // @TODO: better typing
    // const buttonStyles: Record<string, CSSProperties> = {
    //   h1: {
    //     fontFamily: 'Unbounded',
    //     fontSize: 70,
    //     lineHeight: 0.85,

    //     [theme.breakpoints.down('md')]: {
    //       fontSize: 50,
    //     },
    //   },
    //   h2: {
    //     fontFamily: 'Unbounded',
    //     fontSize: 28,
    //   },
    //   h3: {
    //     fontFamily: 'Unbounded',
    //     fontSize: 22,
    //     lineHeight: 1,
    //   },

    //   subtitle1: {
    //     fontFamily: 'Nunito Sans',
    //     fontSize: 24,

    //     [theme.breakpoints.down('md')]: {
    //       fontSize: 20,
    //     },
    //   },

    //   p1: {
    //     fontFamily: 'Nunito Sans',
    //     fontSize: 28,
    //   },
    //   p2: {
    //     fontFamily: 'Nunito Sans',
    //     fontSize: 22,

    //     [theme.breakpoints.down('md')]: {
    //       fontSize: 18,
    //     },
    //   },
    //   p3: {
    //     fontFamily: 'Nunito Sans',
    //     fontSize: 18,
    //   },

    //   mi: {
    //     fontFamily: 'Nunito Sans',
    //     fontSize: 18,

    //     [theme.breakpoints.down('md')]: {
    //       fontSize: 14,
    //     },
    //   },
    //   button: {
    //     fontFamily: 'Nunito Sans',
    //     fontSize: 16,
    //     lineHeight: 1,
    //   },
    //   legend: {
    //     fontFamily: 'Noteworthy',
    //     fontSize: 16,
    //   },
    //   caption: {
    //     fontFamily: 'Nunito Sans',
    //     fontSize: 14,
    //   },
    // };

    return {};
  },
);

type Variants =
  | NonNullable<MUITypographyProps['variant']>
  | 'p1'
  | 'p2'
  | 'p3'
  | 'mi'
  | 'button'
  | 'legend'
  | 'caption';

type TypographyProps = Pick<MUITypographyProps, 'component'> & {
  variant: Variants;
};
export const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  variant,
  ...rest
}) => {
  return <StyledTypography {...rest}>{children}</StyledTypography>;
};
