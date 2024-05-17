'use client';

import { FC, useState } from 'react';

import { Prisoner } from '@/apollo/hooks/usePrisoners';
import { Button } from '@/components/atoms/Button/Button';

import { MessageDialog } from '../Dialog/Dialog';

type LetterDialogProps = {
  prisoner: Prisoner;
};
export const LetterDialog: FC<LetterDialogProps> = ({ prisoner }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      {prisoner && (
        <MessageDialog
          prisoner={prisoner}
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
      <Button onClick={() => setIsDialogOpen(true)}>написать письмо</Button>
    </>
  );
};
