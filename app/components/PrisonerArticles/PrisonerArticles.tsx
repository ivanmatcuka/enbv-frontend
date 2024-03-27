import { Grid } from '@mui/material';
import { FC } from 'react';

import { Prisoner } from '@/apollo/hooks/usePrisoners';
import { Article } from '@/components/atoms/Article/Article';

type PrisonerArticlesProps = {
  article: Prisoner['article'];
};
export const PrisonerArticles: FC<PrisonerArticlesProps> = ({ article }) => {
  return article?.map((article) => (
    <Grid key={article} item>
      <Article label={article} />
    </Grid>
  ));
};
