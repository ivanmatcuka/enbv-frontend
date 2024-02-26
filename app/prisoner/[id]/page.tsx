'use client';

import { Grid, styled } from '@mui/material';
import moment from 'moment';
import 'moment/locale/ru';
import { useState } from 'react';
moment.locale('ru_RU');

import { Cards } from '@/app/components/Cards/Cards';
import { MessageDialog } from '@/app/components/Dialog/Dialog';
import { DrawingFrame } from '@/app/components/DrawingFrame/DrawingFrame';
import { Status } from '@/app/components/Status/Status';
import { Article } from '@/components/atoms/Article/Article';
import { Button } from '@/components/atoms/Button/Button';
import { Typography } from '@/components/typography/Typography/Typography';
import { getPrisonerPicture } from '@/helpers/getPrisonerPicture';

import { usePrisoner } from '../../../apollo/hooks/usePrisoner';

const ProfileImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  zIndex: 100,

  inset: 0,

  objectFit: 'cover',

  [theme.breakpoints.down('lg')]: {
    position: 'static',

    width: 184,
    height: 188,
  },
}));

const DescriptionLayout = styled(Typography)({
  p: {
    '&:first-of-type': {
      marginTop: 0,
    },
    '&:last-of-type': {
      marginBottom: 0,
    },
  },
});

export default function Prisoner({ params }: { params: { id: string } }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data, loading } = usePrisoner(params.id);

  const pd = data?.prisoner?.prisonerData;

  const birthday = pd?.birthdate ? moment(pd.birthdate) : null;
  const arrested = pd?.dateofarrest ? moment(pd.dateofarrest) : null;
  const freed = pd?.freedomdate ? moment(pd.freedomdate) : null;
  const addressparsed = data?.prisoner?.prisonerData?.addressparsed;

  const pictureUrl = data?.prisoner?.featuredImage?.node.mediaItemUrl;
  const hasAddress =
    !!addressparsed ||
    addressparsed === 'нет информации' ||
    addressparsed === 'домашний арест';

  return (
    <Grid container>
      {data?.prisoner && (
        <MessageDialog
          prisoner={data.prisoner}
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
      <Grid
        item
        width="100%"
        padding={{ xs: 1, sm: 2, lg: 10.75 }}
        pt={{ xs: 0, sm: 0, lg: 0 }}
      >
        <Grid
          container
          maxWidth={{ xs: '100%', lg: '1200px' }}
          margin="auto"
          flexDirection="column"
          mt={4}
          mb={8}
          position="relative"
        >
          <Grid item ml={{ xs: 0, lg: 40 }}>
            <Typography variant="h1">
              {pd?.name && pd?.name.split(' ')[0]}
            </Typography>
            <Typography variant="h2">
              {pd?.name && pd.name.split(' ').slice(1).join(' ')}
            </Typography>
          </Grid>
          {data?.prisoner?.prisonerData?.status && (
            <Grid item ml={{ xs: 0, lg: 40 }} my={2}>
              <Status
                status={data.prisoner.prisonerData?.status}
                isReleased={!!data.prisoner.prisonerData.freedomdate}
              />
            </Grid>
          )}
          <ProfileImage
            alt={pd?.name ?? 'profile'}
            width={297}
            height={306}
            src={getPrisonerPicture(pictureUrl, pd?.sex)}
          />
          <DrawingFrame
            width="100%"
            p={4}
            alignSelf="center"
            item
            mb={3}
            mt={{ xs: '-40px', lg: 'auto' }}
            pt={{ xs: 10, lg: 4 }}
          >
            <Grid flexDirection="column" container>
              <Grid ml={{ xs: 0, lg: 36 }} item>
                <Grid spacing={1} mb={2} container>
                  {loading && 'Загрузка...'}
                  {data?.prisoner &&
                    data.prisoner.article?.map((article) => (
                      <Grid key={article} item>
                        <Article label={article} />
                      </Grid>
                    ))}
                </Grid>
              </Grid>
              <Grid ml={{ xs: 0, lg: 36 }} item>
                <Typography variant="p3">
                  {`День рождения: ${
                    birthday
                      ? `${birthday.format('DD MMMM YYYY')} (${parseInt(
                          birthday.fromNow(),
                        )})`
                      : '–'
                  }`}
                </Typography>
              </Grid>
              <Grid ml={{ xs: 0, lg: 36 }} item>
                <Typography variant="p3">
                  {`Дата задержания: ${
                    arrested ? arrested.format('DD MMMM YYYY') : '–'
                  }`}
                </Typography>
              </Grid>
              <Grid ml={{ xs: 0, lg: 36 }} item>
                <Typography variant="p3">
                  {`Освобождается: ${
                    freed ? freed.format('DD MMMM YYYY') : '–'
                  }`}
                </Typography>
              </Grid>
              <Grid ml={{ xs: 0, lg: 36 }} item mb={4}>
                <Typography variant="p3">Следующий суд: –</Typography>
              </Grid>
              <Grid item>
                <DescriptionLayout variant="p2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.prisoner?.content ?? '',
                    }}
                  />
                </DescriptionLayout>
              </Grid>
              {!!data?.prisoner?.prisonerData?.mailinterests && (
                <Grid item>
                  <Typography variant="p2">
                    Интересы: {data?.prisoner?.prisonerData?.mailinterests}
                  </Typography>
                </Grid>
              )}
              <Grid mt={10} item>
                <Grid
                  container
                  columnGap={2}
                  rowGap={4}
                  alignItems="center"
                  flexDirection={{ xs: 'column', lg: 'row' }}
                >
                  {hasAddress && (
                    <Grid item>
                      <Button onClick={() => setIsDialogOpen(true)}>
                        написать письмо
                      </Button>
                    </Grid>
                  )}
                  <Grid item>
                    <a href="https://t.me/avtozakinfo_bot" target="_blank">
                      <Button variant="outline">Сообщить о неточности</Button>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DrawingFrame>

          <Grid width="100%" mt={2} item>
            <Cards />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
