import { Grid } from '@mui/material';

import { Button } from '@/components/atoms/Button/Button';
import { Card } from '@/components/organisms/Card/Card';

export const Cards = () => (
  <Grid container columnSpacing="0" rowSpacing={2} justifyContent="center">
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
          <a href="#list">
            <Button>Написать</Button>
          </a>
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
        action={
          <Button variant="outline" disabled>
            Написать
          </Button>
        }
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
        action={
          <Button variant="outline" disabled>
            Написать
          </Button>
        }
      />
    </Grid>
    <Grid item>
      <Card
        title="РАСПРОСТРАНИТЬ ИНФОРМАЦИЮ"
        body="Каждую историю несправедливо задержанного или осуждённого человека нельзя замалчивать. О заключённых по политическим мотивам должны знать."
        catPictureUrl="/icon_share.svg"
        action={
          <a href="/doc.pdf" target="_blank">
            <Button>распространить</Button>
          </a>
        }
      />
    </Grid>
  </Grid>
);
