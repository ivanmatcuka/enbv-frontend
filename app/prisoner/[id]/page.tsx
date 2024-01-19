'use client';

import { Grid } from '@mui/material';
import moment from 'moment';

import { DrawingFrame } from '@/app/components/DrawingFrame/DrawingFrame';
import { Button } from '@/components/atoms/Button/Button';
import { Typography } from '@/components/typography/Typography/Typography';

import { usePrisoner } from '../../../apollo/hooks/usePrisoner';

export default function Prisoner({ params }: { params: { id: string } }) {
  const { data } = usePrisoner(params.id);
  moment.locale('fr');
  const prisonerData = data?.prisoner?.prisonerData;
  const birthday = moment(prisonerData?.birthdate ?? '');
  const arrested = moment(prisonerData?.dateArrested ?? '');

  return (
    <Grid
      container
      maxWidth={{ xs: '100%', lg: '1128px' }}
      margin="auto"
      flexDirection="column"
    >
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
              {`Задержан ${arrested.format('DD MMMM YYYY')}`}
            </Typography>
          </Grid>
          <Grid ml={36} item>
            <Typography variant="p3">
              {`Освобождается ${arrested.format('DD MMMM YYYY')}`}
            </Typography>
          </Grid>
          <Grid ml={36} item mb={4}>
            <Typography variant="p3">
              {`Следующий суд: ${arrested.format('DD MMMM YYYY')}`}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="p1">
              {data?.prisoner?.prisonerData?.article}
            </Typography>
          </Grid>
          <Grid mt={10} item>
            <Grid container columnGap={2}>
              <Grid item>
                <Button>НАПИСАТЬ ПИСЬМО</Button>
              </Grid>
              <Grid item>
                <Button variant="outline">НАПИСАТЬ ПИСЬМО</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DrawingFrame>
    </Grid>
  );
}
