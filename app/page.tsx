'use client';

import { Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { Carousel } from './components/Carousel/Carousel';
import { CarouselImage } from './components/CarouselImage/CarouselImage';
import styles from './page.module.css';

import { usePrisoners } from '../apollo/hooks/usePrisoners';
import { Button } from '../components/atoms/Button/Button';
import { FreeNotFree } from '../components/atoms/FreeNotFree/FreeNotFree';
import { SexAge } from '../components/atoms/SexAge/SexAge';
import { Selector } from '../components/molecules/Selector/Selector';
import { Card } from '../components/organisms/Card/Card';
import { CardPZ } from '../components/organisms/CardPZ/CardPZ';
import { Counter } from '../components/organisms/Counter/Counter';
import { PersonCard } from '../components/organisms/PersonCard/PersonCard';
import { Typography } from '../components/typography/Typography/Typography';

export default function Home() {
  const { data } = usePrisoners();

  return (
    <Grid container>
      <Grid
        item
        className={styles.header}
        width="100%"
        padding={{ xs: 1, sm: 2, lg: 10.75 }}
        pt={{ xs: 0, sm: 0, lg: 0 }}
      >
        <Grid
          container
          maxWidth={1200}
          margin="auto"
          justifyContent={{ xs: 'center', lg: 'space-between' }}
        >
          <Grid item flex={1} xs={12} lg={6}>
            <Grid
              container
              mb={{ xs: 3, lg: 11 }}
              minWidth={{ xs: 0, lg: 695 }}
            >
              {/* XS photo */}
              <Grid
                item
                className={styles.frame}
                xs={12}
                position="relative"
                justifyContent="center"
                display={{ xs: 'flex', lg: 'none' }}
                mt={3}
              >
                <Image
                  alt="photo"
                  src="/photo.png"
                  width={572}
                  height={331}
                  className={styles.frame__photo}
                />
              </Grid>

              <Grid item mt={{ xs: 3, lg: 11.75 }} mb={{ xs: 1.5, lg: 4.5 }}>
                <Typography variant="h1" color="brand.red">
                  Голос для тех, кто вычеркнут
                </Typography>
              </Grid>
              <Grid item width="100%" pl={{ xs: 0, lg: '101px' }}>
                <Typography
                  variant="subtitle1"
                  textAlign="left"
                  lineHeight="32.74px"
                  margin="auto"
                >
                  Помогите людям, которые подверглись репрессиям за свои
                  взгляды!
                </Typography>
              </Grid>

              <Grid item mt={{ xs: 3, lg: 11.75 }}>
                <Grid container alignItems="start">
                  <Grid item display={{ xs: 'none', lg: 'block' }}>
                    <video
                      src="/cat-walking.webm"
                      autoPlay
                      height={118}
                      width={190}
                      loop
                    />
                  </Grid>
                  <Grid
                    item
                    flexBasis={{ xs: '140px', lg: 'auto' }}
                    display={{ xs: 'block', lg: 'none' }}
                  >
                    <video
                      src="/cat-walking.webm"
                      autoPlay
                      height={87}
                      width={140}
                      loop
                    />
                  </Grid>
                  <Grid
                    item
                    pl={1.5}
                    flexBasis={{ xs: 'calc(100% - 140px)', lg: 'auto' }}
                  >
                    <Button>ПОМОЧЬ СЕЙЧАС</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* LG photo */}
          <Grid
            item
            className={styles.frame}
            lg={6}
            display={{ xs: 'none', lg: 'flex' }}
            position="relative"
            justifyContent="center"
            mt="-130px"
          >
            <Image
              alt="photo"
              src="/photo.png"
              width={600}
              height={381}
              className={styles.frame__photo}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Carousel section */}
      <Grid
        item
        className={styles.carousel}
        width="100%"
        py={{ xs: 6, lg: 10.75 }}
        px={2}
        position="relative"
      >
        <Grid
          container
          maxWidth={1200}
          alignItems="end"
          flexDirection="column"
          margin="auto"
        >
          <Image
            alt="scraches"
            src="/scratches.png"
            width={700}
            height={483}
            className={styles.carousel__scratches}
          />
          <Grid item width={{ xs: 'auto', lg: 695 }} zIndex={200}>
            <Typography variant="h1" color="brand.yellow">
              Жертвы своего мнения
            </Typography>
          </Grid>
          <Grid item width={{ xs: 'auto', lg: 594 }} mt={4} zIndex={200}>
            <Typography
              variant="subtitle1"
              color="brand.white"
              lineHeight="32.74px"
            >
              В этой базе мы собрали имена людей, которые пострадали за свои
              поступки или убеждения. Среди них есть и те, кто совершал поджоги
              и диверсии. Насильственные преступления нельзя оправдать, но мы
              считаем, что этим людям нужна поддержка. Ведь они были бы на
              свободе, если бы не было войны.
            </Typography>
          </Grid>
          <Grid item height={150} width="100%" mt={7} zIndex={200}>
            <Carousel>
              {data?.prisoners?.edges
                .map(
                  ({ node: prisoner }) =>
                    prisoner.featuredImage?.node.mediaItemUrl && (
                      <Link href={`/prisoner/${prisoner.id}`} key={prisoner.id}>
                        <CarouselImage
                          key={prisoner.id}
                          height={150}
                          src={prisoner.featuredImage.node.mediaItemUrl}
                        />
                      </Link>
                    ),
                )
                .filter(Boolean)}
            </Carousel>
          </Grid>
          <Grid item alignSelf="center" mt={8}>
            <Button variant="red">УЗНАЙТЕ ИХ ИСТОРИИ</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        className={styles.numbers}
        width="100%"
        position="relative"
        py={{ xs: 6, lg: 10.75 }}
        px={2}
      >
        <Grid container maxWidth={1200} margin="auto">
          <Grid item mb={4.5} flex="1 0 100%">
            <Typography variant="h1" color="brand.red">
              Числа и лица
            </Typography>
          </Grid>
          <Grid item width={392}>
            <Grid
              container
              flexDirection="column"
              alignItems="baseline"
              justifyContent="space-between"
              height={{ xs: 443, lg: 575 }}
            >
              <Grid item>
                <Counter label="Всего политзаключённых:">1117</Counter>
              </Grid>
              <Grid item>
                <Counter label="Сколько дел в процессе">857</Counter>
              </Grid>
              <Grid item>
                <Counter
                  label="Писем сегодня отправлено:"
                  catPictureUrl="/cat_sad.svg"
                >
                  0
                </Counter>
              </Grid>
              <Grid item>
                <Button>НАПИСАТЬ ПИСЬМО</Button>
              </Grid>
            </Grid>
          </Grid>
          {/* Right */}
          <Grid item mt={{ xs: 3, lg: -1.5 }} mb={{ xs: 8 }}>
            <Selector
              items={[
                {
                  label: 'по полу и возрасту:',
                  element: (
                    <SexAge
                      data={[
                        {
                          age: 15,
                          female: 3,
                          label: '15–19',
                          male: 40,
                        },
                        {
                          age: 20,
                          female: 4,
                          label: '20-24',
                          male: 70,
                        },
                        {
                          age: 25,
                          female: 10,
                          label: '25-29',
                          male: 60,
                        },
                        {
                          age: 30,
                          female: 10,
                          label: '30-34',
                          male: 60,
                        },
                        {
                          age: 35,
                          female: 10,
                          label: '35-39',
                          male: 60,
                        },
                      ]}
                    />
                  ),
                },
                {
                  label: 'на свободе/под стражей',
                  element: <FreeNotFree free={457} notFree={535} />,
                },
              ]}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        className={styles.why}
        id="why"
        width="100%"
        position="relative"
        padding={{ xs: 1, sm: 2, lg: 10.75 }}
        paddingTop={{ xs: 6, lg: 'auto' }}
      >
        <Image
          alt="strokes"
          src="/strokes.png"
          width={548}
          height={377}
          className={styles.why__strokes}
        />
        <Grid
          container
          maxWidth={1200}
          margin="auto"
          flexDirection="column"
          alignItems="end"
          position="relative"
        >
          <Image
            alt="photo-1"
            src="/photo-1.png"
            width={645}
            height={428}
            className={styles.why__photo}
          />
          <Grid item mb={4.5} textAlign="right" zIndex={200}>
            <Typography variant="h1" color="brand.yellow">
              Почему помочь —<br />
              это важно?
            </Typography>
          </Grid>
          <Grid item maxWidth={594} mb={{ lg: 7.25 }} order={{ xs: 2, lg: 1 }}>
            <Typography variant="subtitle1" component="p">
              Заключённые лишены не только свободы, но и даже обычных вещей.
              Время для них фактически останавливается, а за решёткой не
              происходит почти никаких позитивных событий. Люди в СИЗО и
              колониях зачастую теряют связь с внешним миром и возможность
              узнавать о новостях.
            </Typography>
          </Grid>
          <Grid
            item
            order={{ xs: 1, lg: 2 }}
            mt={{ xs: 3 }}
            mb={{ xs: 7, lg: 0 }}
          >
            <Image
              alt="cat_2"
              width={230}
              height={177}
              className={styles.why__cat}
              src="/cat_2.svg"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        className={styles.what}
        id="what"
        width="100%"
        padding={{ xs: 1, sm: 2, lg: 10.75 }}
        paddingTop={{ xs: 6, lg: 'auto' }}
      >
        <Grid
          container
          maxWidth={1200}
          margin="auto"
          flexDirection="column"
          alignItems="start"
          position="relative"
        >
          <Image
            alt="arrow"
            width={89}
            height={129}
            src="/arrow.png"
            className={styles.what__arrow}
          />
          <Image
            alt="scratches_2"
            width={508}
            height={347}
            src="/scratches_2.png"
            className={styles.what__scratches}
          />
          <Image
            alt="stripes"
            width={508}
            height={350}
            src="/stripes.png"
            className={styles.what__stripes}
          />
          <Grid item textAlign="left" zIndex={200}>
            <Typography variant="h1" color="brand.red">
              Что вы можете
              <br />
              сделать?
            </Typography>
          </Grid>
          <Grid
            item
            maxWidth={594}
            mb={7.25}
            alignSelf="end"
            mt={{ xs: 4, lg: '-20px' }}
          >
            <Typography variant="subtitle1" component="p">
              Мы с вами — это единственный способ связать заключённых с внешним
              миром. Вы можете писать им письма, отправлять донаты, передачи или
              посылки и, конечно же, рассказывать об этих людях.
            </Typography>
          </Grid>
          <Grid width="100%" item>
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
                  action={<Button>Написать</Button>}
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
                  action={<Button>Написать</Button>}
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
                  action={<Button>Написать</Button>}
                />
              </Grid>
              <Grid item>
                <Card
                  title="РАСПРОСТРАНИТЬ ИНФОРМАЦИЮ"
                  body="Каждую историю несправедливо задержанного или осуждённого человека нельзя замалчивать. О заключённых по политическим мотивам должны знать."
                  catPictureUrl="/icon_share.svg"
                  action={<Button>Написать</Button>}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        className={styles.whom}
        id="whom"
        width="100%"
        position="relative"
        padding={{ xs: 1, sm: 2, lg: 10.75 }}
        paddingTop={{ xs: 6, lg: 'auto' }}
      >
        <Grid
          container
          maxWidth={1100}
          margin="auto"
          flexDirection="column"
          alignItems="start"
          position="relative"
          gap={7.25}
        >
          <Grid item textAlign="left" zIndex={200}>
            <Typography variant="h1" color="brand.yellow">
              Кому можно помочь
              <br />
              прямо сейчас?
            </Typography>
          </Grid>

          <Grid item width="100%" mb={-2.75}>
            <Typography variant="subtitle1" color="brand.white">
              Скоро день рождения: можно поздравить
            </Typography>
          </Grid>
          <Grid item>
            <Grid container gap={1.5} rowGap={4.5} flexWrap="nowrap">
              <Grid item>
                <PersonCard
                  size="l"
                  photoUrl="/person.webp"
                  name="Габышев Александр"
                  subtitle="18 сентября"
                />
              </Grid>
              <Grid item>
                <PersonCard
                  size="l"
                  photoUrl="/person.webp"
                  name="Габышев Александр"
                  subtitle="18 сентября"
                />
              </Grid>
              <Grid item>
                <PersonCard
                  size="l"
                  photoUrl="/person.webp"
                  name="Габышев Александр"
                  subtitle="18 сентября"
                />
              </Grid>
              <Grid item>
                <PersonCard
                  size="l"
                  photoUrl="/person.webp"
                  name="Габышев Александр"
                  subtitle="18 сентября"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container gap={1.5} rowGap={4.5}>
              <Grid item width="100%">
                <Typography variant="subtitle1" color="brand.white">
                  Скоро освобождаются: можно встретить
                </Typography>
              </Grid>
              <Grid item>
                <PersonCard
                  size="m"
                  photoUrl="/person.webp"
                  name="Габышев Александр"
                  subtitle="18 сентября"
                />
              </Grid>
              <Grid item>
                <PersonCard
                  size="m"
                  photoUrl="/person.webp"
                  name="Габышев Александр"
                  subtitle="18 сентября"
                />
              </Grid>
              <Grid item>
                <PersonCard
                  size="m"
                  photoUrl="/person.webp"
                  name="Габышев Александр"
                  subtitle="18 сентября"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container gap={1.5} rowGap={4.5}>
              <Grid item width="100%">
                <Typography variant="subtitle1" color="brand.white">
                  Скоро суд: можно сходить
                </Typography>
              </Grid>
              <Grid item>
                <PersonCard
                  size="m"
                  photoUrl="/person.webp"
                  name="Габышев Александр"
                  subtitle="18 сентября"
                />
              </Grid>
              <Grid item>
                <PersonCard
                  size="m"
                  photoUrl="/person.webp"
                  name="Габышев Александр"
                  subtitle="18 сентября"
                />
              </Grid>
              <Grid item>
                <PersonCard
                  size="m"
                  photoUrl="/person.webp"
                  name="Габышев Александр"
                  subtitle="18 сентября"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        className={styles.list}
        id="list"
        width="100%"
        position="relative"
        py={{ xs: 6, lg: 10.75 }}
        px={2}
      >
        <Grid
          container
          maxWidth={1200}
          margin="auto"
          alignItems="start"
          position="relative"
          gap={7.25}
        >
          <Grid item textAlign="left" zIndex={200}>
            <Typography variant="h1" color="brand.red">
              Список
              <br />
              преследуемых
            </Typography>
          </Grid>

          <Grid item>
            <Grid container width="100%">
              <Grid item flexBasis={{ xs: 'auto', lg: 500 }}>
                <Image
                  height={320}
                  width={500}
                  alt="photos"
                  src="/photos.png"
                  style={{ maxWidth: '100%' }}
                />
              </Grid>
              <Grid item flexBasis={{ xs: 'auto', lg: 'calc(100% - 500px)' }}>
                <Typography
                  variant="subtitle1"
                  color="brand.black"
                  component="span"
                >
                  Здесь собраны истории тех, кто заперт за решёткой из-за своих
                  убеждений. Не все они признаны политзаключёнными. Среди
                  фигурантов этих уголовных дел есть люди с разными
                  политическими взглядами.
                  <br />
                  <br />
                  Если бы не российский политический режим и война, все они были
                  бы на свободе. Мы можем рассказать о несправедливо заключённых
                  людях, чтобы о них узнали во всем мире. В этом списке важно
                  каждое имя.
                </Typography>
              </Grid>
              <Grid item flex={1} mt={10}>
                <Grid container rowSpacing={8.5} justifyContent="center">
                  {data?.prisoners &&
                    data.prisoners.edges.map(({ node: card }, index) => (
                      <Grid
                        item
                        xs={12}
                        lg={4}
                        key={index}
                        display="flex"
                        justifyContent="center"
                      >
                        <CardPZ
                          articles={[]}
                          body={card.prisonerData?.description ?? ''}
                          name={card.prisonerData?.name ?? ''}
                          sex={card.prisonerData?.sex ?? ''}
                          pictureUrl={
                            card.featuredImage?.node.mediaItemUrl ?? ''
                          }
                          primaryAction={
                            <Link href={`/prisoner/${card.id}`} key={card.id}>
                              <Button>написать</Button>
                            </Link>
                          }
                          secondaryAction={
                            <Link href={`/prisoner/${card.id}`} key={card.id}>
                              <Button variant="outline">помочь</Button>
                            </Link>
                          }
                        />
                      </Grid>
                    ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
