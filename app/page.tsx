import { Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';

import { Button } from '../components/Button/Button';
import { Carousel } from '../components/Carousel/Carousel';
import { CarouselImage } from '../components/CarouselImage/CarouselImage';
import { Counter } from '../components/Counter/Counter';
import { Logo } from '../components/Logo/Logo';
import { Menu } from '../components/Menu/Menu';
import { SexAge } from '../components/SexAge/SexAge';
import { Tabs } from '../components/Tabs/Tabs';
import { Typography } from '../components/Typography/Typography';

export default function Home() {
  return (
    <Grid container overflow="hidden">
      <Grid item className={styles.header} width="100%" padding="86px">
        <Grid container height={650} maxWidth={1200} margin="auto">
          <Grid item flex={1}>
            {/* Left */}
            <Grid container>
              <Grid item mb="89px" mr={1}>
                <Logo />
              </Grid>
              <Grid item mb="89px">
                <Menu
                  items={[
                    {
                      element: (
                        <Link href="#why" scroll={true}>
                          КАК ПОМОЧЬ
                        </Link>
                      ),
                    },
                    {
                      element: (
                        <Link href="#why" scroll={true}>
                          КОМУ НУЖНА ПОМОЩЬ ПРЯМО СЕЙЧАС
                        </Link>
                      ),
                    },
                    {
                      element: (
                        <Link href="#why" scroll={true}>
                          СПИСОК ПРЕСЛЕДУЕМЫХ
                        </Link>
                      ),
                    },
                    {
                      element: (
                        <Link href="#why" scroll={true}>
                          ПОЖЕРТВОВАТЬ ПРОЕКТУ
                        </Link>
                      ),
                    },
                  ]}
                />
              </Grid>
              <Grid item mb={4.5}>
                <Typography variant="h1" color="brand.red">
                  Голос для тех, кто вычеркнут
                </Typography>
              </Grid>
              <Grid item width="100%">
                <Typography
                  variant="subtitle1"
                  textAlign="left"
                  width={493}
                  lineHeight="32.74px"
                  margin="auto"
                  mb="94px"
                >
                  Помогите людям, которые подверглись репрессиям за свои
                  взгляды!
                </Typography>
              </Grid>
              <Grid item>
                <Grid container alignItems="start">
                  <Grid item>
                    <video
                      src="/cat-walking.webm"
                      autoPlay
                      height={118}
                      width={190}
                      loop
                    />
                  </Grid>
                  <Grid item pl={1}>
                    <Button>ПОМОЧЬ СЕЙЧАС</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Right */}
          <Grid item width={493} className={styles.frame}>
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
      <Grid
        item
        className={styles.carousel}
        width="100%"
        padding="86px"
        position="relative"
      >
        <Grid
          container
          height={868}
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
          <Grid item width={695}>
            <Typography variant="h1" color="brand.yellow">
              Жертвы своего мнения
            </Typography>
          </Grid>
          <Grid item width={594} mt={4}>
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
          <Grid item height={150} width="100%" mt={7}>
            <Carousel>
              <CarouselImage height={150} src="/carousel/carousel-1.png" />
              <CarouselImage height={150} src="/carousel/carousel-2.png" />
              <CarouselImage height={150} src="/carousel/carousel-3.png" />
              <CarouselImage height={150} src="/carousel/carousel-4.png" />
              <CarouselImage height={150} src="/carousel/carousel-5.png" />
              <CarouselImage height={150} src="/carousel/carousel-6.png" />
              <CarouselImage height={150} src="/carousel/carousel-7.png" />
              <CarouselImage height={150} src="/carousel/carousel-8.png" />
              <CarouselImage height={150} src="/carousel/carousel-9.png" />
              <CarouselImage height={150} src="/carousel/carousel-10.png" />
              <CarouselImage height={150} src="/carousel/carousel-11.png" />
              <CarouselImage height={150} src="/carousel/carousel-12.png" />
              <CarouselImage height={150} src="/carousel/carousel-13.png" />
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
        padding="86px"
        position="relative"
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
              gap={4}
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
          <Grid item width={796} mt={-1.5}>
            <Tabs
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
                { label: 'на свободе/под стражей', element: 'Lorem ipsum 2' },
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
        padding="86px"
        position="relative"
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
          <Grid item width={594} mb={7.25}>
            <Typography variant="subtitle1" component="p">
              Заключённые лишены не только свободы, но и даже обычных вещей.
              Время для них фактически останавливается, а за решёткой не
              происходит почти никаких позитивных событий. Люди в СИЗО и
              колониях зачастую теряют связь с внешним миром и возможность
              узнавать о новостях.
            </Typography>
          </Grid>
          <Grid item>
            <Image alt="cat_2" width={230} height={177} src="/cat_2.svg" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
