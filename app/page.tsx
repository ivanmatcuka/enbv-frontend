import { Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { Carousel } from './components/Carousel/Carousel';
import { CarouselImage } from './components/CarouselImage/CarouselImage';
import styles from './page.module.css';

import { Button } from '../components/atoms/Button/Button';
import { FreeNotFree } from '../components/atoms/FreeNotFree/FreeNotFree';
import { Logo } from '../components/atoms/Logo/Logo';
import { SexAge } from '../components/atoms/SexAge/SexAge';
import { Menu } from '../components/molecules/Menu/Menu';
import { Selector } from '../components/molecules/Selector/Selector';
import { Card } from '../components/organisms/Card/Card';
import { CardPZ } from '../components/organisms/CardPZ/CardPZ';
import { Counter } from '../components/organisms/Counter/Counter';
import { PersonCard } from '../components/organisms/PersonCard/PersonCard';
import { Typography } from '../components/typography/Typography/Typography';

const CARDS = [
  {
    name: 'Габышев Александр Александрович',
    body: 'Согласно постановлению о возбуждении дела, он «с 6 марта по 22 мая, находясь в неустановленном месте, обратился лично в устной форме к группе людей в общественном месте, то есть публично, с призывами к осуществлению экстремистской деятельности».',
    articles: ['ст. 280 УК РФ', 'ст. 280 УК РФ', 'ст. 280 УК РФ'],
    primaryAction: <Button>Написать</Button>,
    secondaryAction: <Button variant="outline">Помочь</Button>,
    pictureUrl: '/card_pz_photo.png',
  },
  {
    name: 'Габышев Александр Александрович',
    body: 'Согласно постановлению о возбуждении дела, он «с 6 марта по 22 мая, находясь в неустановленном месте, обратился лично в устной форме к группе людей в общественном месте, то есть публично, с призывами к осуществлению экстремистской деятельности».',
    articles: ['ст. 280 УК РФ', 'ст. 280 УК РФ', 'ст. 280 УК РФ'],
    primaryAction: <Button>Написать</Button>,
    secondaryAction: <Button variant="outline">Помочь</Button>,
    pictureUrl: '/card_pz_photo.png',
  },
  {
    name: 'Габышев Александр Александрович',
    body: 'Согласно постановлению о возбуждении дела, он «с 6 марта по 22 мая, находясь в неустановленном месте, обратился лично в устной форме к группе людей в общественном месте, то есть публично, с призывами к осуществлению экстремистской деятельности».',
    articles: ['ст. 280 УК РФ', 'ст. 280 УК РФ', 'ст. 280 УК РФ'],
    primaryAction: <Button>Написать</Button>,
    secondaryAction: <Button variant="outline">Помочь</Button>,
    pictureUrl: '/card_pz_photo.png',
  },
  {
    name: 'Габышев Александр Александрович',
    body: 'Согласно постановлению о возбуждении дела, он «с 6 марта по 22 мая, находясь в неустановленном месте, обратился лично в устной форме к группе людей в общественном месте, то есть публично, с призывами к осуществлению экстремистской деятельности».',
    articles: ['ст. 280 УК РФ', 'ст. 280 УК РФ', 'ст. 280 УК РФ'],
    primaryAction: <Button>Написать</Button>,
    secondaryAction: <Button variant="outline">Помочь</Button>,
    pictureUrl: '/card_pz_photo.png',
  },
  {
    name: 'Габышев Александр Александрович',
    body: 'Согласно постановлению о возбуждении дела, он «с 6 марта по 22 мая, находясь в неустановленном месте, обратился лично в устной форме к группе людей в общественном месте, то есть публично, с призывами к осуществлению экстремистской деятельности».',
    articles: ['ст. 280 УК РФ', 'ст. 280 УК РФ', 'ст. 280 УК РФ'],
    primaryAction: <Button>Написать</Button>,
    secondaryAction: <Button variant="outline">Помочь</Button>,
    pictureUrl: '/card_pz_photo.png',
  },
  {
    name: 'Габышев Александр Александрович',
    body: 'Согласно постановлению о возбуждении дела, он «с 6 марта по 22 мая, находясь в неустановленном месте, обратился лично в устной форме к группе людей в общественном месте, то есть публично, с призывами к осуществлению экстремистской деятельности».',
    articles: ['ст. 280 УК РФ', 'ст. 280 УК РФ', 'ст. 280 УК РФ'],
    primaryAction: <Button>Написать</Button>,
    secondaryAction: <Button variant="outline">Помочь</Button>,
    pictureUrl: '/card_pz_photo.png',
  },
];

export default function Home() {
  return (
    <Grid container overflow="hidden">
      <Grid
        item
        className={styles.header}
        width="100%"
        padding={{ xs: 1, sm: 2, lg: 10.75 }}
      >
        <Grid container maxWidth={1200} margin="auto" justifyContent="center">
          <Grid item flex={1} xs={12} sm={6}>
            <Grid container mb={{ xs: 3, lg: 11 }}>
              <Grid item mr={1.5} flexBasis="191px">
                <Logo />
              </Grid>
              <Grid item flexBasis="calc(100% - 203px)">
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
              <Grid item width="100%">
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
        padding={{ xs: 1, sm: 2, lg: 10.75 }}
        paddingTop={{ xs: 6, lg: 'auto' }}
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
          <Grid item width={{ xs: 'auto', lg: 695 }}>
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
              justifyContent="space-between"
              height={577}
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
      <Grid item className={styles.what} id="what" width="100%" padding="86px">
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
          <Grid item width={594} mb={7.25} alignSelf="end" mt="-20px">
            <Typography variant="subtitle1" component="p">
              Мы с вами — это единственный способ связать заключённых с внешним
              миром. Вы можете писать им письма, отправлять донаты, передачи или
              посылки и, конечно же, рассказывать об этих людях.
            </Typography>
          </Grid>
          <Grid width="100%" item>
            <Grid container columnSpacing="0" rowSpacing={2}>
              <Grid item>
                <Card
                  title="НАПИСАТЬ ПИСЬМО"
                  body="Людям за решёткой не хватает тёплого и душевного общения. Вы можете писать заключённым письма: рассказать о происходящем в мире и о себе."
                  catPictureUrl="/icon_letter.svg"
                  action={<Button>Написать</Button>}
                />
              </Grid>
              <Grid item>
                <Card
                  title="СДЕЛАТЬ ПОЖЕРТВОВАНИЕ"
                  body="Даже маленький донат поможет сделать жизнь заключённых лучше. Все пожертвования пойдут на улучшение условий их содержания и на услуги адвокатов."
                  catPictureUrl="/icon_money.svg"
                  action={<Button>Написать</Button>}
                />
              </Grid>
              <Grid item>
                <Card
                  title="ОТНЕСТИ ПЕРЕДАЧКУ"
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
        padding="86px"
        position="relative"
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
        padding="86px"
        position="relative"
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
              <Grid item flexBasis={500}>
                <Image
                  height={320}
                  width={500}
                  alt="photos"
                  src="/photos.png"
                />
              </Grid>
              <Grid item flexBasis="calc(100% - 500px)">
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
                <Grid container rowSpacing={8.5}>
                  {CARDS.map((card, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                      <CardPZ
                        articles={[
                          'ст. 280 УК РФ',
                          'ст. 280 УК РФ',
                          'ст. 280 УК РФ',
                        ]}
                        body="Согласно постановлению о возбуждении дела, он «с 6 марта по 22 мая, находясь в неустановленном месте, обратился лично в устной форме к группе людей в общественном месте, то есть публично, с призывами к осуществлению экстремистской деятельности»."
                        name="Габышев Александр Александрович"
                        pictureUrl="/card_pz_photo.png"
                        primaryAction={<Button>Написать</Button>}
                        secondaryAction={
                          <Button variant="outline">Помочь</Button>
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
