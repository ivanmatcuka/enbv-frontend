'use client';

import { Grid, styled } from '@mui/material';
import { FC } from 'react';

import { Typography } from '@/components/typography/Typography/Typography';

const Circle = styled('div')({
  width: 16,
  height: 16,
  borderRadius: 8,
});

const RedCircle = styled(Circle)(({ theme }) => ({
  backgroundColor: theme.palette.brand.red,
}));

const GreenCircle = styled(Circle)(({ theme }) => ({
  backgroundColor: theme.palette.brand.emerald,
}));

type StatusProps = {
  status: string;
  isReleased?: boolean;
};
export const Status: FC<StatusProps> = ({ status, isReleased }) => (
  <Grid container spacing={1}>
    <Grid item>
      {status === 'лишен свободы' && !isReleased ? (
        <RedCircle />
      ) : (
        <GreenCircle />
      )}
    </Grid>
    <Grid item>
      <Typography variant="button" component="p">
        {status}
      </Typography>
    </Grid>
  </Grid>
);
