import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField } from '@mui/material';

// ----------------------------------------------------------------------

export default function RHFTextField({
  name,
  helperText,
  ...other
}: any) {
  const { control } = useFormContext();

  return (
    // @ts-expect-error TS(2749): 'Controller' refers to a value, but is being used ... Remove this comment to see the full error message
    <Controller
      name={name}
      // @ts-expect-error TS(2588): Cannot assign to 'control' because it is a constan... Remove this comment to see the full error message
      control={control}
      // @ts-expect-error TS(2304): Cannot find name 'render'.
      render={({ field, fieldState: { error } }) => (
        // @ts-expect-error TS(2749): 'TextField' refers to a value, but is being used a... Remove this comment to see the full error message
        <TextField
          // @ts-expect-error TS(2304): Cannot find name 'field'.
          {...field}
          // @ts-expect-error TS(2304): Cannot find name 'fullWidth'.
          fullWidth
          // @ts-expect-error TS(2304): Cannot find name 'value'.
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          // @ts-expect-error TS(2552): Cannot find name 'error'. Did you mean 'Error'?
          error={!!error}
          // @ts-expect-error TS(2304): Cannot find name 'helperText'.
          helperText={error ? error?.message : helperText}
          // @ts-expect-error TS(2304): Cannot find name 'other'.
          {...other}
        />
      )}
    />
  );
}

RHFTextField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};
