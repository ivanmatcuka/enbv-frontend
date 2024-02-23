'use client';

import { MenuList, Slider, Tooltip, styled } from '@mui/material';
import { SliderValueLabelProps } from '@mui/material/Slider';
import { FC, SyntheticEvent, useCallback, useState } from 'react';

import { Typography } from '../../../components/typography/Typography/Typography';
import { Arrow } from '../Filter/Arrow';
import { MenuItem } from '../Filter/MenuItem';
import { Paper } from '../Filter/Paper';
import { Select } from '../Filter/Select';

type FilterSlider = {
  label: string;
  max: number;
  min: number;
  onChange?: (value: number[]) => void;
};

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

const ValueLabelComponent = (props: SliderValueLabelProps) => {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
};

export const FilterSlider: FC<FilterSlider> = ({
  label,
  max,
  min,
  onChange,
}) => {
  const [value, setValue] = useState<number[]>([min, max]);

  const handleSliderChange = useCallback(
    (_: SyntheticEvent | Event, value: number | number[]) => {
      onChange && onChange(value as number[]);
    },
    [onChange],
  );

  return (
    <Select
      id="range-selector"
      value={value}
      IconComponent={Arrow}
      MenuProps={{
        slots: {
          paper: Paper,
        },
        MenuListProps: {
          disabledItemsFocusable: true,
          component: MenuList,
        },
      }}
      renderValue={() => (
        <Typography variant="button">{`${label} (${value[0]}-${value[1]})`}</Typography>
      )}
      multiple
    >
      <MenuItem dense disableRipple autoFocus>
        <StyledSlider
          value={value}
          valueLabelDisplay="on"
          onChange={(_, value) => setValue(value as number[])}
          onChangeCommitted={handleSliderChange}
          max={max}
          min={min}
          slots={{ valueLabel: ValueLabelComponent }}
        />
      </MenuItem>
    </Select>
  );
};
