'use client';

import { Button as MUIButton, styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { PaletteColors } from '../../theming/theme/palette';
import { Typography } from '../Typography/Typography';

const Container = styled('div')(() => ({
  position: 'relative',

  '&:hover': {
    '.button__body': {
      transform: 'rotate(2.86deg)',
    },
    '.button__background': {
      transform: 'rotate(-2.92deg)',
    },
  },
}));

const Background = styled('div')<{ variant?: 'red' | 'default' }>(({
  variant = 'default',
  theme,
}) => {
  const palette: PaletteColors[] =
    variant === 'default'
      ? ['yellow', 'yellow20', 'yellow40']
      : ['red', 'red20', 'red40'];

  return {
    position: 'absolute',
    inset: '-8px 0 0 0',
    zIndex: 100,

    transform: 'rotate(1.8deg)',

    height: 54,
    borderRadius: '50%',

    backgroundColor: palette ? theme.palette.brand[palette[0]] : undefined,

    '&:hover': {
      backgroundColor: theme.palette.brand[palette[1]],
    },

    '&:active': {
      backgroundColor: theme.palette.brand[palette[2]],
    },
  };
});

const StyledMUIButton = styled(MUIButton)(({ theme }) => ({
  position: 'relative',
  zIndex: 200,

  height: 36,
  border: `solid 2px ${theme.palette.brand.black}`,
  borderRadius: 18,
  padding: theme.spacing(0, 3),

  transform: 'rotate(-2.16deg)',
}));

const DefaultButton = styled(StyledMUIButton)(({ theme }) => ({
  color: theme.palette.brand.black,
}));

const RedMUIButton = styled(StyledMUIButton)(({ theme }) => ({
  border: `solid 2px ${theme.palette.brand.white}`,

  color: theme.palette.brand.white,
}));

const OutlineMUIButton = styled(StyledMUIButton)(({ theme }) => ({
  border: `solid 2px ${theme.palette.brand.black}`,

  color: theme.palette.brand.black,

  '&:hover': {
    backgroundColor: theme.palette.brand.black,

    color: theme.palette.brand.white,
  },

  '&:active': {
    backgroundColor: theme.palette.brand.black20,

    color: theme.palette.brand.yellow,
  },
}));

type ButtonProps = {
  variant?: 'red' | 'default' | 'outline';
};
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  variant = 'default',
  children,
}) => {
  let button = (
    <DefaultButton className="button__body">
      <Typography variant="button">{children}</Typography>
    </DefaultButton>
  );

  if (variant === 'red') {
    button = (
      <RedMUIButton className="button__body">
        <Typography variant="button">{children}</Typography>
      </RedMUIButton>
    );
  } else if (variant === 'outline') {
    button = (
      <OutlineMUIButton variant="outlined" className="button__body">
        <Typography variant="button">{children}</Typography>
      </OutlineMUIButton>
    );
  }

  return (
    <Container>
      {button}
      {variant !== 'outline' && (
        <Background className="button__background" variant={variant} />
      )}
    </Container>
  );
};
