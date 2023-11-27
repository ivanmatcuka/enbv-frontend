import { styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { Button } from '../../../components/atoms/Button/Button';
import { Typography } from '../../../components/typography/Typography/Typography';

const PersonCardContainer = styled('div')<{ photoUrl: string }>(
  ({ photoUrl }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
    overflow: 'hidden',

    background: `linear-gradient(0deg, rgba(7, 71, 59, 0.30) 0%, rgba(7, 71, 59, 0.30) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 56.67%, rgba(0, 0, 0, 0.60) 100%), url(${photoUrl}) no-repeat`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',

    h2: {
      textTransform: 'uppercase',
    },

    '&:hover': {
      background: `linear-gradient(0deg, rgba(7, 71, 59, 0.50) 0%, rgba(7, 71, 59, 0.50) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%), url(${photoUrl}) no-repeat`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',

      '.button': {
        opacity: 1,
      },
    },
  }),
);

const PersonCardContent = styled('div')({
  position: 'absolute',
  bottom: 9,
  left: 12,

  color: 'white',
});

const ButtonContainer = styled('div')({
  opacity: 0,
  transition: 'opacity 0.125s ease-in-out',
});

type PersonCardProps = {
  size: 'l' | 'm';
  photoUrl: string;
  name: string;
  subtitle: string;
};

export const PersonCard: FC<PropsWithChildren<PersonCardProps>> = ({
  size,
  photoUrl,
  name,
  subtitle,
}) => {
  return (
    <PersonCardContainer
      sx={{
        width: size === 'l' ? 392 : 291,
        height: size === 'l' ? 392 : 291,
      }}
      photoUrl={photoUrl}
    >
      <ButtonContainer className="button">
        <Button variant="red">НАПИСАТЬ</Button>
      </ButtonContainer>

      <PersonCardContent>
        <Typography variant="h2">{name}</Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
      </PersonCardContent>
    </PersonCardContainer>
  );
};
