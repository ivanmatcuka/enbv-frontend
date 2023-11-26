'use client';

import { Button as MUIButton, styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { PaletteColors } from '../../../theming/theme/palette';
import { Typography } from '../../Typography/Typography';

const Container = styled('div')<{ variant: ButtonProps['variant'] }>(({
  theme,
  variant,
}) => {
  const palette: PaletteColors[] | null =
    variant === 'outline'
      ? null
      : variant === 'default'
      ? ['yellow', 'yellow20', 'yellow40']
      : ['red', 'red20', 'red40'];

  return {
    position: 'relative',

    '.button__background': {
      backgroundColor: palette ? theme.palette.brand[palette[0]] : undefined,
    },

    '&:hover': {
      '.button__body': {
        transform: 'rotate(2.86deg)',
      },
      '.button__background': {
        backgroundColor: palette ? theme.palette.brand[palette[1]] : undefined,

        transform: 'rotate(-2.92deg)',
      },
    },

    '&:active': {
      '.button__background': {
        backgroundColor: palette ? theme.palette.brand[palette[2]] : undefined,
      },
    },
  };
});

const Background = styled('div')(() => ({
  position: 'absolute',
  inset: '-8px 0 0 0',
  zIndex: 100,

  transform: 'rotate(1.8deg)',

  height: 54,
  borderRadius: '50%',

  transition: 'transform 125ms',
}));

const StyledMUIButton = styled(MUIButton)(({ theme }) => ({
  position: 'relative',
  zIndex: 200,

  height: 36,
  border: `solid 2px ${theme.palette.brand.black}`,
  borderRadius: 18,
  padding: theme.spacing(0, 3),

  transform: 'rotate(-2.16deg)',

  transition: 'transform 125ms',
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
    <Container variant={variant}>
      {button}
      {variant !== 'outline' && <Background className="button__background" />}
    </Container>
  );
};
