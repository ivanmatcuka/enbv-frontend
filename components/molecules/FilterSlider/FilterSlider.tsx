'use client';

import {
  MenuItem,
  MenuList,
  Paper,
  Select,
  Slider,
  styled,
  Tooltip,
} from '@mui/material';
import { SliderValueLabelProps } from '@mui/material/Slider';
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
  position: 'absolute',

  boxShadow: 'none',

  marginTop: theme.spacing(0.5),
  padding: 0,

  borderColor: theme.palette.brand.black,
  borderStyle: 'solid',
  borderRadius: 12,
  borderWidth: 3,

  '.MuiMenuItem-dense': {
    paddingTop: 0,
    paddingBottom: 0,
  },

  '.MuiList-padding': {
    padding: 0,
  },
}));

const StyledMenuItem = styled(MenuItem)({
  background: 'none !important',
});

const StyledSlider = styled(Slider)(({ theme }) => ({
  padding: 0,
  height: 2,

  boxShadow: 'none',

  '.MuiSlider-track': {
    height: 0,

    color: theme.palette.brand.black,
  },

  '& .MuiSlider-rail': {
    color: theme.palette.brand.grey,
  },

  '.MuiSlider-thumb': {
    height: 15,
    width: 15,

    boxShadow: 'none !important',

    color: theme.palette.brand.black,

    '&:before, &:after': {
      display: 'none',
    },
  },
}));

type FilterSlider = {
  label: string;
  max: number;
  min: number;
};

const ValueLabelComponent = (props: SliderValueLabelProps) => {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
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
      renderValue={() => (
        <Typography variant="button">{`${label} (${value[0]}-${value[1]})`}</Typography>
      )}
      disableUnderline
      multiple
    >
      <StyledMenuItem dense disableRipple autoFocus>
        <StyledSlider
          value={value}
          valueLabelDisplay="on"
          onChange={handleSliderChange}
          max={max}
          min={min}
          slots={{ valueLabel: ValueLabelComponent }}
        />
      </StyledMenuItem>
    </StyledSelect>
  );
};
