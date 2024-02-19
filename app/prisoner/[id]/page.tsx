'use client';

import { Grid, styled } from '@mui/material';
import moment from 'moment';
import Link from 'next/link';

import { DrawingFrame } from '@/app/components/DrawingFrame/DrawingFrame';
import { Article } from '@/components/atoms/Article/Article';
import { Button } from '@/components/atoms/Button/Button';
import { Card } from '@/components/organisms/Card/Card';
import { Typography } from '@/components/typography/Typography/Typography';

import { usePrisoner } from '../../../apollo/hooks/usePrisoner';

const ProfileImage = styled('img')({
  position: 'absolute',
  zIndex: 100,

  inset: 0,

  objectFit: 'cover',
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
      maxWidth={{ xs: '100%', lg: '1200px' }}
      margin="auto"
      flexDirection="column"
      mt={4}
      mb={8}
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
            <Grid spacing={1} mb={2} container>
              {data.prisoner.article?.map((article) => (
                <Grid key={article} item>
                  <Article label={article} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid ml={36} item>
            <Typography variant="p3">
              {`День рождения: ${
                prisonerData?.birthdate
                  ? `${birthday.format('DD MMMM YYYY')} (${parseInt(
                      birthday.fromNow(),
                    )})`
                  : '–'
              }`}
            </Typography>
          </Grid>
          <Grid ml={36} item>
            <Typography variant="p3">
              {`Дата задержания: ${
                prisonerData?.dateofarrest
                  ? arrested.format('DD MMMM YYYY')
                  : '–'
              }`}
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
            <Typography variant="p3">Следующий суд: –</Typography>
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

      <Grid width="100%" mt={2} item>
        <Grid
          container
          columnSpacing="0"
          rowSpacing={2}
          justifyContent="center"
        >
          <Grid item>
            <Card
              title={
                <>
                  НАПИСАТЬ
                  <br />
                  ПИСЬМО
                </>
              }
              body="Людям за решёткой не хватает тёплого и душевного общения. Вы можете писать заключённым письма: рассказать о происходящем в мире и о себе."
              catPictureUrl="/icon_letter.svg"
              action={
                <Link href="#list" scroll>
                  <Button>Написать</Button>
                </Link>
              }
            />
          </Grid>
          <Grid item>
            <Card
              title={
                <>
                  СДЕЛАТЬ
                  <br />
                  ПОЖЕРТВОВАНИЕ
                </>
              }
              body="Даже маленький донат поможет сделать жизнь заключённых лучше. Все пожертвования пойдут на улучшение условий их содержания и на услуги адвокатов."
              catPictureUrl="/icon_money.svg"
              // action={<Button variant="outline">Написать</Button>}
            />
          </Grid>
          <Grid item>
            <Card
              title={
                <>
                  ОТНЕСТИ
                  <br />
                  ПЕРЕДАЧКУ
                </>
              }
              body="Люди в заключении лишены обычных вещей: вкусной еды, одежды и средств гигиены. Каждая передача облегчает жизнь человека за решёткой."
              catPictureUrl="/icon_parcel.svg"
              // action={<Button variant="outline">Написать</Button>}
            />
          </Grid>
          <Grid item>
            <Card
              title="РАСПРОСТРАНИТЬ ИНФОРМАЦИЮ"
              body="Каждую историю несправедливо задержанного или осуждённого человека нельзя замалчивать. О заключённых по политическим мотивам должны знать."
              catPictureUrl="/icon_share.svg"
              action={
                <Link href="/doc.pdf" target="_blank" scroll>
                  <Button>распространить</Button>
                </Link>
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
