'use client';

import { Grid, styled } from '@mui/material';
import { FC } from 'react';

import { Typography } from '../Typography/Typography';

const StyledGridItem = styled(Grid)<{ hasFrame?: boolean }>(
  ({ theme, hasFrame }) => ({
    padding: theme.spacing(1),

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
        {Array.from(Array(notFree).keys()).map(() => (
          <img src="/person.svg" />
        ))}
      </StyledGridItem>
      <StyledGridItem width={260} height={448} item>
        {Array.from(Array(free).keys()).map(() => (
          <img src="/person.svg" />
        ))}
      </StyledGridItem>
    </Grid>
  );
};
