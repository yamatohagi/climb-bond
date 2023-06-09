import { ObservableQuery } from '@apollo/client';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { RHFAutocompleteAddItem } from 'src/components/hook-form';
import {
  CreateOneGymMutation,
  GymOptionsQuery,
  GymOptionsQueryResult,
} from 'src/generated/graphql';
import GymCreateModal from 'src/sections/_gym/create/GymCreateModal';
import { GymInput } from 'src/sections/_gym/create/hooks/usePostForm';

export const GymSelectInput = ({
  gyms,
  refetch,
  setFormValue,
}: {
  gyms: GymOptionsQuery['gyms'];
  refetch: ObservableQuery['refetch'];
  setFormValue: (value: CreateOneGymMutation) => void;
}) => {
  const [dialogValue, setDialogValue] = useState('');

  const handleClose = () => {
    setDialogValue('');
  };

  return (
    <>
      <RHFAutocompleteAddItem
        name="gymId"
        label="ジム名"
        setDialogValue={setDialogValue}
        options={gyms.map((item) => ({ value: item.id.toString(), label: item.name }))}
      ></RHFAutocompleteAddItem>
      <GymCreateModal
        open={dialogValue !== ''}
        refetch={refetch}
        onClose={handleClose}
        defaultName={dialogValue}
        afterSubmit={setFormValue}
      />
    </>
  );
};
