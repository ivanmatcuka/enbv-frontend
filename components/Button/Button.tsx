import { Button as MUIButton, styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { Typography } from '../Typography/Typography';

const StyledMUIButton = styled(MUIButton)(({ theme }) => ({
  position: 'relative',

  height: 36,
  border: `solid 2px ${theme.palette.brand.black}`,
  borderRadius: 18,
  padding: theme.spacing(0, 3),

  '&:before': {
    content: '""',

    position: 'absolute',
    right: 0,
    bottom: -10,
    left: 0,
    zIndex: -1,

    transform: 'rotate(1.8deg)',

    height: 54,
    borderRadius: '50%',

    backgroundColor: theme.palette.brand.yellow,
  },

  '&:hover': {
    '&:before': {
      backgroundColor: theme.palette.brand.yellow20,
    },
  },

  '&:active': {
    '&:before': {
      backgroundColor: theme.palette.brand.yellow40,
    },
  },
}));

const RedMUIButton = styled(StyledMUIButton)(({ theme }) => ({
  border: `solid 2px ${theme.palette.brand.white}`,

  color: theme.palette.brand.white,

  '&:before': {
    backgroundColor: theme.palette.brand.red,
  },

  '&:hover': {
    '&:before': {
      backgroundColor: theme.palette.brand.red20,
    },
  },

  '&:active': {
    '&:before': {
      backgroundColor: theme.palette.brand.red40,
    },
  },
}));

const OutlineMUIButton = styled(StyledMUIButton)(({ theme }) => ({
  border: `solid 2px ${theme.palette.brand.black}`,

  color: theme.palette.brand.black,

  '&:before': {
    display: 'none',
  },

  '&:hover': {
    backgroundColor: theme.palette.brand.black,

    color: theme.palette.brand.white,
  },

  '&:active': {
    backgroundColor: theme.palette.brand.black20,

    color: theme.palette.brand.yellow,
  },
}));

const DefaultButton = styled(StyledMUIButton)(({ theme }) => ({
  color: theme.palette.brand.black,
}));

type ButtonProps = {
  variant?: 'red' | 'default' | 'outline';
};
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  variant = 'default',
  children,
}) => {
  if (variant === 'red') {
    return (
      <RedMUIButton>
        <Typography variant="button">{children}</Typography>
      </RedMUIButton>
    );
  } else if (variant === 'outline') {
    return (
      <OutlineMUIButton variant="outlined">
        <Typography variant="button">{children}</Typography>
      </OutlineMUIButton>
    );
  }
  return (
    <DefaultButton>
      <Typography variant="button">{children}</Typography>
    </DefaultButton>
  );
};
