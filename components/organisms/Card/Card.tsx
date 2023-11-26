'use client';

import { styled } from '@mui/material';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

import { Typography } from '../../Typography/Typography';

const Container = styled('div')({
  paddingRight: 14,
  width: 594,
  height: 285,

  background: 'url("/drawing_frame.png") no-repeat',
  backgroundPosition: '12px',
  backgroundSize: 'contain',
});

const ActionContainer = styled('div')({
  position: 'absolute',
  right: 0,
  bottom: 16,
});

const Title = styled(Typography)({
  transform: 'rotate(-2.47deg)',
});

const StyledImage = styled(Image)({
  position: 'absolute',
  top: 150,
  left: 0,
});

type CardProps = {
  title: string;
  body: string;

  action?: ReactNode;
  catPictureUrl?: string;
};
export const Card: FC<CardProps> = ({ title, body, action, catPictureUrl }) => {
  return (
    <Container>
      <Title variant="h2" component="p">
        {title}
      </Title>
      <Typography variant="p2" component="p" pt={1.5} pl={17.5}>
        {body}
      </Typography>
      {catPictureUrl && (
        <StyledImage
          alt="icon_letter"
          width={135}
          height={121}
          src={catPictureUrl}
        />
      )}
      {action && <ActionContainer>{action}</ActionContainer>}
    </Container>
  );
};
