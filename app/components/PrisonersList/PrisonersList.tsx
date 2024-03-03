import { Grid } from '@mui/material';
import { FC } from 'react';

import { Prisoners } from '../../../apollo/hooks/usePrisoners';
import { Button } from '../../../components/atoms/Button/Button';
import { CardPZ } from '../../../components/organisms/CardPZ/CardPZ';
import { LetterIcon } from '../icons/LetterIcon/LetterIcon';

type PrisonersListProps = {
  prisoners: Prisoners;
};
export const PrisonersList: FC<PrisonersListProps> = ({ prisoners }) => {
  return prisoners.map(({ node: prisoner }, index) => {
    const { freedomdate, status, canwrite } = prisoner.prisonerData ?? {};

    return (
      <Grid
        item
        xs={12}
        lg={4}
        key={index}
        display="flex"
        justifyContent="center"
      >
        <CardPZ
          status={status}
          articles={prisoner.article}
          body={prisoner.prisonerData?.description}
          name={prisoner.prisonerData?.name}
          sex={prisoner.prisonerData?.sex}
          pictureUrl={prisoner.featuredImage?.node.mediaItemUrl ?? ''}
          freedomdate={freedomdate}
          primaryAction={
            canwrite && (
              <a href={`/prisoner/${prisoner.id}`} key={prisoner.id}>
                <Button endIcon={<LetterIcon />}>написать</Button>
              </a>
            )
          }
          secondaryAction={
            <a href={`/prisoner/${prisoner.id}`} key={prisoner.id}>
              <Button variant="outline">подробнее</Button>
            </a>
          }
        />
      </Grid>
    );
  });
};
