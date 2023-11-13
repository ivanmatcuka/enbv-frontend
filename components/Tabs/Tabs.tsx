import Box from '@mui/material/Box';
import MUITabs from '@mui/material/Tabs';
import React from 'react';

import { SelectorItem } from '../SelectorItem/SelectorItem';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export const Tabs: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <MUITabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: { display: 'none' },
        }}
      >
        <SelectorItem
          variant="subtitle1"
          label="по полу и возрасту:"
          {...a11yProps(0)}
        />
        <SelectorItem
          variant="subtitle1"
          label="по полу и возрасту:"
          {...a11yProps(1)}
        />
        <SelectorItem
          variant="subtitle1"
          label="по полу и возрасту:"
          {...a11yProps(2)}
        />
      </MUITabs>
      <CustomTabPanel value={value} index={0}>
        по полу и возрасту
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
};
