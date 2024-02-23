import { Grid, styled } from '@mui/material';
import Image from 'next/image';
import { FC, useEffect, useMemo, useState } from 'react';

import { FilterCheckbox } from '@/components/molecules/FilterCheckbox/FilterCheckbox';
import { FilterSlider } from '@/components/molecules/FilterSlider/FilterSlider';
import { Input } from '@/components/molecules/Input/Input';
import { getRegions } from '@/helpers/getRegions';

import {
  Prisoners,
  PrisonersInput,
  usePrisoners,
} from '../../../apollo/hooks/usePrisoners';
import { Button } from '../../../components/atoms/Button/Button';
import { CardPZ } from '../../../components/organisms/CardPZ/CardPZ';
import { Typography } from '../../../components/typography/Typography/Typography';
import { SearchIcon } from '../icons/SearchIcon/SearchIcon';

const DEFAULT_OFFSET = 300;
const DEFAULT_PAGINATION = 9;

const SearchField = styled(Input)(() => ({
  width: '100%',
}));

export const PrisonersList: FC = () => {
  const [pagination, setPgination] = useState(DEFAULT_PAGINATION);
  const [filter, setFilter] = useState<PrisonersInput>({});
  const [cachedPrisoners, setCachedPrisoners] = useState<Prisoners>([]);

  const hasFilters = useMemo(() => Object.keys(filter).length > 0, [filter]);

  const { data, loading } = usePrisoners(
    hasFilters ? DEFAULT_OFFSET : undefined,
    filter,
  );

  const prisoners = data?.prisoners?.edges;

  useEffect(() => {
    if (!prisoners || loading) return;

    setCachedPrisoners(prisoners.slice(0, pagination));
  }, [prisoners, loading, pagination]);

  const hasMore = !!((data?.prisoners?.edges.length ?? 0) + 1 > pagination);

  return (
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
          <Grid item flexBasis={{ xs: 'auto', lg: 500 }}>
            <Image
              height={320}
              width={500}
              alt="photos"
              src="/photos.png"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item flexBasis={{ xs: 'auto', lg: 'calc(100% - 500px)' }}>
            <Typography
              variant="subtitle1"
              color="brand.black"
              component="span"
            >
              Здесь собраны истории тех, кто заперт за решёткой из-за своих
              убеждений. Не все они признаны политзаключёнными. Среди фигурантов
              этих уголовных дел есть люди с разными политическими взглядами.
              <br />
              <br />
              Если бы не российский политический режим и война, все они были бы
              на свободе. Мы можем рассказать о несправедливо заключённых людях,
              чтобы о них узнали во всем мире. В этом списке важно каждое имя.
            </Typography>
          </Grid>
          <Grid item flexBasis="100%" mt={9.25} mb={1}>
            <SearchField
              startAdornment={<SearchIcon />}
              placeholder="Поиск по ФИО"
              onChange={(e) => {
                setFilter({ ...filter, search: e.target.value });
              }}
            />
          </Grid>
          <Grid item mr={1}>
            <FilterSlider
              label="Возраст"
              min={0}
              max={99}
              onChange={(value: number[]) =>
                setFilter({ ...filter, ageMin: value[0], ageMax: value[1] })
              }
            />
          </Grid>
          <Grid item>
            <FilterCheckbox
              label="регион"
              options={getRegions().map(({ name }) => ({
                id: name,
                value: name,
              }))}
              onChange={(value: number | string | null) =>
                setFilter({ ...filter, search: String(value) })
              }
            />
          </Grid>
          <Grid item flexBasis="100%" textAlign="center" mb={4}>
            <Typography variant="subtitle1">
              {loading ? 'Загрузка...' : `Найдено: ${prisoners?.length}`}
            </Typography>
          </Grid>
          <Grid item flex={1} mt={10} flexBasis="100%">
            <Grid container rowSpacing={8.5} justifyContent="center">
              {cachedPrisoners.map(({ node: prisoner }, index) => (
                <Grid
                  item
                  xs={12}
                  lg={4}
                  key={index}
                  display="flex"
                  justifyContent="center"
                >
                  <CardPZ
                    articles={prisoner.article}
                    body={prisoner.prisonerData?.description}
                    name={prisoner.prisonerData?.name}
                    sex={prisoner.prisonerData?.sex}
                    pictureUrl={prisoner.featuredImage?.node.mediaItemUrl ?? ''}
                    primaryAction={
                      <a href={`/prisoner/${prisoner.id}`} key={prisoner.id}>
                        <Button>написать ✉</Button>
                      </a>
                    }
                    secondaryAction={
                      <a href={`/prisoner/${prisoner.id}`} key={prisoner.id}>
                        <Button variant="outline">помочь</Button>
                      </a>
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {hasMore && (
        <Grid m="auto" item>
          <Button
            disabled={loading}
            variant="outline"
            onClick={() => setPgination(pagination + DEFAULT_PAGINATION)}
          >
            {loading ? 'загрузка...' : ' показать ещё'}
          </Button>
        </Grid>
      )}
    </Grid>
  );
};
