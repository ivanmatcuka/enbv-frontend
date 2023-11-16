import { Tab as MUITab, TabProps as MUITabProps, styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { TypographyVariants } from '../../theming/theme/typography';
import { TypographyProps } from '../Typography/Typography';

const StyledTab = styled(MUITab)<{ variant: TypographyVariants }>(({
  theme,
  variant,
}) => {
  return {
    position: 'relative',

    opacity: '40%',

    textTransform: 'none',
    ...theme.typography[variant],

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

    '&.Mui-selected': {
      opacity: '100%',

      color: theme.palette.brand.black,
    },

    '.MuiTabs-indicator': {
      display: 'none',
    },
  };
});

export const SelectorItem: FC<
  PropsWithChildren<TypographyProps & Omit<MUITabProps, 'children'>>
> = ({ children, variant = 'subtitle1', ...rest }) => (
  <StyledTab variant={variant} label={children} {...rest} />
);
