'use client';

import { styled } from '@mui/material';
import { FC, ReactNode } from 'react';

import { Typography } from '../Typography/Typography';

const Container = styled('div')({
  width: 594,
  height: 285,

  background: 'url("/drawing_frame.png") center',
  backgroundSize: 'contain',
});

const ActionContainer = styled('div')({
  position: 'absolute',
  right: 0,
  bottom: 0,
});

const Title = styled(Typography)({
  transform: 'rotate(-2.47deg)',
});

type CardProps = {
  title: string;
  body: string;

  action?: ReactNode;
};
export const Card: FC<CardProps> = ({ title, body, action }) => {
  return (
    <Container>
      <Title variant="h2" component="p">
        {title}
      </Title>
      <Typography variant="p2" component="p" pt={1.5} pl={17.5}>
        {body}
      </Typography>
      {action && <ActionContainer>{action}</ActionContainer>}
    </Container>
  );
};
