import { Grid } from '@mui/material';

import styles from './page.module.css';

import { Logo } from '../components/Logo/Logo';
import { Menu } from '../components/Menu/Menu';
import { Typography } from '../components/Typography/Typography';

const MENU_ITEMS = [
  {
    label: 'КАК ПОМОЧЬ',
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
    <div className={styles.container}>
      <Grid container margin="86px" height={822} maxWidth={1200}>
        <Grid item>
          <Grid container height={650} direction="row">
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
      </Grid>
    </div>
  );
}
