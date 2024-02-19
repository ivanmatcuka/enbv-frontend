'use client';

import { Grid, styled } from '@mui/material';
import moment from 'moment';

import { DrawingFrame } from '@/app/components/DrawingFrame/DrawingFrame';
import { Button } from '@/components/atoms/Button/Button';
import { Typography } from '@/components/typography/Typography/Typography';

import { usePrisoner } from '../../../apollo/hooks/usePrisoner';

const ProfileImage = styled('img')({
  position: 'absolute',
  zIndex: 100,

  inset: 0,
});

export default function Prisoner({ params }: { params: { id: string } }) {
  const { data } = usePrisoner(params.id);

  const prisonerData = data?.prisoner?.prisonerData;
  const birthday = moment(prisonerData?.birthdate ?? '');
  const arrested = moment(prisonerData?.dateofarrest ?? '');
  const freed = moment(prisonerData?.freedomdate ?? '');

  const pictureUrl = data?.prisoner?.featuredImage?.node.mediaItemUrl ?? '';

  if (!data?.prisoner) return;

  return (
    <Grid
      container
      maxWidth={{ xs: '100%', lg: '1128px' }}
      margin="auto"
      flexDirection="column"
      mt={4}
      position="relative"
    >
      <ProfileImage
        alt={prisonerData?.name ?? 'profile'}
        width={297}
        height={306}
        src={
          pictureUrl
            ? pictureUrl
            : data.prisoner.prisonerData?.sex === 'мужской'
            ? '/default_man.png'
            : '/default_woman.png'
        }
      />
      <Grid item ml={40} mb={4}>
        <Typography variant="h1">
          {prisonerData?.name && prisonerData?.name.split(' ')[0]}
        </Typography>
        <Typography variant="h2">
          {prisonerData?.name &&
            prisonerData.name.split(' ').slice(1).join(' ')}
        </Typography>
      </Grid>
      <DrawingFrame width="100%" p={4} alignSelf="center" item mb={3}>
        <Grid flexDirection="column" container>
          <Grid ml={36} item>
            <Typography variant="p3">
              {`${birthday.format('DD MMMM YYYY')} (${parseInt(
                birthday.fromNow(),
              )})`}
            </Typography>
          </Grid>
          <Grid ml={36} item>
            <Typography variant="p3">
              {`Задержан: ${arrested.format('DD MMMM YYYY')}`}
            </Typography>
          </Grid>
          <Grid ml={36} item>
            <Typography variant="p3">
              {`Освобождается: ${
                prisonerData?.freedomdate ? freed.format('DD MMMM YYYY') : '–'
              }`}
            </Typography>
          </Grid>
          <Grid ml={36} item mb={4}>
            <Typography variant="p3">
              {`Следующий суд: ${arrested.format('DD MMMM YYYY')}`}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="p1">
              {data?.prisoner?.prisonerData?.description}
            </Typography>
          </Grid>
          <Grid mt={10} item>
            <Grid container columnGap={2}>
              <Grid item>
                <Button>написать письмо</Button>
              </Grid>
              <Grid item>
                <Button variant="outline">помочь по-другому</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DrawingFrame>
    </Grid>
  );
}
