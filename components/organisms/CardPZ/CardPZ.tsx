'use client';

import { Grid, styled } from '@mui/material';
import { FC, ReactNode } from 'react';
import ShowMoreText from 'react-show-more-text';

import { Status } from '@/app/components/Status/Status';
import { Article } from '@/components/atoms/Article/Article';
import { Typography } from '@/components/typography/Typography/Typography';

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
  zIndex: -1,

  width: '100%',
  height: '100%',
});

const StyledImage = styled('img')({
  position: 'absolute',
  top: -40,
  left: -6,

  objectFit: 'contain',
});

const StyledName = styled(Typography)({
  minHeight: 66,

  wordSpacing: 999,
});

const StatusContainer = styled('div')({
  position: 'absolute',
  top: -32,
  right: 0,
});

type CardPZProps = {
  name: string | null;
  body: string | null;
  sex: string | null;
  status: string | null;
  freedomdate: string | null;
  articles: (null | string)[] | null;
  primaryAction: ReactNode;
  secondaryAction: ReactNode;
  pictureUrl: string | null;
};
export const CardPZ: FC<Partial<CardPZProps>> = ({
  name,
  body,
  sex,
  status,
  freedomdate,
  articles,
  primaryAction,
  secondaryAction,
  pictureUrl,
}) => {
  const filteredArticles = articles?.slice(0, 5).filter((a) => a);

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
        <StyledName variant="h3" component="p" pl={15.5}>
          {name}
        </StyledName>
      </Grid>
      {status && (
        <StatusContainer>
          <Status status={status} isReleased={!!freedomdate} />
        </StatusContainer>
      )}
      {filteredArticles && filteredArticles.length > 0 && (
        <Grid item>
          <Grid container spacing={0.5}>
            {filteredArticles.map((article, index) => (
              <Grid item key={index}>
                <Article label={article} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
      <Grid item pb={2} height={175}>
        <Typography variant="p3" component="p">
          <ShowMoreText
            lines={6}
            more=""
            less=""
            truncatedEndingComponent={'...'}
          >
            {body}
          </ShowMoreText>
        </Typography>
      </Grid>
      {primaryAction && (
        <PrimaryActionContainer>{primaryAction}</PrimaryActionContainer>
      )}
      {secondaryAction && (
        <SecondaryActionContainer>{secondaryAction}</SecondaryActionContainer>
      )}
      <Background src="/card_background.png" />

      <StyledImage
        alt="icon_letter"
        width={135}
        height={121}
        src={
          pictureUrl
            ? pictureUrl
            : sex === 'мужской'
            ? '/default_man.png'
            : '/default_woman.png'
        }
      />
    </Container>
  );
};
