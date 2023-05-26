import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Autocomplete, TextField } from '@mui/material';

// ----------------------------------------------------------------------

export default function RHFAutocomplete({
  name,
  label,
  helperText,
  ...other
}: any) {
  const { control, setValue } = useFormContext();

  return (
    // @ts-expect-error TS(2749): 'Controller' refers to a value, but is being used ... Remove this comment to see the full error message
    <Controller
      name={name}
      // @ts-expect-error TS(2588): Cannot assign to 'control' because it is a constan... Remove this comment to see the full error message
      control={control}
      // @ts-expect-error TS(2304): Cannot find name 'render'.
      render={({ field, fieldState: { error } }) => (
        // @ts-expect-error TS(2749): 'Autocomplete' refers to a value, but is being use... Remove this comment to see the full error message
        <Autocomplete
          // @ts-expect-error TS(2304): Cannot find name 'field'.
          {...field}
          // @ts-expect-error TS(2552): Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
          onChange={(event, newValue) => setValue(name, newValue, { shouldValidate: true })}
          // @ts-expect-error TS(2304): Cannot find name 'renderInput'.
          renderInput={(params) => (
            // @ts-expect-error TS(2749): 'TextField' refers to a value, but is being used a... Remove this comment to see the full error message
            <TextField
              // @ts-expect-error TS(2304): Cannot find name 'label'.
              label={label}
              // @ts-expect-error TS(2304): Cannot find name 'error'.
              error={!!error}
              // @ts-expect-error TS(2304): Cannot find name 'helperText'.
              helperText={error ? error?.message : helperText}
              // @ts-expect-error TS(2304): Cannot find name 'params'.
              {...params}
            />
          )}
          // @ts-expect-error TS(2304): Cannot find name 'other'.
          {...other}
        />
      )}
    />
  );
}

RHFAutocomplete.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.node,
};
