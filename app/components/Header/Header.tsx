import { Grid } from '@mui/material';

import { Logo } from '@/components/atoms/Logo/Logo';
import { Menu } from '@/components/molecules/Menu/Menu';

export default function Header() {
  return (
    <Grid container overflow="hidden">
      <Grid
        item
        width="100%"
        padding={{ xs: 1, sm: 2, lg: 10.75 }}
        pb={{ xs: 0, sm: 0, lg: 0 }}
      >
        <Grid
          container
          maxWidth={1200}
          margin="auto"
          justifyContent={{ xs: 'center', lg: 'space-between' }}
        >
          <Grid item flex={1} xs={12} lg={6}>
            <Grid container>
              <Grid item mr={1.5} flexBasis="191px">
                <a href="/">
                  <Logo />
                </a>
              </Grid>
              <Grid item flexBasis="calc(100% - 203px)">
                <Menu
                  items={[
                    {
                      element: <a href="/#what">КАК ПОМОЧЬ</a>,
                    },
                    {
                      element: (
                        <a href="/#whom">КОМУ НУЖНА ПОМОЩЬ ПРЯМО СЕЙЧАС</a>
                      ),
                    },
                    {
                      element: <a href="/#list">СПИСОК ПРЕСЛЕДУЕМЫХ</a>,
                    },
                    {
                      element: <a href="/#footer">ПОЖЕРТВОВАТЬ ПРОЕКТУ</a>,
                    },
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
