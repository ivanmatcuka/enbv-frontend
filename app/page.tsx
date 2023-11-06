import { Grid } from '@mui/material';

import styles from './page.module.css';

import { Logo } from '../components/Logo/Logo';
import { Menu } from '../components/Menu/Menu';
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
      <Grid item className={styles.header} width="100%">
        <Grid container height={650} maxWidth={1200} margin="86px">
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
                <video
                  src="/cat-walking.webm"
                  autoPlay
                  height={118}
                  width={190}
                  loop
                />
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
      <Grid item className={styles.carousel} width="100%">
        <Grid
          container
          height={868}
          maxWidth={1200}
          alignItems="end"
          margin="86px"
          flexDirection="column"
        >
          {/* Right */}
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
        </Grid>
      </Grid>
    </Grid>
  );
}
