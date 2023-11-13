import { styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { Typography, TypographyProps } from '../Typography/Typography';

const StyledTypography = styled(Typography)({
  position: 'relative',

  '&:after': {
    content: '""',

    position: 'absolute',
    inset: 0,

    display: 'none',
    transform: 'rotate(-4deg)',

    background: 'url("/circle.svg") center no-repeat',
    backgroundSize: 'cover',
  },

  '&:hover:after': {
    display: 'block',

    opacity: '40%',
  },

  '&:active:after': {
    opacity: '100%',
  },
});

export const SelectorItem: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  variant = 'subtitle1',
  ...rest
}) => (
  <StyledTypography variant={variant} {...rest}>
    {children}
  </StyledTypography>
);
