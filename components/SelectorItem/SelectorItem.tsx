import { styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { Typography, TypographyProps } from '../Typography/Typography';

const StyledTypography = styled(Typography)({
  position: 'relative',

  opacity: '40%',

  '&:after': {
    content: '""',

    position: 'absolute',
    inset: 0,

    display: 'none',
    transform: 'rotate(-4deg)',
    opacity: '40%',

    background: 'url("/circle.svg") center no-repeat',
    backgroundSize: 'cover',
  },

  '&:hover': {
    opacity: '100%',
  },

  '&:hover:after': {
    display: 'block',
  },

  '&:active:after': {
    display: 'block',

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
