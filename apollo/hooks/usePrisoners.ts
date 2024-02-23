import { useMemo } from 'react';

import {
  RootQueryToPrisonerConnectionWhereArgs,
  usePrisonersQuery,
} from '../generated';
export type Prisoners = NonNullable<
  NonNullable<ReturnType<typeof usePrisoners>['data']>['prisoners']
>['edges'];
export type Prisoner = Prisoners[number]['node'];
export type PrisonersInput = RootQueryToPrisonerConnectionWhereArgs;

export const usePrisoners = (offset: number, filter?: PrisonersInput) => {
  const { loading, error, data } = usePrisonersQuery({
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
    variables: {
      offset,
      filter,
    },
  });

  return useMemo(() => ({ loading, error, data }), [loading, error, data]);
};
