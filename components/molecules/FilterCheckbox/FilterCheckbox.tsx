'use client';

import { SelectChangeEvent, SelectProps } from '@mui/material';
import { FC, useCallback } from 'react';

import { Checkbox } from '../../../components/atoms/Checkbox/Checkbox';
import { Typography } from '../../../components/typography/Typography/Typography';
import { Arrow } from '../Filter/Arrow';
import { MenuItem } from '../Filter/MenuItem';
import { Paper } from '../Filter/Paper';
import { Select } from '../Filter/Select';

type Option = {
  id: number | string;
  value: string;
};

type Value = number | string | null | boolean;

type FilterCheckboxProps = {
  label: string;
  options: Option[];
  onChange?: (value: Value) => void;
} & Pick<SelectProps, 'value'>;

export const FilterCheckbox: FC<FilterCheckboxProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  const handleChange = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      const newValue = event.target.value as Value;

      onChange && onChange(newValue);
    },
    [onChange],
  );

  return (
    <Select
      name={label}
      id="range-selector"
      value={value}
      IconComponent={Arrow}
      MenuProps={{
        slots: {
          paper: Paper,
        },
        MenuListProps: {
          disabledItemsFocusable: true,
        },
      }}
      displayEmpty
      renderValue={() => (
        <Typography variant="button">{`${label}${
          value ? ` (${value})` : ''
        }`}</Typography>
      )}
      onChange={handleChange}
    >
      <MenuItem value="">
        <Typography variant="button" color="brand.grey">
          {<em>None</em>}
        </Typography>
      </MenuItem>
      {options.map((option) => (
        <MenuItem
          key={option.id}
          value={option.id}
          dense
          disableRipple
          autoFocus
        >
          <Checkbox checked={option.id === value} />
          <Typography variant="button">{option.value}</Typography>
        </MenuItem>
      ))}
    </Select>
  );
};
