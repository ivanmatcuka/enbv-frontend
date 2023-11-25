'use client';

import { Box, Grid, styled } from '@mui/material';
import { FC } from 'react';

import { Typography } from '../Typography/Typography';

const MAX_ITEMS = 972;

const StyledGridItem = styled(Grid)<{ hasFrame?: boolean }>(
  ({ theme, hasFrame }) => ({
    padding: theme.spacing(1),
    overflow: 'hidden',

    backgroundImage: hasFrame ? 'url("/free_frame.svg")' : undefined,
  }),
);

type FreeNotFreeProps = {
  free?: number;
  notFree?: number;
};
export const FreeNotFree: FC<FreeNotFreeProps> = ({ notFree, free }) => {
  return (
    <Grid container width={536} gap={2}>
      <Grid width={260} textAlign="center">
        <Typography variant="legend">{`${notFree} – уже лишены свободы`}</Typography>
      </Grid>
      <Grid width={260} textAlign="center">
        <Typography variant="legend">{`${free} – ещё не свободе`}</Typography>
      </Grid>
      <StyledGridItem width={260} height={448} item hasFrame>
        <Box
          display="grid"
          gridTemplateColumns={'repeat(auto-fit, minmax(6px, 9px))'}
          gridTemplateRows={'repeat(auto-fit, minmax(12px, 15px))'}
          justifyContent="flex-end"
        >
          {Array.from(Array(notFree).keys())
            .slice(0, MAX_ITEMS)
            .map(() => (
              <img src="/person.svg" />
            ))}
        </Box>
      </StyledGridItem>
      <StyledGridItem width={260} height={448} item>
        <Box
          display="grid"
          gridTemplateColumns={'repeat(auto-fit, minmax(6px, 9px))'}
          gridTemplateRows={'repeat(auto-fit, minmax(12px, 15px))'}
          justifyContent="flex-end"
        >
          {Array.from(Array(free).keys()).map(() => (
            <img src="/person.svg" />
          ))}
        </Box>
      </StyledGridItem>
    </Grid>
  );
};
