import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Switch, FormControlLabel, FormHelperText } from '@mui/material';

// ----------------------------------------------------------------------

export default function RHFSwitch({
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
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div>
          // @ts-expect-error TS(2749): 'FormControlLabel' refers to a value, but is being... Remove this comment to see the full error message
          <FormControlLabel control={<Switch {...field} checked={field.value} />} {...other} />

          // @ts-expect-error TS(2552): Cannot find name 'error'. Did you mean 'Error'?
          {(!!error || helperText) && (
            // @ts-expect-error TS(2749): 'FormHelperText' refers to a value, but is being u... Remove this comment to see the full error message
            <FormHelperText error={!!error}>{error ? error?.message : helperText}</FormHelperText>
          )}
        </div>
      )}
    />
  );
}

RHFSwitch.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};
