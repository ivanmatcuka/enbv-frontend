'use client';

import { Grid, styled } from '@mui/material';
import { FC } from 'react';

import { Typography } from '../Typography/Typography';

const StyledGridItem = styled(Grid)<{ hasFrame?: boolean }>(
  ({ theme, hasFrame }) => ({
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),

    backgroundImage: hasFrame ? 'url("/free_frame.svg")' : undefined,

    img: {
      padding: '0.5px 0',
    },
  }),
);

type FreeNotFreeProps = {
  free?: number;
  notFree?: number;
};
export const FreeNotFree: FC<FreeNotFreeProps> = ({ notFree, free }) => {
  return (
    <Grid container width={528} gap={1} margin={2}>
      <Grid width={260} textAlign="center">
        <Typography variant="legend">{`${notFree} – уже лишены свободы`}</Typography>
      </Grid>
      <Grid width={260} textAlign="center">
        <Typography variant="legend">{`${free} – ещё не свободе`}</Typography>
      </Grid>
      <StyledGridItem width={260} height={448} item hasFrame>
        {Array.from(Array(notFree).keys()).map((_, index) => (
          <img key={index} src="/person_1.svg" />
        ))}
      </StyledGridItem>
      <StyledGridItem width={260} height={448} item>
        {Array.from(Array(free).keys()).map((_, index) => (
          <img key={index} src="/person_1.svg" />
        ))}
      </StyledGridItem>
    </Grid>
  );
};
