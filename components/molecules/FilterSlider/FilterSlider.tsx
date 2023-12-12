'use client';

import {
  MenuItem,
  MenuList,
  Paper,
  Select,
  Slider,
  styled,
} from '@mui/material';
import { FC, SVGProps, useState } from 'react';

import { Typography } from '../../../components/typography/Typography/Typography';

const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: 20,

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.brand.black,
    borderWidth: 3,
  },

  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.brand.black20,
    borderWidth: 3,
  },

  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.brand.black20,
    borderWidth: 3,
  },

  '.MuiSelect-select': {
    padding: theme.spacing(1, 2),
    minHeight: 0,
  },

  '.MuiSelect-icon': {
    top: 'unset',
    color: theme.palette.brand.black,

    '&:hover': {
      borderColor: theme.palette.brand.black20,
    },
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  boxShadow: 'none',

  borderColor: theme.palette.brand.black,
  borderStyle: 'solid',
  borderWidth: 3,
}));

type FilterSlider = {
  label: string;
  max: number;
  min: number;
};

const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      fill="currentColor"
      d="M13 13.227 18.445 7.5 20 9.137 13 16.5 6 9.137l1.555-1.636L13 13.228v-.001Z"
    />
  </svg>
);
export const FilterSlider: FC<FilterSlider> = ({ label, max, min }) => {
  const [value, setValue] = useState<number[]>([min, max]);

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <StyledSelect
      id="range-selector"
      value={value}
      renderValue={() => (
        <Typography variant="button">{`${label} (${value[0]}-${value[1]})`}</Typography>
      )}
      IconComponent={Arrow}
      MenuProps={{
        slots: {
          paper: StyledPaper,
        },
        MenuListProps: {
          disabledItemsFocusable: true,
          component: MenuList,
        },
      }}
      multiple
    >
      <MenuItem dense disableRipple>
        <Slider
          value={value}
          onChange={handleSliderChange}
          max={max}
          min={min}
        />
      </MenuItem>
    </StyledSelect>
  );
};
