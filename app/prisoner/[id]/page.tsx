'use client';

import { usePrisoner } from '../../../apollo/hooks/usePrisoner';

export default function Prisoner({ params }: { params: { id: string } }) {
  const { data } = usePrisoner(params.id);

  return data?.prisoner?.prisonerData?.name;
}
