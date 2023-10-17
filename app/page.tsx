import { Grid } from '@mui/material';

import styles from './page.module.css';

export default function Home() {
  return (
    <Grid container className={styles.header}>
      <Grid item>
        <Grid container>
          <Grid item>
            <p>Голос для тех, кто вычеркнут</p>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
