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
import { Typography } from '../../../components/typography/Typography/Typography';
import { SearchIcon } from '../icons/SearchIcon/SearchIcon';
import { PrisonersList } from '../PrisonersList/PrisonersList';

const DEFAULT_OFFSET = 300;
const DEFAULT_PAGINATION = 9;

const SearchField = styled(Input)(() => ({
  width: '100%',
}));

const Heading = styled(Typography)(() => ({
  wordBreak: 'break-word',
}));

export const PrisonersSearch: FC = () => {
  const [pagination, setPgination] = useState(DEFAULT_PAGINATION);
  const [cachedPrisoners, setCachedPrisoners] = useState<Prisoners>([]);

  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number[]>([0, 99]);
  const [region, setRegion] = useState<string>('');
  const [sex, setSex] = useState<string>('');
  const [canWrite, setCanWrite] = useState<string | undefined>();

  const filter: PrisonersInput = useMemo(
    () =>
      Object.fromEntries(
        Object.entries({
          ageMax: age[1],
          ageMin: age[0],
          regionName: region ?? undefined,
          canWrite: canWrite === 'да',
          prisonerName: name ?? undefined,
          sex: sex ?? undefined,
        }).filter(([, value]) => !!value),
      ),
    [age, region, canWrite, name, sex],
  );

  const { data, loading } = usePrisoners(DEFAULT_OFFSET, filter);

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
        <Heading variant="h1" color="brand.red">
          Список
          <br />
          преследуемых
        </Heading>
      </Grid>

      <Grid width={'100%'} item>
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
            <Typography variant="subtitle1" color="brand.black" component="p">
              В этом списке собраны истории тех, кого российское государство
              преследует из-за войны в Украине. Не все они признаны
              политзаключёнными. Среди преследуемых есть люди с разными
              политическими взглядами, совершившие разные поступки. Большинство
              из них подвергаются давлению, жестокому обращению и пыткам,
              принуждаются к признанию вины и не получают нормальной юридической
              помощи, а правозащитники не могут получить доступа к документам их
              уголовных дел.
            </Typography>
            <br />
            <Typography variant="subtitle1" color="brand.black" component="p">
              Если бы не российский политический режим и война, все они были бы
              на свободе. В этом списке важно каждое имя. Однажды все эти
              уголовные дела будут прекращены или пересмотрены.Сейчас нужно
              сделать так, чтобы ни одно имя не потерялось. Чтобы мир знал о
              каждом из них.
            </Typography>
          </Grid>
          <Grid item flexBasis="100%" mt={9.25} mb={1}>
            <SearchField
              value={name}
              startAdornment={<SearchIcon />}
              placeholder="Поиск по ФИО"
              onChange={(e) => {
                {
                  setName(e.target.value);
                }
              }}
            />
          </Grid>
          <Grid item mr={1} mt={1}>
            <FilterSlider
              label="Возраст"
              value={[age[0], age[1]]}
              min={0}
              max={99}
              onChange={(_, value) => {
                if (!Array.isArray(value)) return;
                setAge([value[0], value[1]]);
              }}
            />
          </Grid>
          <Grid item mr={1} mt={1}>
            <FilterCheckbox
              label="регион"
              value={region}
              options={getRegions().map(({ fullname }) => ({
                id: fullname,
                value: fullname,
              }))}
              onChange={(value) => setRegion(String(value))}
            />
          </Grid>
          <Grid item mr={1} mt={1}>
            <FilterCheckbox
              label="пол"
              value={sex}
              options={[
                { id: 'мужской', value: 'мужской' },
                { id: 'женский', value: 'женский' },
              ]}
              onChange={(value) => setSex(String(value))}
            />
          </Grid>
          <Grid item mr={1} mt={1}>
            <FilterCheckbox
              label="можно написать"
              value={canWrite}
              options={[{ id: 'да', value: 'да' }]}
              onChange={(value) => {
                if (value !== 'да') return;
                setCanWrite('да');
              }}
            />
          </Grid>
          <Grid item mt={1}>
            <Button
              variant="outline"
              onClick={() => {
                setAge([0, 99]);
                setRegion('');
                setSex('');
                setName('');
                setCanWrite(undefined);
              }}
            >
              очистить
            </Button>
          </Grid>
          <Grid item flexBasis="100%" textAlign="center" mt={1} mb={4}>
            <Typography variant="subtitle1">
              {loading
                ? 'Загрузка...'
                : `Найдено: ${
                    (prisoners?.length ?? 0) >= 300
                      ? `${prisoners?.length}+`
                      : `${prisoners?.length}`
                  }`}
            </Typography>
          </Grid>
          {prisoners && (
            <Grid item flex={1} mt={10} flexBasis="100%" maxWidth="100%">
              <Grid container rowSpacing={8.5} justifyContent="center">
                <PrisonersList prisoners={cachedPrisoners} />
              </Grid>
            </Grid>
          )}
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
