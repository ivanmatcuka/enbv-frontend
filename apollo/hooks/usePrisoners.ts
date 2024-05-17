import { useMemo } from 'react';

import {
  PrisonersDocument,
  PrisonersQueryResult,
  RootQueryToPrisonerConnectionWhereArgs,
  usePrisonersQuery,
} from '../generated';
export type Prisoners = NonNullable<
  NonNullable<ReturnType<typeof usePrisoners>['data']>['prisoners']
>['edges'];
export type Prisoner = Prisoners[number]['node'];
export type PrisonerData = Prisoner['prisonerData'];
export type PrisonersInput = RootQueryToPrisonerConnectionWhereArgs;
export { PrisonersDocument };
export type { PrisonersQueryResult };

export const usePrisoners = (offset?: number, filter?: PrisonersInput) => {
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
