import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import {
  Checkbox,
  FormLabel,
  FormGroup,
  FormControl,
  FormHelperText,
  FormControlLabel,
} from '@mui/material';

// ----------------------------------------------------------------------

export function RHFCheckbox({
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
          <FormControlLabel control={<Checkbox {...field} checked={field.value} />} {...other} />

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

RHFCheckbox.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

// ----------------------------------------------------------------------

export function RHFMultiCheckbox({
  row,
  name,
  label,
  options,
  spacing,
  helperText,
  ...other
}: any) {
  const { control } = useFormContext();

  const getSelected = (selectedItems: any, item: any) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value: any) => value !== item)
      : [...selectedItems, item];

  return (
    // @ts-expect-error TS(2749): 'Controller' refers to a value, but is being used ... Remove this comment to see the full error message
    <Controller
      name={name}
      // @ts-expect-error TS(2588): Cannot assign to 'control' because it is a constan... Remove this comment to see the full error message
      control={control}
      // @ts-expect-error TS(2304): Cannot find name 'render'.
      render={({ field, fieldState: { error } }) => (
        // @ts-expect-error TS(2749): 'FormControl' refers to a value, but is being used... Remove this comment to see the full error message
        <FormControl component="fieldset">
          {label && (
            // @ts-expect-error TS(2749): 'FormLabel' refers to a value, but is being used a... Remove this comment to see the full error message
            <FormLabel component="legend" sx={{ typography: 'body2' }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {label}
            </FormLabel>
          )}

          // @ts-expect-error TS(2749): 'FormGroup' refers to a value, but is being used a... Remove this comment to see the full error message
          <FormGroup
            // @ts-expect-error TS(2304): Cannot find name 'sx'.
            sx={{
              // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              ...(row && {
                flexDirection: 'row',
              }),
              '& .MuiFormControlLabel-root': {
                '&:not(:last-of-type)': {
                  // @ts-expect-error TS(2304): Cannot find name 'spacing'.
                  mb: spacing || 0,
                },
                // @ts-expect-error TS(2695): Left side of comma operator is unused and has no s... Remove this comment to see the full error message
                ...(row && {
                  mr: 0,
                  '&:not(:last-of-type)': {
                    // @ts-expect-error TS(2304): Cannot find name 'spacing'.
                    mr: spacing || 2,
                  },
                }),
              },
            }}
          >
            // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
            {options.map((option: any) => <FormControlLabel
              // @ts-expect-error TS(2304): Cannot find name 'key'.
              key={option.value}
              // @ts-expect-error TS(2304): Cannot find name 'control'.
              control={
                <Checkbox
                  // @ts-expect-error TS(2304): Cannot find name 'checked'.
                  checked={field.value.includes(option.value)}
                  // @ts-expect-error TS(2304): Cannot find name 'onChange'.
                  onChange={() => field.onChange(getSelected(field.value, option.value))}
                />
              }
              // @ts-expect-error TS(2304): Cannot find name 'label'.
              label={option.label}
              // @ts-expect-error TS(2304): Cannot find name 'other'.
              {...other}
            />)}
          </FormGroup>

          // @ts-expect-error TS(2304): Cannot find name 'error'.
          {(!!error || helperText) && (
            // @ts-expect-error TS(2749): 'FormHelperText' refers to a value, but is being u... Remove this comment to see the full error message
            <FormHelperText error={!!error} sx={{ mx: 0 }}>
              // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}

RHFMultiCheckbox.propTypes = {
  row: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  spacing: PropTypes.number,
  helperText: PropTypes.node,
};
