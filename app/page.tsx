import { Grid } from '@mui/material';

import styles from './page.module.css';

import { Button } from '../components/Button/Button';
import { Carousel } from '../components/Carousel/Carousel';
import { CarouselImage } from '../components/CarouselImage/CarouselImage';
import { Counter } from '../components/Counter/Counter';
import { Logo } from '../components/Logo/Logo';
import { Menu } from '../components/Menu/Menu';
import { Tabs } from '../components/Tabs/Tabs';
import { Typography } from '../components/Typography/Typography';

const MENU_ITEMS = [
  {
    label: 'КАК ПОМОЧЬ',
  },
  {
    label: 'КОМУ НУЖНА ПОМОЩЬ ПРЯМО СЕЙЧАС',
  },
  {
    label: 'СПИСОК ПРЕСЛЕДУЕМЫХ',
  },
  {
    label: 'ПОЖЕРТВОВАТЬ ПРОЕКТУ',
  },
];

export default function Home() {
  return (
    <Grid container>
      <Grid item className={styles.header} width="100%" padding="86px">
        <Grid container height={650} maxWidth={1200} margin="auto">
          <Grid item flex={1}>
            {/* Left */}
            <Grid container>
              <Grid item mb="89px" mr={1}>
                <Logo />
              </Grid>
              <Grid item mb="89px">
                <Menu items={MENU_ITEMS} />
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
            <img
              src="/photo.png"
              width="600px"
              className={styles.frame__photo}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={styles.carousel} width="100%" padding="86px">
        <Grid
          container
          height={868}
          maxWidth={1200}
          alignItems="end"
          flexDirection="column"
          margin="auto"
        >
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
          <Grid item height={150} width="100%" position="relative" mt={7}>
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
      <Grid item className={styles.numbers} width="100%" padding="86px">
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
          <Grid item width={796}>
            <Tabs
              items={[
                { label: 'по полу и возрасту:', element: 'Lorem ipsum 1' },
                { label: 'на свободе/под стражей', element: 'Lorem ipsum 2' },
                { label: 'по роду занятий', element: 'Lorem ipsum 3' },
              ]}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={styles.why} width="100%" padding="86px">
        <Grid
          container
          maxWidth={1200}
          margin="auto"
          flexDirection="column"
          alignItems="end"
          position="relative"
        >
          <img
            src="/photo-1.png"
            style={{ position: 'absolute', left: -210, top: 78 }}
          />
          <Grid item mb={4.5} textAlign="right">
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
            <img src="/cat_2.svg" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
