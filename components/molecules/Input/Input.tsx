'use client';

import {
  Input as MUIInput,
  InputProps as MUIInputProps,
  styled,
} from '@mui/material';
import { FC } from 'react';

type InputProps = Pick<
  MUIInputProps,
  'startAdornment' | 'placeholder' | 'onChange' | 'value'
>;

const StyledInput = styled(MUIInput)(({ theme }) => ({
  padding: '0 10px',

  border: `solid 3px ${theme.palette.brand.black}`,
  borderRadius: 16.5,

  ...theme.typography.p3,

  '.MuiInput-input': {
    padding: '0',
  },
}));

const LeftAdornment = styled('div')(({ theme }) => ({
  display: 'flex',

  paddingRight: theme.spacing(1),
}));

export const Input: FC<InputProps> = ({ startAdornment, ...rest }) => {
  return (
    <StyledInput
      {...rest}
      startAdornment={<LeftAdornment>{startAdornment}</LeftAdornment>}
      disableUnderline
    />
  );
};
