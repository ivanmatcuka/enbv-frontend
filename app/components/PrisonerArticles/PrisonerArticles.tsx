import { Grid } from '@mui/material';
import { FC } from 'react';

import { Article } from '@/components/atoms/Article/Article';

type PrisonerArticlesProps = {
  articles: string[];
};
export const PrisonerArticles: FC<PrisonerArticlesProps> = ({ articles }) => {
  return articles?.map((article) => (
    <Grid key={article} item>
      <Article label={article} />
    </Grid>
  ));
};
