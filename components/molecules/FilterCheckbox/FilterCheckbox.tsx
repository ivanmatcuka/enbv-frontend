'use client';

import { MenuList, SelectChangeEvent } from '@mui/material';
import { FC, useCallback, useState } from 'react';

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

type Value = number | string | null;

type FilterCheckboxProps = {
  label: string;
  options: Option[];
  onChange?: (value: Value) => void;
};

export const FilterCheckbox: FC<FilterCheckboxProps> = ({
  label,
  options,
  onChange,
}) => {
  const [value, setValue] = useState<Value>('');

  const handleChange = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      const value = event.target.value as Value;

      setValue(value);
      onChange && onChange(value);
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
      displayEmpty
      renderValue={() => <Typography variant="button">{label}</Typography>}
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
