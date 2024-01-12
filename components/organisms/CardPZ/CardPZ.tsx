'use client';

import { Grid, styled } from '@mui/material';
import { FC, ReactNode } from 'react';

import { Article } from '../../atoms/Article/Article';
import { Typography } from '../../typography/Typography/Typography';

const Container = styled(Grid)({
  position: 'relative',

  paddingBottom: 64,
  boxSizing: 'border-box',
});

const PrimaryActionContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(2),
  bottom: theme.spacing(2),
}));

const SecondaryActionContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  bottom: theme.spacing(2),
}));

const Background = styled('img')({
  position: 'absolute',
  inset: 0,

  width: '100%',
  height: '100%',
});

const StyledImage = styled('img')({
  position: 'absolute',
  top: -40,
  left: -6,
});

type CardPZProps = {
  name: string;
  body: string;
  articles?: string[];
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
  pictureUrl?: string;
};
export const CardPZ: FC<CardPZProps> = ({
  name,
  body,
  articles,
  primaryAction,
  secondaryAction,
  pictureUrl,
}) => {
  return (
    <Container
      container
      flexDirection="column"
      rowSpacing={2}
      width={392}
      pl={2}
      pr={2}
    >
      <Grid item>
        <Typography variant="h3" component="p" pl={15.5}>
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={0.5}>
          {articles?.map((article, index) => (
            <Grid item key={index}>
              <Article label={article} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item pb={2}>
        <Typography variant="p3" component="p">
          {body}
        </Typography>
      </Grid>
      {primaryAction && (
        <PrimaryActionContainer>{primaryAction}</PrimaryActionContainer>
      )}
      {secondaryAction && (
        <SecondaryActionContainer>{secondaryAction}</SecondaryActionContainer>
      )}
      <Background src="/card_background.png" />
      {pictureUrl && (
        <StyledImage
          alt="icon_letter"
          width={135}
          height={121}
          src={pictureUrl}
        />
      )}
    </Container>
  );
};
