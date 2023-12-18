'use client';

import { Grid, styled } from '@mui/material';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

import { Article } from '../../atoms/Article/Article';
import { Typography } from '../../typography/Typography/Typography';

const Container = styled(Grid)({
  position: 'relative',

  paddingBottom: 64,
  boxSizing: 'border-box',

  background: 'url("/card_background.png") no-repeat',
  backgroundSize: 'contain',
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

const StyledImage = styled(Image)({
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
      height={{ sm: 447, xs: 422 }}
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
      <Grid item>
        <Typography variant="p3" component="p">
          {body}
        </Typography>
      </Grid>
      {pictureUrl && (
        <StyledImage
          alt="icon_letter"
          width={135}
          height={121}
          src={pictureUrl}
        />
      )}
      {primaryAction && (
        <PrimaryActionContainer>{primaryAction}</PrimaryActionContainer>
      )}
      {secondaryAction && (
        <SecondaryActionContainer>{secondaryAction}</SecondaryActionContainer>
      )}
    </Container>
  );
};
